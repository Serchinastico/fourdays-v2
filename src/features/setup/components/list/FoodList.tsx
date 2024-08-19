import {
  BASE_FOOD_GROUPS,
  BASE_FOODS,
} from "@app/features/tracker/models/food";
import { t } from "@lingui/macro";
import { chunkify } from "@madeja-studio/cepillo";
import { FlashList } from "@shopify/flash-list";
import { useMemo } from "react";

import { Item } from "./item";
import { FoodItem } from "./item/types";

const FoodList = () => {
  const items: FoodItem[] = useMemo(() => {
    const foodGroups: FoodItem[] = BASE_FOOD_GROUPS.flatMap((group) => {
      const header = { tag: "header" as const, title: group.name };
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
  }, []);

  return (
    <FlashList
      data={items}
      estimatedItemSize={100}
      renderItem={({ item }) => {
        switch (item.tag) {
          case "description":
            return <Item.Description {...item} />;
          case "header":
            return <Item.Header {...item} />;
          case "row":
            return <Item.Row {...item} />;
        }
      }}
    />
  );
};

export default FoodList;
