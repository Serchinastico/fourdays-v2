import { color } from "@madeja-studio/telar";
import { Text } from "react-native";
import tw from "twrnc";

import { DescriptionItem } from "./types";

interface Props extends DescriptionItem {}

const Description = ({ text }: Props) => {
  return (
    <Text style={[tw`p-4 text-lg`, { color: color.warmGray[60] }]}>{text}</Text>
  );
};

export default Description;
