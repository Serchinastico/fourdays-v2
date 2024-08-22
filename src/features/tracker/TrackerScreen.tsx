import { RootNavigationParamList } from "@app/core/navigation/routes";
import { FoodList } from "@app/ui/FoodList";
import { FoodItem } from "@app/ui/FoodList/item/types";
import { SafeAreaView, SafeAreaViewEdges } from "@madeja-studio/telar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import dayjs from "dayjs";
import { useCallback, useState } from "react";

import { DatePickerBar } from "./components/DatePickerBar";
import Header from "./components/Header";
import useFoodItems from "./hooks/useFoodItems";

interface Props
  extends NativeStackScreenProps<RootNavigationParamList, "tracker"> {}

const TrackerScreen = ({ navigation }: Props) => {
  const [date, setDate] = useState(dayjs());
  const { items, toggleConsumedFoodId, toggleOpenedGroupId } = useFoodItems({
    date,
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

      <DatePickerBar
        date={date}
        onCurrentDatePress={() => {}}
        onNextDatePress={() => setDate((date) => date.add(1, "day"))}
        onPreviousDatePress={() => setDate((date) => date.subtract(1, "day"))}
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
