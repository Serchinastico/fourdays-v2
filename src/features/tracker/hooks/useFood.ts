import { atoms } from "@app/core/storage/state";
import { useAtomValue } from "jotai";
import { useMemo } from "react";

import { BASE_FOODS } from "../models/food";

export const useFood = () => {
  const customFood = useAtomValue(atoms.customFoodList);

  const allFood = useMemo(() => [...BASE_FOODS, ...customFood], [customFood]);

  return { allFood };
};
