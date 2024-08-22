import { Column } from "@madeja-studio/telar";
import { PropsWithChildren } from "react";
import { Text } from "react-native";

interface Props extends PropsWithChildren {
  label: string;
}

export const InputContainer = ({ children, label }: Props) => {
  return (
    <Column style={tw`px-4 py-2`}>
      <Text style={tw`font-bold uppercase`}>{label}</Text>

      {children}
    </Column>
  );
};
