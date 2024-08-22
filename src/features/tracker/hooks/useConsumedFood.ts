import { atoms } from "@app/core/storage/state";
import dayjs, { Dayjs } from "dayjs";
import { useAtom, useAtomValue } from "jotai";

const CONSUMED_FOOD_DATE_FORMAT = "DD-MM-YYYY";

interface Props {
  date: dayjs.Dayjs;
}

const useConsumedFood = ({ date }: Props) => {
  const getAtomKey = (date: Dayjs) => date.format(CONSUMED_FOOD_DATE_FORMAT);

  const foodIdsOnDateMinusThree = useAtomValue(
    atoms.consumedFoodIds(getAtomKey(date.subtract(3, "days")))
  );
  const foodIdsOnDateMinusTwo = useAtomValue(
    atoms.consumedFoodIds(getAtomKey(date.subtract(2, "days")))
  );
  const foodIdsOnDateMinusOne = useAtomValue(
    atoms.consumedFoodIds(getAtomKey(date.subtract(1, "days")))
  );
  const [foodIdsOnDate, setFoodIdsOnDate] = useAtom(
    atoms.consumedFoodIds(getAtomKey(date))
  );

  return {
    foodIdsOnDate,
    foodIdsOnDateMinusOne,
    foodIdsOnDateMinusThree,
    foodIdsOnDateMinusTwo,
    setFoodIdsOnDate,
  };
};

export default useConsumedFood;
