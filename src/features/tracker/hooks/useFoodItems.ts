import { atoms } from "@app/core/storage/state";
import {
  FoodItem,
  GroupItem,
  SelectableFood,
} from "@app/ui/FoodList/item/types";
import { useFood } from "@app/domain/food/hooks/useFood";
import { useFoodGroup } from "@app/domain/food/hooks/useFoodGroup";
import { GroupId } from "@app/domain/food/models/food";
import { t } from "@lingui/macro";
import { toggleItem } from "@madeja-studio/cepillo";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { useCallback, useMemo, useState } from "react";

import useConsumedFood from "./useConsumedFood";
import { selectableFoodToFoodRows } from "@app/ui/FoodList/foodItems";

const FORBIDDEN_FOOD_GROUP_ID = "forbidden_food";
const CONSUMED_FOOD_GROUP_ID = "consumed_food";

interface Props {
  date: dayjs.Dayjs;
}

const useFoodItems = ({ date }: Props) => {
  const [openedGroupIds, setOpenedGroupIds] = useState<GroupId[]>([]);
  const bannedFoodIds = useAtomValue(atoms.bannedFoodIds);
  const {
    consumedFoodIdsOnDate,
    consumedFoodIdsOnDateMinusOne,
    consumedFoodIdsOnDateMinusThree,
    consumedFoodIdsOnDateMinusTwo,
    setConsumedFoodIdsOnDate,
  } = useConsumedFood({ date });

  const { allFood } = useFood();
  const { allGroups } = useFoodGroup();

  const forbiddenFoodIds = new Set([
    ...consumedFoodIdsOnDate,
    ...consumedFoodIdsOnDateMinusOne,
    ...consumedFoodIdsOnDateMinusTwo,
    ...consumedFoodIdsOnDateMinusThree,
  ]);

  const forbiddenFoodItems: FoodItem[] = useMemo(() => {
    const header: GroupItem = {
      groupId: FORBIDDEN_FOOD_GROUP_ID,
      isOpen: openedGroupIds.includes(FORBIDDEN_FOOD_GROUP_ID),
      tag: "group",
      title: t`Forbidden food`,
    };

    if (!openedGroupIds.includes(header.groupId)) {
      return [header];
    }

    const forbiddenFood: SelectableFood[] = Array.from(forbiddenFoodIds)
      .map((id) => allFood.find((food) => food.id === id)!)
      .map((food) => ({ ...food, isSelected: true }));

    return [header, ...selectableFoodToFoodRows(forbiddenFood)];
  }, [openedGroupIds, allFood, forbiddenFoodIds]);

  const consumedFoodItems: FoodItem[] = useMemo(() => {
    const header: GroupItem = {
      groupId: CONSUMED_FOOD_GROUP_ID,
      isOpen: openedGroupIds.includes(CONSUMED_FOOD_GROUP_ID),
      tag: "group",
      title: t`Consumed food`,
    };

    if (!openedGroupIds.includes(header.groupId)) {
      return [header];
    }

    const consumedFood: SelectableFood[] = consumedFoodIdsOnDate
      .map((id) => allFood.find((food) => food.id === id)!)
      .map((food) => ({ ...food, isSelected: true }));

    return [header, ...selectableFoodToFoodRows(consumedFood)];
  }, [openedGroupIds, allFood, consumedFoodIdsOnDate]);

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
        .filter((food) => !bannedFoodIds.includes(food.id))
        .filter((food) => !forbiddenFoodIds.has(food.id))
        .map((food) => ({ ...food, isSelected: true }));

      return [header, ...selectableFoodToFoodRows(groupFood)];
    });

    return [
      {
        tag: "description",
        text: t`Here you can configure the food you ate and the food you can eat.`,
      },
      ...foodGroups,
      ...forbiddenFoodItems,
      ...consumedFoodItems,
    ];
  }, [
    openedGroupIds,
    forbiddenFoodItems,
    consumedFoodItems,
    bannedFoodIds,
    forbiddenFoodIds,
  ]);

  const toggleConsumedFoodId = useCallback((foodId: string) => {
    setConsumedFoodIdsOnDate(async (prev) => toggleItem(await prev, foodId));
  }, []);

  const toggleOpenedGroupId = useCallback(
    (groupId: GroupId) =>
      setOpenedGroupIds((groupIds) => toggleItem(groupIds, groupId)),
    []
  );

  return { items, toggleConsumedFoodId, toggleOpenedGroupId };
};

export default useFoodItems;
