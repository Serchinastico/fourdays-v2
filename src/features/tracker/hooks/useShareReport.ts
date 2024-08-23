import { useFood } from "@app/domain/food/hooks/useFood";
import { color } from "@app/ui/theme/color";
import { t } from "@lingui/macro";
import { repeat } from "@madeja-studio/cepillo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs, { Dayjs } from "dayjs";
import * as FileSystem from "expo-file-system";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import { useCallback, useMemo } from "react";

import { CONSUMED_FOOD_DATE_FORMAT } from "./useConsumedFood";

const DATE_FORMAT = "YYYY-MM-DD";

const HTML_TEMPLATE = `
<html>
<head>
  <meta name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  <style>
      html {
        -webkit-print-color-adjust: exact;
      }

      .calendar {
        width: 100%;
      }

      .weekdays {
        margin: 0;
        padding: 40px 0;
      }

      .weekdays li {
        display: inline-block;
        width: 13.6%;
        font-weight: 600;
        text-transform: uppercase;
        color: #17181c;
        text-align: center;
      }

      .days {
        padding: 20px 0;
        margin: 0;
      }

      .days > li {
        list-style-type: none;
        display: inline-flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 13.6%;
        min-height: 200px;
        text-align: center;
        margin-bottom: 5px;
        font-size: 24px;
        color: #17181c;
      }

      /* Events */
      .events {
        padding: 0;
        margin: 10px;
      }

      /* Event */
      .events li {
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        font-size: 12px;
        text-align: center;
        text-transform: uppercase;
        font-weight: 700;
        color: #17181c;
        border-radius: 8px;
        margin-bottom: 4px;
      }

      .events li.sm {
        font-size: 10px;
      }

      .events li.xs {
        font-size: 8px;
      }

      span.day {
        background-color: ${color.primary};
        color: #fff;
      }
  </style>
</head>

<body style="font-family: sans-serif; display: flex; flex-direction: column">
  <div style="display: flex; flex-direction: row; align-items: center; padding: 20px 20px;">
    <div style="display: flex; flex-direction: column">
      <h1 style="font-size: 36px; font-weight: 900; margin: 0; padding: 0">
        %TITLE%
      </h1>
      <h2 style="font-size: 20px; font-weight: 500; margin: 0; padding: 0">
        <span style="font-weight: light">%DATE%</span>
      </h2>
    </div>
  </div>

  <div class="calendar">
    <ul class="weekdays">
      <li>%FIRST_DAY%</li>
      <li>%SECOND_DAY%</li>
      <li>%THIRD_DAY%</li>
      <li>%FOURTH_DAY%</li>
      <li>%FIFTH_DAY%</li>
      <li>%SIXTH_DAY%</li>
      <li>%SEVENTH_DAY%</li>
    </ul>

    <ul class="days">
      %CONTENT%
    </ul>
  </div>
</body>
</html>
`;

interface Props {
  date: Dayjs;
}

export const useShareReport = () => {
  const { allFood } = useFood();
  const exportDirectory = useMemo(
    () => `${FileSystem.cacheDirectory}Export`,
    []
  );

  const shareReport = useCallback(
    async ({ date }: Props) => {
      const startDate = date.startOf("month");
      const endDate = date.endOf("month");

      /**
       * Retrieve all consumed food ids for each day of the reported month.
       * We are accessing the async storage directly because we don't really
       * want to listen to changes on the wrapper atom.
       */
      const consumedFoodIdsForDays: { [date: string]: string[] } = {};
      let queryDay = startDate;
      while (queryDay.isBefore(endDate) || queryDay.isSame(endDate)) {
        const formattedDate = queryDay.format(CONSUMED_FOOD_DATE_FORMAT);
        const storedFoodIds = await AsyncStorage.getItem(
          `consumed_food_ids:${formattedDate}`
        );
        /**
         * There seems to be a bug when storing data that requires me to double parse
         * the asyncStorage value
         */
        consumedFoodIdsForDays[formattedDate] =
          storedFoodIds !== null ? JSON.parse(JSON.parse(storedFoodIds)) : [];

        queryDay = queryDay.add(1, "days");
      }

      /**
       * dayjs.day() returns numbers from 0 (Sunday) to 6 (Saturday).
       * We add 7 to make sure the value is never negative
       */
      const day = startDate.day();
      const gapDays = repeat((7 + day - 1) % 7, 0)
        .map(() => "<li>&nbsp;</li>")
        .join("");

      let currentDate = startDate;
      let calendarDays = "";
      Object.entries(consumedFoodIdsForDays)
        .sort(([date1], [date2]) => dayjs(date1).unix() - dayjs(date2).unix())
        .map(([_, foodIds]) => foodIds)
        .forEach((foodIds) => {
          const foodNames = foodIds.map(
            (foodId) => allFood.find((food) => food.id === foodId)!.name
          );

          const eventsHtml = foodNames
            .map((foodName) => {
              return `<li class="${
                foodName.length > 13 ? "xs" : foodName.length > 10 ? "sm" : ""
              }">${foodName}</li>`;
            })
            .join("\n");

          calendarDays += `<li><span class="day">${currentDate.date()}</span> ${
            foodNames.length > 0 ? `<ul class="events">${eventsHtml}</ul>` : ""
          }</li>`;

          currentDate = currentDate.add(1, "day");
        });

      const renderedHtml = HTML_TEMPLATE.replace("%TITLE%", t`Monthly report`)
        .replace("%DATE%", `${date.format("MMMM")} ${date.year()}`)
        .replace("%FIRST_DAY%", t`Monday`)
        .replace("%SECOND_DAY%", t`Tuesday`)
        .replace("%THIRD_DAY%", t`Wednesday`)
        .replace("%FOURTH_DAY%", t`Thursday`)
        .replace("%FIFTH_DAY%", t`Friday`)
        .replace("%SIXTH_DAY%", t`Saturday`)
        .replace("%SEVENTH_DAY%", t`Sunday`)
        .replace("%CONTENT%", `${gapDays}\n${calendarDays}`);

      console.log(renderedHtml);
      const { uri: temporaryUri } = await Print.printToFileAsync({
        html: renderedHtml,
      });

      const uri = `${exportDirectory}/Report.${date.format(DATE_FORMAT)}.pdf`;

      await FileSystem.makeDirectoryAsync(exportDirectory, {
        intermediates: true,
      });
      await FileSystem.moveAsync({ from: temporaryUri, to: uri });

      await Sharing.shareAsync(uri, {
        UTI: ".pdf",
        dialogTitle: t`Share monthly report`,
        mimeType: "application/pdf",
      });
    },
    [allFood, exportDirectory]
  );

  return { shareReport };
};
