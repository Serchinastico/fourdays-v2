import { Food } from "@app/features/tracker/models/food";
import { Button, Column, color } from "@madeja-studio/telar";
import { Image, Text } from "react-native";
import tw from "twrnc";

interface Props {
  food: Food;
}

const EmptyFoodItem = () => {
  return (
    <Button.Container hasHapticFeedback>
      <Column style={[tw`p-2 w-26 items-center`]} />
    </Button.Container>
  );
};

const FoodItem = ({ food }: Props) => {
  return (
    <Button.Container hasHapticFeedback>
      <Column
        style={[
          tw`p-2 rounded-lg shadow-black shadow-offset-0 shadow-opacity-10 shadow-radius-2 w-26 items-center`,
          { backgroundColor: color.white },
        ]}
      >
        <Image
          source={food.image.data}
          style={[
            tw`aspect-square`,
            {
              height: undefined,
              resizeMode: "cover",
              width: "100%",
            },
          ]}
        />
        <Text style={tw`text-base font-medium`}>{food.name}</Text>
      </Column>
    </Button.Container>
  );
};

export default Object.assign(FoodItem, { Empty: EmptyFoodItem });
