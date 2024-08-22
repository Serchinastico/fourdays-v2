import { FlashList } from "@shopify/flash-list";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Item } from "./item";
import { FoodItem } from "./item/types";

interface Props {
  items: FoodItem[];
  /**
   * onFoodPress is different here because food items are contained
   * inside rows. That means if we'd use onItemPress we'd have to
   * return a whole row and it would be impossible to determine which
   * food item inside the row was pressed.
   */
  onFoodPress: (foodId: string) => Promise<void> | void;
  onItemPress: (item: FoodItem) => Promise<void> | void;
}

export const FoodList = ({ items, onFoodPress, onItemPress }: Props) => {
  const { bottom } = useSafeAreaInsets();

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
          case "group":
            return (
              <Item.Group
                item={item}
                key={`header_${item.groupId}`}
                onPress={() => onItemPress(item)}
              />
            );
          case "create_group":
            return (
              <Item.CreateGroup
                key="create_group"
                onPress={() => onItemPress(item)}
              />
            );
          case "row":
            return (
              <Item.FoodRow
                item={item}
                key={`row_${item.items.map((it) => it.name).join("_")}`}
                onPress={(foodId) => onFoodPress(foodId)}
              />
            );
        }
      }}
    />
  );
};
