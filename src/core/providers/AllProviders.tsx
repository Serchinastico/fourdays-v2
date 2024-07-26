import { TelarContextProvider } from "@madeja-studio/telar";
import { NavigationContainer } from "@react-navigation/native";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const AllProviders = ({ children }: Props) => {
  return (
    <TelarContextProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </TelarContextProvider>
  );
};

export default AllProviders;
