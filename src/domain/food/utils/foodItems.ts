import { chunkify } from "@madeja-studio/cepillo";

import { FoodRowItem, SelectableFood } from "../components/FoodList/item/types";

export const foodToFoodRow = (food: SelectableFood[]): FoodRowItem[] =>
  chunkify(food, 3).map((foods) => ({
    items: foods,
    tag: "row" as const,
  }));
