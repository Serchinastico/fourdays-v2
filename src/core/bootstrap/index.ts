import * as SplashScreen from "expo-splash-screen";

import "./dayjs";
import "./tw";

export const bootstrap = () => {
  // Keep the splash screen visible while we fetch resources
  SplashScreen.preventAutoHideAsync();
};
