import { t } from "@lingui/macro";
import { Button, SafeAreaView, SafeAreaViewEdges } from "@madeja-studio/telar";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import tw from "twrnc";

import Header from "./components/Header";
import FoodList from "./components/list/FoodList";

const SetupScreen = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView edges={SafeAreaViewEdges.NoBottom} style={tw`flex`}>
      <Header
        onAddPress={() => {}}
        onClosePress={() => {}}
        onSearchPress={() => {}}
      />

      <FoodList />

      <View style={[tw`absolute bottom-[${bottom}px] left-0 right-0`]}>
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
