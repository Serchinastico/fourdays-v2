import { Column } from "@madeja-studio/telar";
import { PropsWithChildren } from "react";
import { Text } from "react-native";
import tw from "twrnc";

interface Props extends PropsWithChildren {
  label: string;
}

const InputContainer = ({ children, label }: Props) => {
  return (
    <Column style={tw`px-4 py-2`}>
      <Text style={tw`font-bold uppercase`}>{label}</Text>

      {children}
    </Column>
  );
};

export default InputContainer;
