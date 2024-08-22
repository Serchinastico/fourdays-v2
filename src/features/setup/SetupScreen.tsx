import { RootNavigationParamList } from "@app/core/navigation/routes";
import { t } from "@lingui/macro";
import { Button, SafeAreaView, SafeAreaViewEdges } from "@madeja-studio/telar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import tw from "twrnc";

import Header from "./components/Header";
import FoodList from "./components/list/FoodList";

interface Props
  extends NativeStackScreenProps<RootNavigationParamList, "setup"> {}

const SetupScreen = ({ navigation, route }: Props) => {
  const isInitialSetup = route.params?.isInitialSetup ?? true;

  const { bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView edges={SafeAreaViewEdges.NoBottom}>
      <Header
        isInitialSetup={isInitialSetup}
        onAddPress={() => navigation.navigate("createFood")}
        onClosePress={() => navigation.goBack()}
        onSearchPress={() => {}}
      />

      <FoodList onCreateGroupPress={() => navigation.navigate("createGroup")} />

      <View style={[tw`absolute bottom-[${bottom}px] self-center`]}>
        <Button
          hasHapticFeedback
          style={tw`self-center mb-4`}
          text={t`Accept`}
        />
      </View>
    </SafeAreaView>
  );
};

export default SetupScreen;
