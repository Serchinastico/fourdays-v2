import { Food, FoodGroup } from "@app/domain/food/models/food";
import { atomFamily } from "jotai/utils";

import { atomWithAsyncStorage } from "./async-storage";

export const atoms = {
  consumedFoodIds: atomFamily((formattedDay: string) =>
    atomWithAsyncStorage<string[]>(`consumed_food_ids:${formattedDay}`, [])
  ),
  customFoodList: atomWithAsyncStorage<Food[]>("custom_food_list", []),
  customGroupList: atomWithAsyncStorage<FoodGroup[]>("custom_group_list", []),
  forbiddenFoodIds: atomWithAsyncStorage<string[]>("forbidden_food_ids", []),
};
