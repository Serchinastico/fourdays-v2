import { color } from "@app/ui/theme/color";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
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
      <I18nProvider i18n={i18n}>
        <PreloadScreen>
          <NavigationContainer>{children}</NavigationContainer>
        </PreloadScreen>
      </I18nProvider>
    </TelarContextProvider>
  );
};

export default AllProviders;
