import { DatePicker } from "@app/core/components/DatePicker/DatePicker";
import {
  Button,
  Column,
  OnPress,
  Row,
  Separator,
  VectorIcon,
} from "@madeja-studio/telar";
import { Dayjs } from "dayjs";

interface Props {
  date: Dayjs;
  onNextDatePress: OnPress;
  onPreviousDatePress: OnPress;
  onSelectDate: (date: Dayjs) => Promise<void> | void;
}

export const DatePickerBar = ({
  date,
  onNextDatePress,
  onPreviousDatePress,
  onSelectDate,
}: Props) => {
  return (
    <Column>
      <Row style={tw`justify-between py-2`}>
        <Button.Icon
          color="secondary"
          hasHapticFeedback
          icon={{ family: "Feather", name: "chevron-left" }}
          onPress={onPreviousDatePress}
          variant="text"
        />

        <Button.Container
          hasHapticFeedback
          style={tw`flex-1 justify-center items-center`}
        >
          <Row style={tw`items-center`}>
            <VectorIcon
              icon={{ family: "Feather", name: "calendar" }}
              size={24}
            />

            <DatePicker date={date} onDatePick={onSelectDate} />
          </Row>
        </Button.Container>

        <Button.Icon
          color="secondary"
          hasHapticFeedback
          icon={{ family: "Feather", name: "chevron-right" }}
          onPress={onNextDatePress}
          variant="text"
        />
      </Row>
      <Separator />
    </Column>
  );
};
