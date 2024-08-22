import { Column, Row, Separator } from "@madeja-studio/telar";
import { PropsWithChildren } from "react";
import { Text, ViewProps } from "react-native";

interface Props extends PropsWithChildren<ViewProps> {
  hideSeparator?: boolean;
  title: string;
}

export const Header = ({ children, hideSeparator, title, ...props }: Props) => {
  return (
    <Column {...props}>
      <Row style={tw`items-center justify-between px-4 pt-2 pb-4`}>
        <Text style={tw`font-bold text-3xl`}>{title}</Text>

        <Row>{children}</Row>
      </Row>

      {!hideSeparator && <Separator />}
    </Column>
  );
};
