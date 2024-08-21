import { atoms } from "@app/core/storage/state";
import {
  BASE_FOOD_GROUPS,
  BASE_FOODS,
  GroupId,
} from "@app/features/tracker/models/food";
import { t } from "@lingui/macro";
import { chunkify, toggleItem } from "@madeja-studio/cepillo";
import { useAtom, useAtomValue } from "jotai";
import { useCallback, useMemo, useState } from "react";

import { FoodItem, HeaderItem } from "../components/list/item/types";

const useFoodItems = () => {
  const [openedGroupIds, setOpenedGroupIds] = useState<GroupId[]>([]);
  const [forbiddenFoodIds, setForbiddenFoodIds] = useAtom(
    atoms.forbiddenFoodIds
  );
  const customFood = useAtomValue(atoms.customFoodList);

  const items: FoodItem[] = useMemo(() => {
    const allFood = [...BASE_FOODS, ...customFood];

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

      const groupFood = allFood
        .filter((food) => food.groupId === group.id)
        .map((food) => ({
          ...food,
          isSelected: !forbiddenFoodIds.includes(food.id),
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
  }, [openedGroupIds, forbiddenFoodIds]);

  const toggleForbiddenFoodId = useCallback(
    (foodId: string) =>
      setForbiddenFoodIds(async (foodIds) => toggleItem(await foodIds, foodId)),
    []
  );

  const toggleOpenedGroupId = useCallback(
    (groupId: GroupId) =>
      setOpenedGroupIds((groupIds) => toggleItem(groupIds, groupId)),
    []
  );

  return { items, toggleForbiddenFoodId, toggleOpenedGroupId };
};

export default useFoodItems;
