import { Food, GroupId } from "@app/features/tracker/models/food";
import { Tagged } from "@madeja-studio/cepillo";

export type DescriptionItem = Tagged<
  "description",
  {
    text: string;
  }
>;

export type HeaderItem = Tagged<
  "header",
  {
    groupId: GroupId;
    isOpen: boolean;
    title: string;
  }
>;

export type RowItemFood = { isSelected: boolean } & Food;

export type RowItem = Tagged<
  "row",
  {
    items: RowItemFood[];
  }
>;

export type FoodItem = DescriptionItem | HeaderItem | RowItem;
