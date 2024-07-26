import { Separator } from "@madeja-studio/telar";
import { PropsWithChildren } from "react";
import { Text, View, ViewProps } from "react-native";
import tw from "twrnc";

interface Props extends PropsWithChildren<ViewProps> {
  title: string;
}

export const Header = ({ children, style, title, ...props }: Props) => {
  return (
    <View style={[tw`flex-col`, style]}>
      <View style={tw`flex-row items-center justify-between px-4 pt-2 pb-4`}>
        <Text style={tw`font-bold text-3xl`}>{title}</Text>

        <View style={tw`flex-row`}>{children}</View>
      </View>

      <Separator />
    </View>
  );
};
