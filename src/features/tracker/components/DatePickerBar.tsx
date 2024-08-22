import {
  Button,
  Column,
  OnPress,
  Row,
  Separator,
  VectorIcon,
} from "@madeja-studio/telar";
import { Dayjs } from "dayjs";
import { Text } from "react-native";

interface Props {
  onPreviousDatePress: OnPress;
  onNextDatePress: OnPress;
  onCurrentDatePress: OnPress;
  date: Dayjs;
}

export const DatePickerBar = ({
  onCurrentDatePress,
  onNextDatePress,
  onPreviousDatePress,
  date,
}: Props) => {
  return (
    <Column>
      <Row style={tw`justify-between py-2`}>
        <Button.Icon
          hasHapticFeedback
          icon={{ family: "Feather", name: "chevron-left" }}
          color="secondary"
          variant="text"
          onPress={onPreviousDatePress}
        />

        <Button.Container
          hasHapticFeedback
          style={tw`flex-1 justify-center items-center`}
          onPress={onCurrentDatePress}
        >
          <Row style={tw`items-center`}>
            <VectorIcon
              icon={{ family: "Feather", name: "calendar" }}
              size={24}
            />

            <Text style={tw`font-medium text-xl ml-2`}>
              {date.format("ll")}
            </Text>
          </Row>
        </Button.Container>

        <Button.Icon
          hasHapticFeedback
          icon={{ family: "Feather", name: "chevron-right" }}
          color="secondary"
          variant="text"
          onPress={onNextDatePress}
        />
      </Row>
      <Separator />
    </Column>
  );
};
