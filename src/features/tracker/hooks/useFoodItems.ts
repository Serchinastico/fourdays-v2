import { atoms } from "@app/core/storage/state";
import { fuzzySearch } from "@app/core/utils/fuzzySearch";
import { useFood } from "@app/domain/food/hooks/useFood";
import { useFoodGroup } from "@app/domain/food/hooks/useFoodGroup";
import { GroupId } from "@app/domain/food/models/food";
import { selectableFoodToFoodRows } from "@app/ui/FoodList/foodItems";
import {
  FoodItem,
  GroupItem,
  SelectableFood,
} from "@app/ui/FoodList/item/types";
import { t } from "@lingui/macro";
import { groupBy, toggleItem } from "@madeja-studio/cepillo";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { useCallback, useMemo, useState } from "react";

import useConsumedFood from "./useConsumedFood";

const FORBIDDEN_FOOD_GROUP_ID = "forbidden_food";
const CONSUMED_FOOD_GROUP_ID = "consumed_food";

interface Props {
  date: dayjs.Dayjs;
  searchText: string;
}

const useFoodItems = ({ date, searchText }: Props) => {
  const [openedGroupIds, setOpenedGroupIds] = useState<GroupId[]>([]);
  const bannedFoodIds = useAtomValue(atoms.bannedFoodIds);
  const {
    consumedFoodIdsOnDate,
    consumedFoodIdsOnDateMinusOne,
    consumedFoodIdsOnDateMinusThree,
    consumedFoodIdsOnDateMinusTwo,
    setConsumedFoodIdsOnDate,
  } = useConsumedFood({ date });

  const { allowedFood } = useFood();
  const { allGroups } = useFoodGroup();

  const forbiddenFoodIds = useMemo(
    () =>
      new Set([
        ...consumedFoodIdsOnDate,
        ...consumedFoodIdsOnDateMinusOne,
        ...consumedFoodIdsOnDateMinusTwo,
        ...consumedFoodIdsOnDateMinusThree,
      ]),
    [
      consumedFoodIdsOnDate,
      consumedFoodIdsOnDateMinusOne,
      consumedFoodIdsOnDateMinusTwo,
      consumedFoodIdsOnDateMinusThree,
    ]
  );

  const forbiddenFoodItems: FoodItem[] = useMemo(() => {
    const header: GroupItem = {
      groupId: FORBIDDEN_FOOD_GROUP_ID,
      isOpen: openedGroupIds.includes(FORBIDDEN_FOOD_GROUP_ID),
      tag: "group",
      title: t`Forbidden food`,
    };

    if (!openedGroupIds.includes(header.groupId)) {
      return [header];
    }

    const forbiddenFood: SelectableFood[] = Array.from(forbiddenFoodIds)
      .map((id) => allowedFood.find((food) => food.id === id)!)
      .map((food) => ({ ...food, isSelected: true }));

    return [header, ...selectableFoodToFoodRows(forbiddenFood)];
  }, [openedGroupIds, allowedFood, forbiddenFoodIds]);

  const consumedFoodItems: FoodItem[] = useMemo(() => {
    const header: GroupItem = {
      groupId: CONSUMED_FOOD_GROUP_ID,
      isOpen: openedGroupIds.includes(CONSUMED_FOOD_GROUP_ID),
      tag: "group",
      title: t`Consumed food`,
    };

    if (!openedGroupIds.includes(header.groupId)) {
      return [header];
    }

    const consumedFood: SelectableFood[] = consumedFoodIdsOnDate
      .map((id) => allowedFood.find((food) => food.id === id)!)
      .map((food) => ({ ...food, isSelected: true }));

    return [header, ...selectableFoodToFoodRows(consumedFood)];
  }, [openedGroupIds, allowedFood, consumedFoodIdsOnDate]);

  const getSearchItems = useCallback((): FoodItem[] => {
    const filteredFood = fuzzySearch({
      items: allowedFood,
      key: "name",
      search: searchText,
    });

    const groupedFood = groupBy(filteredFood, (food) => {
      if (consumedFoodIdsOnDate.includes(food.id))
        return t`Available in 4 days`;
      else if (consumedFoodIdsOnDateMinusOne.includes(food.id))
        return t`Available in 3 days`;
      else if (consumedFoodIdsOnDateMinusTwo.includes(food.id))
        return t`Available in 2 days`;
      else if (consumedFoodIdsOnDateMinusThree.includes(food.id))
        return t`Available in 1 day`;
      else return t`Available`;
    });

    return Object.entries(groupedFood)
      .sort(([aKey], [bKey]) => aKey.localeCompare(bKey))
      .flatMap(([section, foodList]) => {
        return [
          { tag: "section", text: section },
          ...selectableFoodToFoodRows(
            foodList.map((food) => ({ ...food, isSelected: true }))
          ),
        ];
      });
  }, [allowedFood, consumedFoodItems, searchText]);

  const items: FoodItem[] = useMemo(() => {
    if (searchText.trim() !== "") {
      return getSearchItems();
    }

    const foodGroups: FoodItem[] = allGroups.flatMap((group) => {
      const header: GroupItem = {
        groupId: group.id,
        isOpen: openedGroupIds.includes(group.id),
        tag: "group",
        title: group.name,
      };

      if (!openedGroupIds.includes(group.id)) {
        return [header];
      }

      const groupFood = allowedFood
        .filter((food) => food.groupId === group.id)
        .filter((food) => !bannedFoodIds.includes(food.id))
        .filter((food) => !forbiddenFoodIds.has(food.id))
        .map((food) => ({ ...food, isSelected: true }));

      return [header, ...selectableFoodToFoodRows(groupFood)];
    });

    return [
      {
        tag: "description",
        text: t`Here you can configure the food you ate and the food you can eat.`,
      },
      ...foodGroups,
      ...forbiddenFoodItems,
      ...consumedFoodItems,
    ];
  }, [
    bannedFoodIds,
    consumedFoodItems,
    forbiddenFoodIds,
    forbiddenFoodItems,
    getSearchItems,
    openedGroupIds,
    searchText,
  ]);

  const toggleConsumedFoodId = useCallback(
    (foodId: string) => {
      setConsumedFoodIdsOnDate(async (prev) => toggleItem(await prev, foodId));
    },
    [setConsumedFoodIdsOnDate]
  );

  const toggleOpenedGroupId = useCallback(
    (groupId: GroupId) =>
      setOpenedGroupIds((groupIds) => toggleItem(groupIds, groupId)),
    []
  );

  return { items, toggleConsumedFoodId, toggleOpenedGroupId };
};

export default useFoodItems;
