import {
  BASE_FOOD_GROUPS,
  BASE_FOODS,
  GroupId,
} from "@app/features/tracker/models/food";
import { t } from "@lingui/macro";
import { chunkify, toggleItem } from "@madeja-studio/cepillo";
import { FlashList } from "@shopify/flash-list";
import { useMemo, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Item } from "./item";
import { FoodItem, HeaderItem } from "./item/types";

const FoodList = () => {
  const { bottom } = useSafeAreaInsets();
  const [openedGroupIds, setOpenedGroupIds] = useState<GroupId[]>([]);
  const [unselectedFoodIds, setUnselectedFoodIds] = useState<string[]>([]);

  const items: FoodItem[] = useMemo(() => {
    const foodGroups: FoodItem[] = BASE_FOOD_GROUPS.flatMap((group) => {
      const header: HeaderItem = {
        groupId: group.id,
        isOpen: openedGroupIds.includes(group.id),
        tag: "header",
        title: group.name,
      };

      if (!openedGroupIds.includes(group.id)) {
        return [header];
      }

      const groupFood = BASE_FOODS.filter(
        (food) => food.groupId === group.id
      ).map((food) => ({
        ...food,
        isSelected: !unselectedFoodIds.includes(food.id),
      }));

      const rows = chunkify(groupFood, 3).map((foods) => ({
        items: foods,
        tag: "row" as const,
      }));

      return [header, ...rows];
    });

    return [
      {
        tag: "description",
        text: t`Deselect all the items you have food intolerance or causes you allergic reactions.`,
      },
      ...foodGroups,
    ];
  }, [openedGroupIds, unselectedFoodIds]);

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
                onPress={() =>
                  setOpenedGroupIds((groupIds) =>
                    toggleItem(groupIds, item.groupId)
                  )
                }
              />
            );
          case "row":
            return (
              <Item.Row
                item={item}
                key={`row_${item.items.map((it) => it.name).join("_")}`}
                onPress={(foodId) =>
                  setUnselectedFoodIds((foodIds) => toggleItem(foodIds, foodId))
                }
              />
            );
        }
      }}
    />
  );
};

export default FoodList;
