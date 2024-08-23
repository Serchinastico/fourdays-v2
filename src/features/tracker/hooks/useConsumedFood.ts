import { atoms } from "@app/core/storage/state";
import dayjs, { Dayjs } from "dayjs";
import { useAtom, useAtomValue } from "jotai";

export const CONSUMED_FOOD_DATE_FORMAT = "DD-MM-YYYY";

interface Props {
  date: dayjs.Dayjs;
}

const useConsumedFood = ({ date }: Props) => {
  const getAtomKey = (date: Dayjs) => date.format(CONSUMED_FOOD_DATE_FORMAT);

  const consumedFoodIdsOnDateMinusThree = useAtomValue(
    atoms.consumedFoodIds(getAtomKey(date.subtract(3, "days")))
  );
  const consumedFoodIdsOnDateMinusTwo = useAtomValue(
    atoms.consumedFoodIds(getAtomKey(date.subtract(2, "days")))
  );
  const consumedFoodIdsOnDateMinusOne = useAtomValue(
    atoms.consumedFoodIds(getAtomKey(date.subtract(1, "days")))
  );
  const [consumedFoodIdsOnDate, setConsumedFoodIdsOnDate] = useAtom(
    atoms.consumedFoodIds(getAtomKey(date))
  );

  return {
    consumedFoodIdsOnDate,
    consumedFoodIdsOnDateMinusOne,
    consumedFoodIdsOnDateMinusThree,
    consumedFoodIdsOnDateMinusTwo,
    setConsumedFoodIdsOnDate,
  };
};

export default useConsumedFood;
