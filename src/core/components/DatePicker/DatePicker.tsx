import { color } from "@app/ui/theme/color";
import { Button } from "@madeja-studio/telar";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import dayjs, { Dayjs } from "dayjs";
import { useCallback } from "react";
import { Platform, Text, ViewProps } from "react-native";

interface Props extends ViewProps {
  date: Dayjs;
  onDatePick: (date: Dayjs) => Promise<void> | void;
}

export const DatePicker = ({ date, onDatePick, style, ...props }: Props) => {
  const openAndroidDatePicker = useCallback(() => {
    DateTimePickerAndroid.open({
      mode: "date",
      negativeButton: { textColor: color.secondary },
      positiveButton: { textColor: color.primary },
      value: date.toDate(),
    });
  }, []);

  switch (Platform.OS) {
    case "ios":
      return (
        <DateTimePicker
          // @ts-ignore
          accentColor={color.primary}
          display="calendar"
          mode="date"
          onChange={(_event, date) => onDatePick(dayjs(date))}
          style={[tw`font-medium`, style]}
          value={date.toDate()}
          {...props}
        />
      );
    case "android":
      return (
        <Button.Container
          hasHapticFeedback
          onPress={openAndroidDatePicker}
          style={style}
          {...props}
        >
          <Text style={tw`font-medium text-xl ml-2`}>{date.format("ll")}</Text>
        </Button.Container>
      );
    case "windows":
    case "macos":
    case "web":
      return null;
  }
};
