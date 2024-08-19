import {
  BASE_FOOD_GROUPS,
  BASE_FOODS,
  GroupId,
} from "@app/features/tracker/models/food";
import { t } from "@lingui/macro";
import { chunkify } from "@madeja-studio/cepillo";
import { FlashList } from "@shopify/flash-list";
import { useCallback, useMemo, useState } from "react";

import { Item } from "./item";
import { FoodItem } from "./item/types";

const FoodList = () => {
  const [openedGroupIds, setOpenedGroupIds] = useState<GroupId[]>([]);

  const items: FoodItem[] = useMemo(() => {
    const foodGroups: FoodItem[] = BASE_FOOD_GROUPS.flatMap((group) => {
      const header = {
        groupId: group.id,
        tag: "header" as const,
        title: group.name,
      };

      if (!openedGroupIds.includes(group.id)) {
        return [header];
      }

      const groupFood = BASE_FOODS.filter((food) => food.groupId === group.id);
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
  }, [openedGroupIds]);

  const toggleOpenedGroupId = useCallback((groupId: GroupId) => {
    setOpenedGroupIds((groupIds) => {
      if (groupIds.includes(groupId)) {
        return groupIds.filter((id) => id !== groupId);
      } else {
        return [...groupIds, groupId];
      }
    });
  }, []);

  return (
    <FlashList
      data={items}
      estimatedItemSize={100}
      renderItem={({ item }) => {
        switch (item.tag) {
          case "description":
            return <Item.Description item={item} />;
          case "header":
            return (
              <Item.Header
                isOpen={openedGroupIds.includes(item.groupId)}
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
              />
            );
        }
      }}
    />
  );
};

export default FoodList;
