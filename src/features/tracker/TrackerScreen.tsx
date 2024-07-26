import { Text, View } from "react-native";
import tw from "twrnc";

const TrackerScreen = () => {
  return (
    <View style={tw`p-8 flex flex-1 justify-center items-center`}>
      <Text style={tw`font-bold text-4xl`}>This is Four Days</Text>
    </View>
  );
};

export default TrackerScreen;
