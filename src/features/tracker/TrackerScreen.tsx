import { RootScreenProps } from "@app/core/navigation/routes";
import { FoodList } from "@app/ui/FoodList";
import { PressableFoodItem } from "@app/ui/FoodList/item/types";
import { SafeAreaView, SafeAreaViewEdges } from "@madeja-studio/telar";
import dayjs from "dayjs";
import React, { useCallback, useState } from "react";

import { DatePickerBar } from "./components/DatePickerBar";
import Header from "./components/Header";
import useFoodItems from "./hooks/useFoodItems";

const TrackerScreen = ({ navigation }: RootScreenProps<"tracker">) => {
  const [date, setDate] = useState(dayjs());
  const [searchText, setSearchText] = useState("");
  const { items, toggleConsumedFoodId, toggleOpenedGroupId } = useFoodItems({
    date,
    searchText,
  });
  const [isSearching, setIsSearching] = useState(false);

  const onItemPress = useCallback(
    (item: PressableFoodItem) => {
      switch (item.tag) {
        case "group":
          toggleOpenedGroupId(item.groupId);
          break;
        case "create_group":
      }
    },
    [toggleOpenedGroupId]
  );

  return (
    <SafeAreaView edges={SafeAreaViewEdges.NoBottom}>
      <Header
        isSearching={isSearching}
        onCancelSearchPress={() => {
          setSearchText("");
          setIsSearching(false);
        }}
        onSearchPress={() => setIsSearching(true)}
        onSearchTextChange={setSearchText}
        onSettingsPress={() =>
          navigation.navigate("setup", { isInitialSetup: false })
        }
        onSharePress={() => {}}
        searchText={searchText}
      />

      {!isSearching && (
        <DatePickerBar
          date={date}
          onNextDatePress={() => setDate((date) => date.add(1, "day"))}
          onPreviousDatePress={() => setDate((date) => date.subtract(1, "day"))}
          onSelectDate={(date) => setDate(date)}
        />
      )}

      <FoodList
        items={items}
        onFoodPress={toggleConsumedFoodId}
        onItemPress={onItemPress}
      />
    </SafeAreaView>
  );
};

export default TrackerScreen;
