import { padArray } from "@madeja-studio/cepillo";
import { Row as RowLayout } from "@madeja-studio/telar";
import tw from "twrnc";

import FoodItem from "./FoodItem";
import { RowItem } from "./types";

interface Props extends RowItem {}

const Row = ({ items }: Props) => {
  const paddedItems = padArray(items, 3, null);

  return (
    <RowLayout style={tw`px-4 pb-4 justify-between`}>
      {paddedItems.map((food) => {
        if (food === null) {
          return <FoodItem.Empty />;
        } else {
          return <FoodItem food={food} key={food.id} />;
        }
      })}
    </RowLayout>
  );
};

export default Row;
