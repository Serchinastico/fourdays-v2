import "./tw";
import "./dayjs";

import * as SplashScreen from "expo-splash-screen";

export const bootstrap = () => {
  // Keep the splash screen visible while we fetch resources
  SplashScreen.preventAutoHideAsync();
};
