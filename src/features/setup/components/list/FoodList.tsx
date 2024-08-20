import useFoodItems from "@app/features/setup/hooks/useFoodItems";
import { FlashList } from "@shopify/flash-list";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Item } from "./item";

const FoodList = () => {
  const { bottom } = useSafeAreaInsets();
  const { items, toggleForbiddenFoodId, toggleOpenedGroupId } = useFoodItems();

  return (
    <FlashList
      contentContainerStyle={{
        paddingBottom: bottom + 80 /* ~ the height of the accept button */,
      }}
      data={items}
      estimatedItemSize={100}
      renderItem={({ item }) => {
        switch (item.tag) {
          case "description":
            return <Item.Description item={item} />;
          case "header":
            return (
              <Item.Header
                item={item}
                key={`header_${item.groupId}`}
                onPress={() => toggleOpenedGroupId(item.groupId)}
              />
            );
          case "row":
            return (
              <Item.Row
                item={item}
                key={`row_${item.items.map((it) => it.name).join("_")}`}
                onPress={(foodId) => toggleForbiddenFoodId(foodId)}
              />
            );
        }
      }}
    />
  );
};

export default FoodList;
