import { color } from "@madeja-studio/telar";
import { Text } from "react-native";
import tw from "twrnc";

import { DescriptionItem } from "./types";

interface Props {
  item: DescriptionItem;
}

const Description = ({ item }: Props) => {
  return (
    <Text style={[tw`p-4 text-lg`, { color: color.warmGray[60] }]}>
      {item.text}
    </Text>
  );
};

export default Description;
