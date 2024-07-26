import TrackerScreen from "@app/features/tracker/TrackerScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootNavigationParamList } from "./routes";

const Stack = createNativeStackNavigator<RootNavigationParamList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={TrackerScreen} name="tracker" />
    </Stack.Navigator>
  );
};

export default RootNavigation;
