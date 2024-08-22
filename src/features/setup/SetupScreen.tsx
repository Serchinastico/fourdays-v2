import { RootNavigationParamList } from "@app/core/navigation/routes";
import { FoodList } from "@app/domain/food/components/FoodList";
import { FoodItem } from "@app/domain/food/components/FoodList/item/types";
import { t } from "@lingui/macro";
import { Button, SafeAreaView, SafeAreaViewEdges } from "@madeja-studio/telar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import tw from "twrnc";

import Header from "./components/Header";
import useFoodItems from "./hooks/useFoodItems";

interface Props
  extends NativeStackScreenProps<RootNavigationParamList, "setup"> {}

const SetupScreen = ({ navigation, route }: Props) => {
  const isInitialSetup = route.params?.isInitialSetup ?? true;

  const { bottom } = useSafeAreaInsets();
  const { items, toggleForbiddenFoodId, toggleOpenedGroupId } = useFoodItems();

  const onItemPress = useCallback((item: FoodItem) => {
    switch (item.tag) {
      case "create_group":
        navigation.navigate("createGroup");
        break;
      case "group":
        toggleOpenedGroupId(item.groupId);
        break;
      case "description":
      case "row":
    }
  }, []);

  return (
    <SafeAreaView edges={SafeAreaViewEdges.NoBottom}>
      <Header
        isInitialSetup={isInitialSetup}
        onAddPress={() => navigation.navigate("createFood")}
        onClosePress={() => navigation.goBack()}
        onSearchPress={() => {}}
      />

      <FoodList
        items={items}
        onFoodPress={toggleForbiddenFoodId}
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
