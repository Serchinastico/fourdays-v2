import { RootScreenProps } from "@app/core/navigation/routes";
import { FoodList } from "@app/ui/FoodList";
import { PressableFoodItem } from "@app/ui/FoodList/item/types";
import { t } from "@lingui/macro";
import { Button, SafeAreaView, SafeAreaViewEdges } from "@madeja-studio/telar";
import { useCallback, useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Header from "./components/Header";
import useFoodItems from "./hooks/useFoodItems";

const SetupScreen = ({ navigation, route }: RootScreenProps<"setup">) => {
  const isInitialSetup = route.params?.isInitialSetup ?? true;

  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { bottom } = useSafeAreaInsets();
  const { items, toggleBannedFoodId, toggleOpenedGroupId } = useFoodItems({
    searchText,
  });

  const onItemPress = useCallback((item: PressableFoodItem) => {
    switch (item.tag) {
      case "create_group":
        navigation.navigate("createGroup");
        break;
      case "group":
        toggleOpenedGroupId(item.groupId);
        break;
    }
  }, []);

  return (
    <SafeAreaView edges={SafeAreaViewEdges.NoBottom}>
      <Header
        isInitialSetup={isInitialSetup}
        isSearching={isSearching}
        onAddPress={() => navigation.navigate("createFood")}
        onCancelSearchPress={() => {
          setSearchText("");
          setIsSearching(false);
        }}
        onClosePress={() => navigation.goBack()}
        onSearchPress={() => setIsSearching(true)}
        onSearchTextChange={setSearchText}
        searchText={searchText}
      />

      <FoodList
        items={items}
        onFoodPress={toggleBannedFoodId}
        onItemPress={onItemPress}
      />

      <View style={[tw`absolute bottom-[${bottom}px] self-center`]}>
        <Button
          hasHapticFeedback
          onPress={() => navigation.goBack()}
          style={tw`self-center mb-4`}
          text={t`Accept`}
        />
      </View>
    </SafeAreaView>
  );
};

export default SetupScreen;
