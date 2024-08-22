import { atoms } from "@app/core/storage/state";
import { useFood } from "@app/features/tracker/hooks/useFood";
import { useFoodGroup } from "@app/features/tracker/hooks/useFoodGroup";
import { GroupId } from "@app/features/tracker/models/food";
import { t } from "@lingui/macro";
import { chunkify, toggleItem } from "@madeja-studio/cepillo";
import { useAtom } from "jotai";
import { useCallback, useMemo, useState } from "react";

import { FoodItem, GroupItem } from "../components/list/item/types";

const useFoodItems = () => {
  const [openedGroupIds, setOpenedGroupIds] = useState<GroupId[]>([]);
  const [forbiddenFoodIds, setForbiddenFoodIds] = useAtom(
    atoms.forbiddenFoodIds
  );
  const { allFood } = useFood();
  const { allGroups } = useFoodGroup();

  const items: FoodItem[] = useMemo(() => {
    const foodGroups: FoodItem[] = allGroups.flatMap((group) => {
      const header: GroupItem = {
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
      { tag: "create_group" },
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
