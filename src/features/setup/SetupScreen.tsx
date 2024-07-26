import { t } from "@lingui/macro";
import { Button, SafeAreaView } from "@madeja-studio/telar";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import tw from "twrnc";

import Header from "./components/Header";

const SetupScreen = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView style={tw`flex flex-1`}>
      <Header
        onAddPress={() => {}}
        onClosePress={() => {}}
        onSearchPress={() => {}}
      />

      <ScrollView>
        <Text>Hola</Text>
        <Text>Hola</Text>
        <Text>Hola</Text>
        <Text>Hola</Text>
        <Text>Hola</Text>
        <Text>Hola</Text>
        <Text>Hola</Text>
        <Text>Hola</Text>
        <Text>Hola</Text>
        <Text>Hola</Text>
      </ScrollView>

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
