import "./dayjs";
import "./tw";

/**
 * We need 👆 those imports to be before anything else
 * that's why we ignore perfectionist's rules
 */
// eslint-disable-next-line perfectionist/sort-imports
import * as SplashScreen from "expo-splash-screen";

export const bootstrap = () => {
  // Keep the splash screen visible while we fetch resources
  SplashScreen.preventAutoHideAsync();
};
