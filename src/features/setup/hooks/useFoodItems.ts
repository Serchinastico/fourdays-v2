import { atoms } from "@app/core/storage/state";
import { useFood } from "@app/domain/food/hooks/useFood";
import { useFoodGroup } from "@app/domain/food/hooks/useFoodGroup";
import { GroupId } from "@app/domain/food/models/food";
import { t } from "@lingui/macro";
import { toggleItem } from "@madeja-studio/cepillo";
import { useAtom } from "jotai";
import { useCallback, useMemo, useState } from "react";

import { FoodItem, GroupItem } from "../../../ui/FoodList/item/types";
import { selectableFoodToFoodRows } from "@app/ui/FoodList/foodItems";

const useFoodItems = () => {
  const [openedGroupIds, setOpenedGroupIds] = useState<GroupId[]>([]);
  const [bannedFoodIds, setBannedFoodIds] = useAtom(atoms.bannedFoodIds);
  const { allFood } = useFood();
  const { allGroups } = useFoodGroup();

  const items: FoodItem[] = useMemo(() => {
    const foodGroups: FoodItem[] = allGroups.flatMap((group) => {
      const header: GroupItem = {
        groupId: group.id,
        isOpen: openedGroupIds.includes(group.id),
        tag: "group",
        title: group.name,
      };

      if (!openedGroupIds.includes(group.id)) {
        return [header];
      }

      const groupFood = allFood
        .filter((food) => food.groupId === group.id)
        .map((food) => ({
          ...food,
          isSelected: !bannedFoodIds.includes(food.id),
        }));

      return [header, ...selectableFoodToFoodRows(groupFood)];
    });

    return [
      {
        tag: "description",
        text: t`Deselect all the items you have food intolerance or causes you allergic reactions.`,
      },
      ...foodGroups,
      { tag: "create_group" },
    ];
  }, [openedGroupIds, bannedFoodIds]);

  const toggleBannedFoodId = useCallback(
    (foodId: string) =>
      setBannedFoodIds(async (foodIds) => toggleItem(await foodIds, foodId)),
    []
  );

  const toggleOpenedGroupId = useCallback(
    (groupId: GroupId) =>
      setOpenedGroupIds((groupIds) => toggleItem(groupIds, groupId)),
    []
  );

  return {
    items,
    toggleBannedFoodId,
    toggleOpenedGroupId,
  };
};

export default useFoodItems;
