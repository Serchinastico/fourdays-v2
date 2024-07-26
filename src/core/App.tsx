import { TelarContextProvider } from "@madeja-studio/telar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <TelarContextProvider>
      <View>
        <Text>Hola</Text>
      </View>
    </TelarContextProvider>
  );
}
