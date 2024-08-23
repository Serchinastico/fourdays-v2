import { atoms } from "@app/core/storage/state";
import { useAtomValue } from "jotai";
import { useMemo } from "react";

import { BASE_FOODS } from "../models/food";

export const useFood = () => {
  const customFood = useAtomValue(atoms.customFoodList);
  const bannedFoodIds = useAtomValue(atoms.bannedFoodIds);

  const allFood = useMemo(
    () =>
      [...BASE_FOODS, ...customFood].sort(({ name: name1 }, { name: name2 }) =>
        name1.localeCompare(name2)
      ),
    [customFood]
  );
  const allowedFood = useMemo(
    () =>
      [...BASE_FOODS, ...customFood]
        .filter((food) => !bannedFoodIds.includes(food.id))
        .sort(({ name: name1 }, { name: name2 }) => name1.localeCompare(name2)),
    [customFood]
  );

  return { allFood, allowedFood };
};
