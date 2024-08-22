import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootNavigationParamList = {
  createFood: undefined;
  createGroup: undefined;
  setup?: { isInitialSetup: boolean };
  tracker: undefined;
};

type RootNavigationScreenProps = NativeStackScreenProps<
  RootNavigationParamList,
  "tracker"
>["navigation"];

export const useRootNavigation = useNavigation<RootNavigationScreenProps>;
