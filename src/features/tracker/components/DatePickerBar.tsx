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
  date: Dayjs;
  onCurrentDatePress: OnPress;
  onNextDatePress: OnPress;
  onPreviousDatePress: OnPress;
}

export const DatePickerBar = ({
  date,
  onCurrentDatePress,
  onNextDatePress,
  onPreviousDatePress,
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
          onPress={onCurrentDatePress}
          style={tw`flex-1 justify-center items-center`}
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
