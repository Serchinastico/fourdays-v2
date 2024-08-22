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

export type RootScreenProps<TRoute extends keyof RootNavigationParamList> =
  ScreenProps<RootNavigationParamList, TRoute>;

export type ScreenProps<
  TParamList extends Record<string, any>,
  TRoute extends keyof TParamList,
> = NativeStackScreenProps<TParamList, TRoute>;
