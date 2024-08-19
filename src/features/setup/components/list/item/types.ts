import { Food, GroupId } from "@app/features/tracker/models/food";
import { Tagged } from "@madeja-studio/cepillo";

export interface DescriptionItem {
  text: string;
}

export interface HeaderItem {
  groupId: GroupId;
  title: string;
}

export interface RowItem {
  items: Food[];
}

export type FoodItem =
  | Tagged<"description", DescriptionItem>
  | Tagged<"header", HeaderItem>
  | Tagged<"row", RowItem>;
