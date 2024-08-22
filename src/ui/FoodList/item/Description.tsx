import { color } from "@madeja-studio/telar";
import { Text } from "react-native";

import { DescriptionItem } from "./types";

interface Props {
  item: DescriptionItem;
}

const Description = ({ item }: Props) => {
  return (
    <Text style={[tw`px-4 py-6 text-lg`, { color: color.warmGray[60] }]}>
      {item.text}
    </Text>
  );
};

export default Description;
