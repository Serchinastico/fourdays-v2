import { TelarContextProvider } from "@madeja-studio/telar";
import { NavigationContainer } from "@react-navigation/native";
import { PropsWithChildren } from "react";

import PreloadScreen from "../bootstrap/PreloadScreen";

interface Props extends PropsWithChildren {}

const AllProviders = ({ children }: Props) => {
  return (
    <TelarContextProvider>
      <PreloadScreen>
        <NavigationContainer>{children}</NavigationContainer>
      </PreloadScreen>
    </TelarContextProvider>
  );
};

export default AllProviders;
