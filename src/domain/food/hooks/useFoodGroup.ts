import { atoms } from "@app/core/storage/state";
import { useAtomValue } from "jotai";
import { useMemo } from "react";

import { BASE_FOOD_GROUPS } from "../models/food";

export const useFoodGroup = () => {
  const customGroups = useAtomValue(atoms.customGroupList);

  const allGroups = useMemo(
    () => [...BASE_FOOD_GROUPS, ...customGroups],
    [customGroups]
  );

  return { allGroups };
};
