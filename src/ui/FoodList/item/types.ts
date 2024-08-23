import { Food, GroupId } from "@app/domain/food/models/food";
import { Tagged } from "@madeja-studio/cepillo";

export type DescriptionItem = Tagged<"description", { text: string }>;
export type GroupItem = Tagged<
  "group",
  { groupId: GroupId; isOpen: boolean; title: string }
>;
export type CreateGroupItem = Tagged<"create_group">;
export type SelectableFood = { isSelected: boolean } & Food;
export type FoodRowItem = Tagged<"row", { items: SelectableFood[] }>;
export type SectionItem = Tagged<"section", { text: string }>;

export type FoodItem =
  | CreateGroupItem
  | DescriptionItem
  | FoodRowItem
  | GroupItem
  | SectionItem;

export type PressableFoodItem = CreateGroupItem | GroupItem;
