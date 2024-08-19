import { Button, Row, VectorIcon } from "@madeja-studio/telar";
import { OnPress } from "@madeja-studio/telar/lib/typescript/src/component/Button/press";
import { Text } from "react-native";
import tw from "twrnc";

import { HeaderItem } from "./types";

interface Props {
  isOpen: boolean;
  item: HeaderItem;
  onPress: OnPress;
}

const Header = ({ isOpen, item, onPress }: Props) => {
  return (
    <Button.Container hasHapticFeedback onPress={onPress}>
      <Row style={tw`p-4 justify-between`}>
        <Text style={tw`text-xl`}>{item.title}</Text>

        <VectorIcon
          icon={{
            family: "Feather",
            name: isOpen ? "chevron-up" : "chevron-down",
          }}
          size={24}
          style={tw`px-2`}
        />
      </Row>
    </Button.Container>
  );
};

export default Header;
