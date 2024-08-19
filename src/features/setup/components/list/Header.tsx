import { Button, Row, VectorIcon } from "@madeja-studio/telar";
import { Text } from "react-native";
import tw from "twrnc";

import { HeaderItem } from "./types";

interface Props extends HeaderItem {}

const Header = ({ title }: Props) => {
  return (
    <Button.Container hasHapticFeedback>
      <Row style={tw`p-4 justify-between`}>
        <Text style={tw`text-xl`}>{title}</Text>

        <VectorIcon
          icon={{ family: "Feather", name: "chevron-down" }}
          size={24}
          style={tw`px-2`}
        />
      </Row>
    </Button.Container>
  );
};

export default Header;
