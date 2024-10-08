import { Button, type OnPress, Row, VectorIcon } from "@madeja-studio/telar";
import { Text } from "react-native";

import { GroupItem } from "./types";

interface Props {
  item: GroupItem;
  onPress: OnPress;
}

const Group = ({ item, onPress }: Props) => {
  return (
    <Button.Container hasHapticFeedback onPress={onPress}>
      <Row style={tw`p-4 mb-2 justify-between`}>
        <Text style={tw`text-xl font-medium`}>{item.title}</Text>

        <VectorIcon
          icon={{
            family: "Feather",
            name: item.isOpen ? "chevron-up" : "chevron-down",
          }}
          size={24}
          style={tw`px-2`}
        />
      </Row>
    </Button.Container>
  );
};

export default Group;
