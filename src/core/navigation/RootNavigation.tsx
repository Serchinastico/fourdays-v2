import AddFoodScreen from "@app/features/addFood/AddFoodScreen";
import SetupScreen from "@app/features/setup/SetupScreen";
import TrackerScreen from "@app/features/tracker/TrackerScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootNavigationParamList } from "./routes";

const Stack = createNativeStackNavigator<RootNavigationParamList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="setup"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={TrackerScreen} name="tracker" />
      <Stack.Screen component={SetupScreen} name="setup" />
      <Stack.Screen
        component={AddFoodScreen}
        name="addFood"
        options={{ presentation: "fullScreenModal" }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
