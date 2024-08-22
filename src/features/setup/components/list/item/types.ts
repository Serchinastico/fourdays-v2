import { Food, GroupId } from "@app/features/tracker/models/food";
import { Tagged } from "@madeja-studio/cepillo";

export type DescriptionItem = Tagged<
  "description",
  {
    text: string;
  }
>;

export type GroupItem = Tagged<
  "header",
  {
    groupId: GroupId;
    isOpen: boolean;
    title: string;
  }
>;

export type CreateGroupItem = Tagged<"create_group">;

export type RowItemFood = { isSelected: boolean } & Food;

export type FoodRowItem = Tagged<
  "row",
  {
    items: RowItemFood[];
  }
>;

export type FoodItem =
  | CreateGroupItem
  | DescriptionItem
  | FoodRowItem
  | GroupItem;
