import { Header } from "@app/core/components/Header";
import { Button, SafeAreaView } from "@madeja-studio/telar";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import tw from "twrnc";

const SetupScreen = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView style={tw`flex flex-1`}>
      <Header title="Configuration">
        <Button.Icon
          hasHapticFeedback
          icon={{ family: "Feather", name: "search" }}
          variant="text"
        />

        <Button.Icon
          hasHapticFeedback
          icon={{ family: "Feather", name: "plus" }}
          variant="text"
        />

        <Button.Icon
          hasHapticFeedback
          icon={{ family: "Feather", name: "x" }}
          variant="text"
        />
      </Header>

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
        <Button hasHapticFeedback style={tw`self-center mb-4`} text="Accept" />
      </View>
    </SafeAreaView>
  );
};

export default SetupScreen;
