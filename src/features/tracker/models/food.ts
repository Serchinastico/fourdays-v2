import { t } from "@lingui/macro";

export type Base64Image = string;

export interface Base64FoodImage {
  data: { uri: string };
  type: "Base64";
}

export interface RequireFoodImage {
  data: any;
  type: "Require";
}

export type FoodImage = Base64FoodImage | RequireFoodImage;

export interface FoodGroup {
  id: string;
  name: string;
}

export interface Food {
  groupId: string;
  id: string;
  image: FoodImage;
  name: string;
}

export const BASE_FOOD_GROUPS: FoodGroup[] = [
  {
    id: "Group 1",
    name: t`Vegetables`,
  },
  {
    id: "Group 2",
    name: t`Starches and carbohydrates`,
  },
  {
    id: "Group 3",
    name: t`Proteins`,
  },
  {
    id: "Group 4",
    name: t`Fruit`,
  },
];

export const BASE_FOODS: Food[] = [
  {
    groupId: "Group 1",
    id: "chard",
    image: { data: require("@assets/images/food/chard.jpg"), type: "Require" },
    name: t`Chard`,
  },
  {
    groupId: "Group 4",
    id: "avocado",
    image: {
      data: require("@assets/images/food/avocado.jpg"),
      type: "Require",
    },
    name: t`Avocado`,
  },
  {
    groupId: "Group 1",
    id: "garlic",
    image: { data: require("@assets/images/food/garlic.jpg"), type: "Require" },
    name: t`Garlic`,
  },
  {
    groupId: "Group 1",
    id: "artichoke",
    image: {
      data: require("@assets/images/food/artichoke.jpg"),
      type: "Require",
    },
    name: t`Artichoke`,
  },
  {
    groupId: "Group 1",
    id: "alfalfa",
    image: {
      data: require("@assets/images/food/alfalfa.jpg"),
      type: "Require",
    },
    name: t`Alfalfa`,
  },
  {
    groupId: "Group 3",
    id: "clams",
    image: { data: require("@assets/images/food/clams.jpg"), type: "Require" },
    name: t`Clams`,
  },
  {
    groupId: "Group 4",
    id: "blueberries",
    image: {
      data: require("@assets/images/food/blueberries.jpg"),
      type: "Require",
    },
    name: t`Blueberries`,
  },
  {
    groupId: "Group 2",
    id: "rice",
    image: { data: require("@assets/images/food/rice.jpg"), type: "Require" },
    name: t`Rice`,
  },
  {
    groupId: "Group 3",
    id: "tuna",
    image: { data: require("@assets/images/food/tuna.jpg"), type: "Require" },
    name: t`Tuna`,
  },
  {
    groupId: "Group 2",
    id: "oat",
    image: { data: require("@assets/images/food/oat.jpg"), type: "Require" },
    name: t`Oat`,
  },
  {
    groupId: "Group 3",
    id: "cod",
    image: { data: require("@assets/images/food/cod.jpg"), type: "Require" },
    name: t`Cod`,
  },
  {
    groupId: "Group 2",
    id: "sweet potato",
    image: {
      data: require("@assets/images/food/sweetPotato.jpg"),
      type: "Require",
    },
    name: t`Sweet potato`,
  },
  {
    groupId: "Group 3",
    id: "cockles",
    image: {
      data: require("@assets/images/food/cockles.jpg"),
      type: "Require",
    },
    name: t`Cockles`,
  },
  {
    groupId: "Group 2",
    id: "eggplant",
    image: {
      data: require("@assets/images/food/eggplant.jpg"),
      type: "Require",
    },
    name: t`Eggplant`,
  },
  {
    groupId: "Group 1",
    id: "watercress",
    image: {
      data: require("@assets/images/food/watercress.jpg"),
      type: "Require",
    },
    name: t`Watercress`,
  },
  {
    groupId: "Group 3",
    id: "anchovy",
    image: {
      data: require("@assets/images/food/anchovy.jpg"),
      type: "Require",
    },
    name: t`Anchovy`,
  },
  {
    groupId: "Group 1",
    id: "broccoli",
    image: {
      data: require("@assets/images/food/broccoli.jpg"),
      type: "Require",
    },
    name: t`Broccoli`,
  },
  {
    groupId: "Group 1",
    id: "zucchini",
    image: {
      data: require("@assets/images/food/zucchini.jpg"),
      type: "Require",
    },
    name: t`Zucchini`,
  },
  {
    groupId: "Group 1",
    id: "pumpkin",
    image: {
      data: require("@assets/images/food/pumpkin.jpg"),
      type: "Require",
    },
    name: t`Pumpkin`,
  },
  {
    groupId: "Group 3",
    id: "crab",
    image: { data: require("@assets/images/food/crab.jpg"), type: "Require" },
    name: t`Crab`,
  },
  {
    groupId: "Group 3",
    id: "prawn",
    image: { data: require("@assets/images/food/prawn.jpg"), type: "Require" },
    name: t`Prawn`,
  },
  {
    groupId: "Group 1",
    id: "thistle",
    image: {
      data: require("@assets/images/food/thistle.jpg"),
      type: "Require",
    },
    name: t`Thistle`,
  },
  {
    groupId: "Group 1",
    id: "onion",
    image: { data: require("@assets/images/food/onion.jpg"), type: "Require" },
    name: t`Onion`,
  },
  {
    groupId: "Group 1",
    id: "spring onion",
    image: {
      data: require("@assets/images/food/springOnion.jpg"),
      type: "Require",
    },
    name: t`Spring onion`,
  },
  {
    groupId: "Group 2",
    id: "rye",
    image: { data: require("@assets/images/food/rye.jpg"), type: "Require" },
    name: t`Rye`,
  },
  {
    groupId: "Group 3",
    id: "pork",
    image: { data: require("@assets/images/food/pork.jpg"), type: "Require" },
    name: t`Pork`,
  },
  {
    groupId: "Group 4",
    id: "cherry",
    image: { data: require("@assets/images/food/cherry.jpg"), type: "Require" },
    name: t`Cherry`,
  },
  {
    groupId: "Group 4",
    id: "custard apple",
    image: {
      data: require("@assets/images/food/custardApple.jpg"),
      type: "Require",
    },
    name: t`Custard apple`,
  },
  {
    groupId: "Group 1",
    id: "mushroom",
    image: {
      data: require("@assets/images/food/mushroom.jpg"),
      type: "Require",
    },
    name: t`Mushroom`,
  },
  {
    groupId: "Group 1",
    id: "carrot",
    image: { data: require("@assets/images/food/carrot.jpg"), type: "Require" },
    name: t`Carrot`,
  },
  {
    groupId: "Group 1",
    id: "cabbage",
    image: {
      data: require("@assets/images/food/cabbage.jpg"),
      type: "Require",
    },
    name: t`Cabbage`,
  },
  {
    groupId: "Group 4",
    id: "plum",
    image: { data: require("@assets/images/food/plum.jpg"), type: "Require" },
    name: t`Plum`,
  },
  {
    groupId: "Group 1",
    id: "brussels sprouts",
    image: {
      data: require("@assets/images/food/brusselsSprouts.jpg"),
      type: "Require",
    },
    name: t`Brussels sprouts`,
  },
  {
    groupId: "Group 4",
    id: "medlar",
    image: { data: require("@assets/images/food/medlar.jpg"), type: "Require" },
    name: t`Medlar`,
  },
  {
    groupId: "Group 1",
    id: "cauliflower",
    image: {
      data: require("@assets/images/food/cauliflower.jpg"),
      type: "Require",
    },
    name: t`Cauliflower`,
  },
  {
    groupId: "Group 3",
    id: "rabbit",
    image: { data: require("@assets/images/food/rabbit.jpg"), type: "Require" },
    name: t`Rabbit`,
  },
  {
    groupId: "Group 3",
    id: "lamb",
    image: { data: require("@assets/images/food/lamb.jpg"), type: "Require" },
    name: t`Lamb`,
  },
  {
    groupId: "Group 1",
    id: "endive",
    image: { data: require("@assets/images/food/endive.jpg"), type: "Require" },
    name: t`Endive`,
  },
  {
    groupId: "Group 1",
    id: "belgian endive",
    image: {
      data: require("@assets/images/food/belgianEndive.jpg"),
      type: "Require",
    },
    name: t`Belgian endive`,
  },
  {
    groupId: "Group 4",
    id: "kiwi",
    image: { data: require("@assets/images/food/kiwi.jpg"), type: "Require" },
    name: t`Kiwi`,
  },
  {
    groupId: "Group 1",
    id: "asparagus",
    image: {
      data: require("@assets/images/food/asparagus.jpg"),
      type: "Require",
    },
    name: t`Asparagus`,
  },
  {
    groupId: "Group 1",
    id: "spinach",
    image: {
      data: require("@assets/images/food/spinach.jpg"),
      type: "Require",
    },
    name: t`Spinach`,
  },
  {
    groupId: "Group 4",
    id: "raspberry",
    image: {
      data: require("@assets/images/food/raspberry.jpg"),
      type: "Require",
    },
    name: t`Raspberry`,
  },
  {
    groupId: "Group 4",
    id: "strawberry",
    image: {
      data: require("@assets/images/food/strawberry.jpg"),
      type: "Require",
    },
    name: t`Strawberry`,
  },
  {
    groupId: "Group 1",
    id: "lettuce",
    image: {
      data: require("@assets/images/food/lettuce.jpg"),
      type: "Require",
    },
    name: t`Lettuce`,
  },
  {
    groupId: "Group 1",
    id: "tomato",
    image: { data: require("@assets/images/food/tomato.jpg"), type: "Require" },
    name: t`Tomato`,
  },
  {
    groupId: "Group 4",
    id: "grape",
    image: { data: require("@assets/images/food/grape.jpg"), type: "Require" },
    name: t`Grape`,
  },
  {
    groupId: "Group 3",
    id: "trout",
    image: { data: require("@assets/images/food/trout.jpg"), type: "Require" },
    name: t`Trout`,
  },
  {
    groupId: "Group 2",
    id: "wheat",
    image: { data: require("@assets/images/food/wheat.jpg"), type: "Require" },
    name: t`Wheat`,
  },
  {
    groupId: "Group 3",
    id: "veal",
    image: { data: require("@assets/images/food/veal.jpg"), type: "Require" },
    name: t`Veal`,
  },
  {
    groupId: "Group 3",
    id: "sepia",
    image: { data: require("@assets/images/food/sepia.jpg"), type: "Require" },
    name: t`Sepia`,
  },
  {
    groupId: "Group 2",
    id: "semolina",
    image: {
      data: require("@assets/images/food/semolina.jpg"),
      type: "Require",
    },
    name: t`Semolina`,
  },
  {
    groupId: "Group 3",
    id: "sardines",
    image: {
      data: require("@assets/images/food/sardines.jpg"),
      type: "Require",
    },
    name: t`Sardines`,
  },
  {
    groupId: "Group 4",
    id: "watermelon",
    image: {
      data: require("@assets/images/food/watermelon.jpg"),
      type: "Require",
    },
    name: t`Watermelon`,
  },
  {
    groupId: "Group 3",
    id: "salmon",
    image: { data: require("@assets/images/food/salmon.jpg"), type: "Require" },
    name: t`Salmon`,
  },
  {
    groupId: "Group 3",
    id: "turbot",
    image: { data: require("@assets/images/food/turbot.jpg"), type: "Require" },
    name: t`Turbot`,
  },
  {
    groupId: "Group 1",
    id: "radish",
    image: { data: require("@assets/images/food/radish.jpg"), type: "Require" },
    name: t`Radish`,
  },
  {
    groupId: "Group 3",
    id: "octopus",
    image: {
      data: require("@assets/images/food/octopus.jpg"),
      type: "Require",
    },
    name: t`Octopus`,
  },
  {
    groupId: "Group 1",
    id: "leek",
    image: { data: require("@assets/images/food/leek.jpg"), type: "Require" },
    name: t`Leek`,
  },
  {
    groupId: "Group 4",
    id: "grapefruit",
    image: {
      data: require("@assets/images/food/grapefruit.jpg"),
      type: "Require",
    },
    name: t`Grapefruit`,
  },
  {
    groupId: "Group 4",
    id: "banana",
    image: { data: require("@assets/images/food/banana.jpg"), type: "Require" },
    name: t`Banana`,
  },
  {
    groupId: "Group 1",
    id: "pepper",
    image: { data: require("@assets/images/food/pepper.jpg"), type: "Require" },
    name: t`Pepper`,
  },
  {
    groupId: "Group 3",
    id: "whiting",
    image: {
      data: require("@assets/images/food/whiting.jpg"),
      type: "Require",
    },
    name: t`Whiting`,
  },
  {
    groupId: "Group 3",
    id: "chicken",
    image: {
      data: require("@assets/images/food/chicken.jpg"),
      type: "Require",
    },
    name: t`Chicken`,
  },
  {
    groupId: "Group 1",
    id: "parsley",
    image: {
      data: require("@assets/images/food/parsley.jpg"),
      type: "Require",
    },
    name: t`Parsley`,
  },
  {
    groupId: "Group 4",
    id: "pear",
    image: { data: require("@assets/images/food/pear.jpg"), type: "Require" },
    name: t`Pear`,
  },
  {
    groupId: "Group 1",
    id: "cucumber",
    image: {
      data: require("@assets/images/food/cucumber.jpg"),
      type: "Require",
    },
    name: t`Cucumber`,
  },
  {
    groupId: "Group 3",
    id: "turkey",
    image: { data: require("@assets/images/food/turkey.jpg"), type: "Require" },
    name: t`Turkey`,
  },
  {
    groupId: "Group 2",
    id: "potato",
    image: { data: require("@assets/images/food/potato.jpg"), type: "Require" },
    name: t`Potato`,
  },
  {
    groupId: "Group 3",
    id: "snapper",
    image: {
      data: require("@assets/images/food/snapper.jpg"),
      type: "Require",
    },
    name: t`Snapper`,
  },
  {
    groupId: "Group 4",
    id: "açai",
    image: { data: require("@assets/images/food/acai.jpg"), type: "Require" },
    name: "Açai",
  },
  {
    groupId: "Group 2",
    id: "chickpeas",
    image: {
      data: require("@assets/images/food/chickpeas.jpg"),
      type: "Require",
    },
    name: t`Chickpeas`,
  },
  {
    groupId: "Group 4",
    id: "paraguayan",
    image: {
      data: require("@assets/images/food/paraguayan.jpg"),
      type: "Require",
    },
    name: t`Paraguayan`,
  },
  {
    groupId: "Group 2",
    id: "yam",
    image: { data: require("@assets/images/food/yam.jpg"), type: "Require" },
    name: t`Yam`,
  },
  {
    groupId: "Group 3",
    id: "oyster",
    image: { data: require("@assets/images/food/oyster.jpg"), type: "Require" },
    name: t`Oyster`,
  },
  {
    groupId: "Group 4",
    id: "orange",
    image: { data: require("@assets/images/food/orange.jpg"), type: "Require" },
    name: t`Orange`,
  },
  {
    groupId: "Group 1",
    id: "turnip",
    image: { data: require("@assets/images/food/turnip.jpg"), type: "Require" },
    name: t`Turnip`,
  },
  {
    groupId: "Group 3",
    id: "hake",
    image: { data: require("@assets/images/food/hake.jpg"), type: "Require" },
    name: t`Hake`,
  },
  {
    groupId: "Group 4",
    id: "peach",
    image: { data: require("@assets/images/food/peach.jpg"), type: "Require" },
    name: t`Peach`,
  },
  {
    groupId: "Group 4",
    id: "cantaloupe",
    image: {
      data: require("@assets/images/food/cantaloupe.jpg"),
      type: "Require",
    },
    name: t`Cantaloupe`,
  },
  {
    groupId: "Group 4",
    id: "apple",
    image: { data: require("@assets/images/food/apple.jpg"), type: "Require" },
    name: t`Apple`,
  },
  {
    groupId: "Group 4",
    id: "mango",
    image: { data: require("@assets/images/food/mango.jpg"), type: "Require" },
    name: t`Mango`,
  },
  {
    groupId: "Group 2",
    id: "corn",
    image: { data: require("@assets/images/food/corn.jpg"), type: "Require" },
    name: t`Corn`,
  },
  {
    groupId: "Group 2",
    id: "beans",
    image: { data: require("@assets/images/food/beans.jpg"), type: "Require" },
    name: t`Beans`,
  },
  {
    groupId: "Group 2",
    id: "whiteBeans",
    image: {
      data: require("@assets/images/food/whiteBeans.jpg"),
      type: "Require",
    },
    name: t`White beans`,
  },
  {
    groupId: "Group 2",
    id: "yellowBeans",
    image: {
      data: require("@assets/images/food/yellowBeans.jpg"),
      type: "Require",
    },
    name: t`Yellow beans`,
  },
  {
    groupId: "Group 2",
    id: "cranberryBeans",
    image: {
      data: require("@assets/images/food/cranberryBeans.jpg"),
      type: "Require",
    },
    name: t`Cranberry beans`,
  },
  {
    groupId: "Group 4",
    id: "lemon",
    image: { data: require("@assets/images/food/lemon.jpg"), type: "Require" },
    name: t`Lemon`,
  },
  {
    groupId: "Group 4",
    id: "lime",
    image: { data: require("@assets/images/food/lime.jpg"), type: "Require" },
    name: t`Lime`,
  },
  {
    groupId: "Group 3",
    id: "lobster",
    image: {
      data: require("@assets/images/food/lobster.jpg"),
      type: "Require",
    },
    name: t`Lobster`,
  },
  {
    groupId: "Group 2",
    id: "peas",
    image: { data: require("@assets/images/food/peas.jpg"), type: "Require" },
    name: t`Peas`,
  },
  {
    groupId: "Group 2",
    id: "lentils",
    image: {
      data: require("@assets/images/food/lentils.jpg"),
      type: "Require",
    },
    name: t`Lentils`,
  },
  {
    groupId: "Group 3",
    id: "sole",
    image: { data: require("@assets/images/food/sole.jpg"), type: "Require" },
    name: t`Sole`,
  },
  {
    groupId: "Group 1",
    id: "green beans",
    image: {
      data: require("@assets/images/food/greenBeans.jpg"),
      type: "Require",
    },
    name: t`Green beans`,
  },
  {
    groupId: "Group 2",
    id: "wholemeal bread",
    image: {
      data: require("@assets/images/food/wholemealBread.jpg"),
      type: "Require",
    },
    name: t`Wholemeal bread`,
  },
  {
    groupId: "Group 2",
    id: "soy",
    image: { data: require("@assets/images/food/soy.jpg"), type: "Require" },
    name: t`Soy`,
  },
  {
    groupId: "Group 2",
    id: "spelled wheat",
    image: {
      data: require("@assets/images/food/spelledWheat.jpg"),
      type: "Require",
    },
    name: t`Spelled wheat`,
  },
  {
    groupId: "Group 2",
    id: "italian pasta",
    image: {
      data: require("@assets/images/food/italianPasta.jpg"),
      type: "Require",
    },
    name: t`Italian pasta`,
  },
  {
    groupId: "Group 3",
    id: "bass",
    image: { data: require("@assets/images/food/bass.jpg"), type: "Require" },
    name: t`Bass`,
  },
  {
    groupId: "Group 3",
    id: "gilt-head seabream",
    image: {
      data: require("@assets/images/food/giltHeadSeabream.jpg"),
      type: "Require",
    },
    name: t`Gilt-Head seabream`,
  },
  {
    groupId: "Group 3",
    id: "squid",
    image: { data: require("@assets/images/food/squid.jpg"), type: "Require" },
    name: t`Squid`,
  },
  {
    groupId: "Group 3",
    id: "egg",
    image: { data: require("@assets/images/food/egg.jpg"), type: "Require" },
    name: t`Egg`,
  },
  {
    groupId: "Group 3",
    id: "scallops",
    image: {
      data: require("@assets/images/food/scallops.jpg"),
      type: "Require",
    },
    name: t`Scallops`,
  },
  {
    groupId: "Group 3",
    id: "cheese",
    image: { data: require("@assets/images/food/cheese.jpg"), type: "Require" },
    name: t`Cheese`,
  },
  {
    groupId: "Group 3",
    id: "yogurt",
    image: { data: require("@assets/images/food/yogurt.jpg"), type: "Require" },
    name: t`Yogurt`,
  },
  {
    groupId: "Group 4",
    id: "pineapple",
    image: {
      data: require("@assets/images/food/pineapple.jpg"),
      type: "Require",
    },
    name: t`Pineapple`,
  },
  {
    groupId: "Group 4",
    id: "apricot",
    image: {
      data: require("@assets/images/food/apricot.jpg"),
      type: "Require",
    },
    name: t`Apricot`,
  },
  {
    groupId: "Group 4",
    id: "papaya",
    image: { data: require("@assets/images/food/papaya.jpg"), type: "Require" },
    name: t`Papaya`,
  },
];
