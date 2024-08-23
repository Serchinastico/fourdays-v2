import { Row, color } from "@madeja-studio/telar";
import { Text } from "react-native";

import { SectionItem } from "./types";

interface Props {
  item: SectionItem;
}

const Section = ({ item }: Props) => {
  return (
    <Row style={tw`p-4 mb-2 justify-between`}>
      <Text style={[tw`text-base font-medium`, { color: color.warmGray[50] }]}>
        {item.text}
      </Text>
    </Row>
  );
};

export default Section;
