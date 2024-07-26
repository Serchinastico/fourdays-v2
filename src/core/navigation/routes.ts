import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootNavigationParamList = {
  setup: undefined;
  tracker: undefined;
};

type RootNavigationScreenProps = NativeStackScreenProps<
  RootNavigationParamList,
  "tracker"
>["navigation"];

export const useRootNavigation = useNavigation<RootNavigationScreenProps>;
