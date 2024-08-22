import { Button, Column, type OnPress, color } from "@madeja-studio/telar";
import { Image, Text } from "react-native";
import tw from "twrnc";

import { SelectableFood } from "./types";

interface Props {
  food: SelectableFood;
  onPress: OnPress;
}

const EmptyFoodItem = () => {
  return (
    <Button.Container hasHapticFeedback>
      <Column style={[tw`p-2 w-26 items-center`]} />
    </Button.Container>
  );
};

const FoodItem = ({ food, onPress }: Props) => {
  return (
    <Button.Container hasHapticFeedback onPress={onPress}>
      <Column
        style={[
          tw`p-2 rounded-lg shadow-black shadow-offset-0 shadow-opacity-10 shadow-radius-2 w-26 items-center`,
          { backgroundColor: color.white },
          { opacity: food.isSelected ? 1 : 0.3 },
        ]}
      >
        <Image
          source={food.image.data}
          style={[
            tw`aspect-square rounded-md`,
            {
              height: undefined,
              resizeMode: "cover",
              width: "100%",
            },
          ]}
        />
        <Text style={tw`text-base font-medium text-center`}>{food.name}</Text>
      </Column>
    </Button.Container>
  );
};

export default Object.assign(FoodItem, { Empty: EmptyFoodItem });
