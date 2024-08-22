import { atoms } from "@app/core/storage/state";
import {
  FoodItem,
  GroupItem,
  SelectableFood,
} from "@app/domain/food/components/FoodList/item/types";
import { useFood } from "@app/domain/food/hooks/useFood";
import { useFoodGroup } from "@app/domain/food/hooks/useFoodGroup";
import { GroupId } from "@app/domain/food/models/food";
import { foodToFoodRow } from "@app/domain/food/utils/foodItems";
import { t } from "@lingui/macro";
import { toggleItem } from "@madeja-studio/cepillo";
import dayjs from "dayjs";
import { useAtom } from "jotai";
import { useCallback, useMemo, useState } from "react";

import useConsumedFood from "./useConsumedFood";

const FORBIDDEN_FOOD_GROUP_ID = "forbidden_food";
const CONSUMED_FOOD_GROUP_ID = "consumed_food";

interface Props {
  date: dayjs.Dayjs;
}

const useFoodItems = ({ date }: Props) => {
  const [openedGroupIds, setOpenedGroupIds] = useState<GroupId[]>([]);
  const [forbiddenFoodIds, setForbiddenFoodIds] = useAtom(
    atoms.forbiddenFoodIds
  );
  const {
    foodIdsOnDate,
    foodIdsOnDateMinusOne,
    foodIdsOnDateMinusThree,
    foodIdsOnDateMinusTwo,
    setFoodIdsOnDate,
  } = useConsumedFood({ date });

  const { allFood } = useFood();
  const { allGroups } = useFoodGroup();

  const consumedFoodIds = new Set([
    ...foodIdsOnDate,
    ...foodIdsOnDateMinusOne,
    ...foodIdsOnDateMinusTwo,
    ...foodIdsOnDateMinusThree,
  ]);

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
        .filter((food) => !forbiddenFoodIds.includes(food.id))
        .filter((food) => !consumedFoodIds.has(food.id))
        .map((food) => ({ ...food, isSelected: true }));

      return [header, ...foodToFoodRow(groupFood)];
    });

    const forbiddenFood: SelectableFood[] = Array.from(consumedFoodIds)
      .map((id) => allFood.find((food) => food.id === id)!)
      .map((food) => ({ ...food, isSelected: true }));
    const forbiddenFoodGroup: FoodItem[] = [
      {
        groupId: FORBIDDEN_FOOD_GROUP_ID,
        isOpen: openedGroupIds.includes(FORBIDDEN_FOOD_GROUP_ID),
        tag: "group",
        title: t`Forbidden food`,
      },
      ...foodToFoodRow(forbiddenFood),
    ];

    const consumedFood: SelectableFood[] = foodIdsOnDate
      .map((id) => allFood.find((food) => food.id === id)!)
      .map((food) => ({ ...food, isSelected: true }));

    const consumedFoodItems: FoodItem[] = [
      {
        groupId: CONSUMED_FOOD_GROUP_ID,
        isOpen: openedGroupIds.includes(CONSUMED_FOOD_GROUP_ID),
        tag: "group",
        title: t`Consumed food`,
      },
      ...foodToFoodRow(consumedFood),
    ];

    return [
      {
        tag: "description",
        text: t`Here you can configure the food you ate and the food you can eat.`,
      },
      ...foodGroups,
      ...forbiddenFoodGroup,
      ...consumedFoodItems,
    ];
  }, [openedGroupIds, forbiddenFoodIds, consumedFoodIds]);

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
