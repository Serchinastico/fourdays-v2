import { RootNavigationParamList } from "@app/core/navigation/routes";
import { FoodList } from "@app/domain/food/components/FoodList";
import { FoodItem } from "@app/domain/food/components/FoodList/item/types";
import { SafeAreaView, SafeAreaViewEdges } from "@madeja-studio/telar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import dayjs from "dayjs";
import { useCallback } from "react";

import Header from "./components/Header";
import useFoodItems from "./hooks/useFoodItems";

interface Props
  extends NativeStackScreenProps<RootNavigationParamList, "tracker"> {}

const TrackerScreen = ({ navigation }: Props) => {
  const { items, toggleConsumedFoodId, toggleOpenedGroupId } = useFoodItems({
    date: dayjs(),
  });

  const onItemPress = useCallback((item: FoodItem) => {
    switch (item.tag) {
      case "group":
        toggleOpenedGroupId(item.groupId);
        break;
      case "create_group":
      case "description":
      case "row":
    }
  }, []);

  return (
    <SafeAreaView edges={SafeAreaViewEdges.NoBottom}>
      <Header
        onSearchPress={() => {}}
        onSettingsPress={() =>
          navigation.navigate("setup", { isInitialSetup: false })
        }
        onSharePress={() => navigation.goBack()}
      />

      <FoodList
        items={items}
        onFoodPress={toggleConsumedFoodId}
        onItemPress={onItemPress}
      />
    </SafeAreaView>
  );
};

export default TrackerScreen;
