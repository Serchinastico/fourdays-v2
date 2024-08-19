import { BASE_FOODS } from "@app/features/tracker/models/food";
import { FlashList } from "@shopify/flash-list";

import Description from "./Description";
import Header from "./Header";
import Row from "./Row";
import { Item } from "./types";

const FoodList = () => {
  const items: Item[] = [
    {
      tag: "description",
      text: "Deselect all the items you have food intolerance or causes you allergic reactions.",
    },
    { tag: "header", title: "Vegetables" },
    { items: [BASE_FOODS[0], BASE_FOODS[6], BASE_FOODS[16]], tag: "row" },
  ];

  return (
    <FlashList
      data={items}
      estimatedItemSize={100}
      renderItem={({ item }) => {
        switch (item.tag) {
          case "description":
            return <Description {...item} />;
          case "header":
            return <Header {...item} />;
          case "row":
            return <Row {...item} />;
        }
      }}
    />
  );
};

export default FoodList;
