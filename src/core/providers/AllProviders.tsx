import { color } from "@app/ui/theme/color";
import { TelarContextProvider } from "@madeja-studio/telar";
import { NavigationContainer } from "@react-navigation/native";
import { PropsWithChildren } from "react";

import PreloadScreen from "../bootstrap/PreloadScreen";

interface Props extends PropsWithChildren {}

const AllProviders = ({ children }: Props) => {
  return (
    <TelarContextProvider
      theme={{ core: { color: { primary: color.primary } } }}
    >
      <PreloadScreen>
        <NavigationContainer>{children}</NavigationContainer>
      </PreloadScreen>
    </TelarContextProvider>
  );
};

export default AllProviders;
