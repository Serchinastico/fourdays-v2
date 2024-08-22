import CreateFoodScreen from "@app/features/createFood/CreateFoodScreen";
import CreateGroupScreen from "@app/features/createGroup/CreateGroupScreen";
import SetupScreen from "@app/features/setup/SetupScreen";
import TrackerScreen from "@app/features/tracker/TrackerScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootNavigationParamList } from "./routes";

const Stack = createNativeStackNavigator<RootNavigationParamList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="tracker"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={TrackerScreen} name="tracker" />
      <Stack.Screen component={SetupScreen} name="setup" />
      <Stack.Screen
        component={CreateFoodScreen}
        name="createFood"
        options={{ presentation: "fullScreenModal" }}
      />
      <Stack.Screen
        component={CreateGroupScreen}
        name="createGroup"
        options={{ presentation: "fullScreenModal" }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
