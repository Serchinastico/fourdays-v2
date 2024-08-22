import { RootNavigationParamList } from "@app/core/navigation/routes";
import { FoodList } from "@app/domain/food/components/FoodList";
import { SafeAreaView, SafeAreaViewEdges } from "@madeja-studio/telar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import dayjs from "dayjs";

import Header from "./components/Header";
import useFoodItems from "./hooks/useFoodItems";

interface Props
  extends NativeStackScreenProps<RootNavigationParamList, "tracker"> {}

const TrackerScreen = ({ navigation }: Props) => {
  const { items } = useFoodItems({ date: dayjs() });

  return (
    <SafeAreaView edges={SafeAreaViewEdges.NoBottom}>
      <Header
        onSearchPress={() => {}}
        onSettingsPress={() => navigation.navigate("createFood")}
        onSharePress={() => navigation.goBack()}
      />

      <FoodList items={items} onFoodPress={() => {}} onItemPress={() => {}} />
    </SafeAreaView>
  );
};

export default TrackerScreen;
