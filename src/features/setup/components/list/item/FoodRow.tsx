import { padArray } from "@madeja-studio/cepillo";
import { Row as RowLayout } from "@madeja-studio/telar";
import tw from "twrnc";

import FoodItem from "./FoodItem";
import { FoodRowItem } from "./types";

interface Props {
  item: FoodRowItem;
  onPress: (foodId: string) => void;
}

const FoodRow = ({ item, onPress }: Props) => {
  const paddedItems = padArray(item.items, 3, null);

  return (
    <RowLayout style={tw`px-4 pb-4 justify-between`}>
      {paddedItems.map((food, index) => {
        if (food === null) {
          return <FoodItem.Empty key={`empty_${index}`} />;
        } else {
          return (
            <FoodItem
              food={food}
              key={food.id}
              onPress={() => onPress(food.id)}
            />
          );
        }
      })}
    </RowLayout>
  );
};

export default FoodRow;
