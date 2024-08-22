import { chunkify } from "@madeja-studio/cepillo";
import { SelectableFood, FoodRowItem } from "./item/types";

export const selectableFoodToFoodRows = (
  food: SelectableFood[]
): FoodRowItem[] =>
  chunkify(food, 3).map((foods) => ({
    items: foods,
    tag: "row" as const,
  }));
