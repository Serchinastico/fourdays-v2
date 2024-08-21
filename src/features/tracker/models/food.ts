import { t } from "@lingui/macro";
import { Tagged } from "@madeja-studio/cepillo";

export type GroupId =
  | "Group 1"
  | "Group 2"
  | "Group 3"
  | "Group 4"
  | (object & string);

export type Base64Image = string;

export interface Base64FoodImage {
  data: { uri: `data:image/png;base64,${string}` };
}

export interface RequireFoodImage {
  data: any;
}

export type FoodImage =
  | Tagged<"base64", Base64FoodImage>
  | Tagged<"require", RequireFoodImage>;

export interface FoodGroup {
  id: GroupId;
  name: string;
}

export interface Food {
  groupId: GroupId;
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
    image: { data: require("@assets/images/food/chard.jpg"), tag: "require" },
    name: t`Chard`,
  },
  {
    groupId: "Group 4",
    id: "avocado",
    image: {
      data: require("@assets/images/food/avocado.jpg"),
      tag: "require",
    },
    name: t`Avocado`,
  },
  {
    groupId: "Group 1",
    id: "garlic",
    image: { data: require("@assets/images/food/garlic.jpg"), tag: "require" },
    name: t`Garlic`,
  },
  {
    groupId: "Group 1",
    id: "artichoke",
    image: {
      data: require("@assets/images/food/artichoke.jpg"),
      tag: "require",
    },
    name: t`Artichoke`,
  },
  {
    groupId: "Group 1",
    id: "alfalfa",
    image: {
      data: require("@assets/images/food/alfalfa.jpg"),
      tag: "require",
    },
    name: t`Alfalfa`,
  },
  {
    groupId: "Group 3",
    id: "clams",
    image: { data: require("@assets/images/food/clams.jpg"), tag: "require" },
    name: t`Clams`,
  },
  {
    groupId: "Group 4",
    id: "blueberries",
    image: {
      data: require("@assets/images/food/blueberries.jpg"),
      tag: "require",
    },
    name: t`Blueberries`,
  },
  {
    groupId: "Group 2",
    id: "rice",
    image: { data: require("@assets/images/food/rice.jpg"), tag: "require" },
    name: t`Rice`,
  },
  {
    groupId: "Group 3",
    id: "tuna",
    image: { data: require("@assets/images/food/tuna.jpg"), tag: "require" },
    name: t`Tuna`,
  },
  {
    groupId: "Group 2",
    id: "oat",
    image: { data: require("@assets/images/food/oat.jpg"), tag: "require" },
    name: t`Oat`,
  },
  {
    groupId: "Group 3",
    id: "cod",
    image: { data: require("@assets/images/food/cod.jpg"), tag: "require" },
    name: t`Cod`,
  },
  {
    groupId: "Group 2",
    id: "sweet potato",
    image: {
      data: require("@assets/images/food/sweetPotato.jpg"),
      tag: "require",
    },
    name: t`Sweet potato`,
  },
  {
    groupId: "Group 3",
    id: "cockles",
    image: {
      data: require("@assets/images/food/cockles.jpg"),
      tag: "require",
    },
    name: t`Cockles`,
  },
  {
    groupId: "Group 2",
    id: "eggplant",
    image: {
      data: require("@assets/images/food/eggplant.jpg"),
      tag: "require",
    },
    name: t`Eggplant`,
  },
  {
    groupId: "Group 1",
    id: "watercress",
    image: {
      data: require("@assets/images/food/watercress.jpg"),
      tag: "require",
    },
    name: t`Watercress`,
  },
  {
    groupId: "Group 3",
    id: "anchovy",
    image: {
      data: require("@assets/images/food/anchovy.jpg"),
      tag: "require",
    },
    name: t`Anchovy`,
  },
  {
    groupId: "Group 1",
    id: "broccoli",
    image: {
      data: require("@assets/images/food/broccoli.jpg"),
      tag: "require",
    },
    name: t`Broccoli`,
  },
  {
    groupId: "Group 1",
    id: "zucchini",
    image: {
      data: require("@assets/images/food/zucchini.jpg"),
      tag: "require",
    },
    name: t`Zucchini`,
  },
  {
    groupId: "Group 1",
    id: "pumpkin",
    image: {
      data: require("@assets/images/food/pumpkin.jpg"),
      tag: "require",
    },
    name: t`Pumpkin`,
  },
  {
    groupId: "Group 3",
    id: "crab",
    image: { data: require("@assets/images/food/crab.jpg"), tag: "require" },
    name: t`Crab`,
  },
  {
    groupId: "Group 3",
    id: "prawn",
    image: { data: require("@assets/images/food/prawn.jpg"), tag: "require" },
    name: t`Prawn`,
  },
  {
    groupId: "Group 1",
    id: "thistle",
    image: {
      data: require("@assets/images/food/thistle.jpg"),
      tag: "require",
    },
    name: t`Thistle`,
  },
  {
    groupId: "Group 1",
    id: "onion",
    image: { data: require("@assets/images/food/onion.jpg"), tag: "require" },
    name: t`Onion`,
  },
  {
    groupId: "Group 1",
    id: "spring onion",
    image: {
      data: require("@assets/images/food/springOnion.jpg"),
      tag: "require",
    },
    name: t`Spring onion`,
  },
  {
    groupId: "Group 2",
    id: "rye",
    image: { data: require("@assets/images/food/rye.jpg"), tag: "require" },
    name: t`Rye`,
  },
  {
    groupId: "Group 3",
    id: "pork",
    image: { data: require("@assets/images/food/pork.jpg"), tag: "require" },
    name: t`Pork`,
  },
  {
    groupId: "Group 4",
    id: "cherry",
    image: { data: require("@assets/images/food/cherry.jpg"), tag: "require" },
    name: t`Cherry`,
  },
  {
    groupId: "Group 4",
    id: "custard apple",
    image: {
      data: require("@assets/images/food/custardApple.jpg"),
      tag: "require",
    },
    name: t`Custard apple`,
  },
  {
    groupId: "Group 1",
    id: "mushroom",
    image: {
      data: require("@assets/images/food/mushroom.jpg"),
      tag: "require",
    },
    name: t`Mushroom`,
  },
  {
    groupId: "Group 1",
    id: "carrot",
    image: { data: require("@assets/images/food/carrot.jpg"), tag: "require" },
    name: t`Carrot`,
  },
  {
    groupId: "Group 1",
    id: "cabbage",
    image: {
      data: require("@assets/images/food/cabbage.jpg"),
      tag: "require",
    },
    name: t`Cabbage`,
  },
  {
    groupId: "Group 4",
    id: "plum",
    image: { data: require("@assets/images/food/plum.jpg"), tag: "require" },
    name: t`Plum`,
  },
  {
    groupId: "Group 1",
    id: "brussels sprouts",
    image: {
      data: require("@assets/images/food/brusselsSprouts.jpg"),
      tag: "require",
    },
    name: t`Brussels sprouts`,
  },
  {
    groupId: "Group 4",
    id: "medlar",
    image: { data: require("@assets/images/food/medlar.jpg"), tag: "require" },
    name: t`Medlar`,
  },
  {
    groupId: "Group 1",
    id: "cauliflower",
    image: {
      data: require("@assets/images/food/cauliflower.jpg"),
      tag: "require",
    },
    name: t`Cauliflower`,
  },
  {
    groupId: "Group 3",
    id: "rabbit",
    image: { data: require("@assets/images/food/rabbit.jpg"), tag: "require" },
    name: t`Rabbit`,
  },
  {
    groupId: "Group 3",
    id: "lamb",
    image: { data: require("@assets/images/food/lamb.jpg"), tag: "require" },
    name: t`Lamb`,
  },
  {
    groupId: "Group 1",
    id: "endive",
    image: { data: require("@assets/images/food/endive.jpg"), tag: "require" },
    name: t`Endive`,
  },
  {
    groupId: "Group 1",
    id: "belgian endive",
    image: {
      data: require("@assets/images/food/belgianEndive.jpg"),
      tag: "require",
    },
    name: t`Belgian endive`,
  },
  {
    groupId: "Group 4",
    id: "kiwi",
    image: { data: require("@assets/images/food/kiwi.jpg"), tag: "require" },
    name: t`Kiwi`,
  },
  {
    groupId: "Group 1",
    id: "asparagus",
    image: {
      data: require("@assets/images/food/asparagus.jpg"),
      tag: "require",
    },
    name: t`Asparagus`,
  },
  {
    groupId: "Group 1",
    id: "spinach",
    image: {
      data: require("@assets/images/food/spinach.jpg"),
      tag: "require",
    },
    name: t`Spinach`,
  },
  {
    groupId: "Group 4",
    id: "raspberry",
    image: {
      data: require("@assets/images/food/raspberry.jpg"),
      tag: "require",
    },
    name: t`Raspberry`,
  },
  {
    groupId: "Group 4",
    id: "strawberry",
    image: {
      data: require("@assets/images/food/strawberry.jpg"),
      tag: "require",
    },
    name: t`Strawberry`,
  },
  {
    groupId: "Group 1",
    id: "lettuce",
    image: {
      data: require("@assets/images/food/lettuce.jpg"),
      tag: "require",
    },
    name: t`Lettuce`,
  },
  {
    groupId: "Group 1",
    id: "tomato",
    image: { data: require("@assets/images/food/tomato.jpg"), tag: "require" },
    name: t`Tomato`,
  },
  {
    groupId: "Group 4",
    id: "grape",
    image: { data: require("@assets/images/food/grape.jpg"), tag: "require" },
    name: t`Grape`,
  },
  {
    groupId: "Group 3",
    id: "trout",
    image: { data: require("@assets/images/food/trout.jpg"), tag: "require" },
    name: t`Trout`,
  },
  {
    groupId: "Group 2",
    id: "wheat",
    image: { data: require("@assets/images/food/wheat.jpg"), tag: "require" },
    name: t`Wheat`,
  },
  {
    groupId: "Group 3",
    id: "veal",
    image: { data: require("@assets/images/food/veal.jpg"), tag: "require" },
    name: t`Veal`,
  },
  {
    groupId: "Group 3",
    id: "sepia",
    image: { data: require("@assets/images/food/sepia.jpg"), tag: "require" },
    name: t`Sepia`,
  },
  {
    groupId: "Group 2",
    id: "semolina",
    image: {
      data: require("@assets/images/food/semolina.jpg"),
      tag: "require",
    },
    name: t`Semolina`,
  },
  {
    groupId: "Group 3",
    id: "sardines",
    image: {
      data: require("@assets/images/food/sardines.jpg"),
      tag: "require",
    },
    name: t`Sardines`,
  },
  {
    groupId: "Group 4",
    id: "watermelon",
    image: {
      data: require("@assets/images/food/watermelon.jpg"),
      tag: "require",
    },
    name: t`Watermelon`,
  },
  {
    groupId: "Group 3",
    id: "salmon",
    image: { data: require("@assets/images/food/salmon.jpg"), tag: "require" },
    name: t`Salmon`,
  },
  {
    groupId: "Group 3",
    id: "turbot",
    image: { data: require("@assets/images/food/turbot.jpg"), tag: "require" },
    name: t`Turbot`,
  },
  {
    groupId: "Group 1",
    id: "radish",
    image: { data: require("@assets/images/food/radish.jpg"), tag: "require" },
    name: t`Radish`,
  },
  {
    groupId: "Group 3",
    id: "octopus",
    image: {
      data: require("@assets/images/food/octopus.jpg"),
      tag: "require",
    },
    name: t`Octopus`,
  },
  {
    groupId: "Group 1",
    id: "leek",
    image: { data: require("@assets/images/food/leek.jpg"), tag: "require" },
    name: t`Leek`,
  },
  {
    groupId: "Group 4",
    id: "grapefruit",
    image: {
      data: require("@assets/images/food/grapefruit.jpg"),
      tag: "require",
    },
    name: t`Grapefruit`,
  },
  {
    groupId: "Group 4",
    id: "banana",
    image: { data: require("@assets/images/food/banana.jpg"), tag: "require" },
    name: t`Banana`,
  },
  {
    groupId: "Group 1",
    id: "pepper",
    image: { data: require("@assets/images/food/pepper.jpg"), tag: "require" },
    name: t`Pepper`,
  },
  {
    groupId: "Group 3",
    id: "whiting",
    image: {
      data: require("@assets/images/food/whiting.jpg"),
      tag: "require",
    },
    name: t`Whiting`,
  },
  {
    groupId: "Group 3",
    id: "chicken",
    image: {
      data: require("@assets/images/food/chicken.jpg"),
      tag: "require",
    },
    name: t`Chicken`,
  },
  {
    groupId: "Group 1",
    id: "parsley",
    image: {
      data: require("@assets/images/food/parsley.jpg"),
      tag: "require",
    },
    name: t`Parsley`,
  },
  {
    groupId: "Group 4",
    id: "pear",
    image: { data: require("@assets/images/food/pear.jpg"), tag: "require" },
    name: t`Pear`,
  },
  {
    groupId: "Group 1",
    id: "cucumber",
    image: {
      data: require("@assets/images/food/cucumber.jpg"),
      tag: "require",
    },
    name: t`Cucumber`,
  },
  {
    groupId: "Group 3",
    id: "turkey",
    image: { data: require("@assets/images/food/turkey.jpg"), tag: "require" },
    name: t`Turkey`,
  },
  {
    groupId: "Group 2",
    id: "potato",
    image: { data: require("@assets/images/food/potato.jpg"), tag: "require" },
    name: t`Potato`,
  },
  {
    groupId: "Group 3",
    id: "snapper",
    image: {
      data: require("@assets/images/food/snapper.jpg"),
      tag: "require",
    },
    name: t`Snapper`,
  },
  {
    groupId: "Group 4",
    id: "açai",
    image: { data: require("@assets/images/food/acai.jpg"), tag: "require" },
    name: "Açai",
  },
  {
    groupId: "Group 2",
    id: "chickpeas",
    image: {
      data: require("@assets/images/food/chickpeas.jpg"),
      tag: "require",
    },
    name: t`Chickpeas`,
  },
  {
    groupId: "Group 4",
    id: "paraguayan",
    image: {
      data: require("@assets/images/food/paraguayan.jpg"),
      tag: "require",
    },
    name: t`Paraguayan`,
  },
  {
    groupId: "Group 2",
    id: "yam",
    image: { data: require("@assets/images/food/yam.jpg"), tag: "require" },
    name: t`Yam`,
  },
  {
    groupId: "Group 3",
    id: "oyster",
    image: { data: require("@assets/images/food/oyster.jpg"), tag: "require" },
    name: t`Oyster`,
  },
  {
    groupId: "Group 4",
    id: "orange",
    image: { data: require("@assets/images/food/orange.jpg"), tag: "require" },
    name: t`Orange`,
  },
  {
    groupId: "Group 1",
    id: "turnip",
    image: { data: require("@assets/images/food/turnip.jpg"), tag: "require" },
    name: t`Turnip`,
  },
  {
    groupId: "Group 3",
    id: "hake",
    image: { data: require("@assets/images/food/hake.jpg"), tag: "require" },
    name: t`Hake`,
  },
  {
    groupId: "Group 4",
    id: "peach",
    image: { data: require("@assets/images/food/peach.jpg"), tag: "require" },
    name: t`Peach`,
  },
  {
    groupId: "Group 4",
    id: "cantaloupe",
    image: {
      data: require("@assets/images/food/cantaloupe.jpg"),
      tag: "require",
    },
    name: t`Cantaloupe`,
  },
  {
    groupId: "Group 4",
    id: "apple",
    image: { data: require("@assets/images/food/apple.jpg"), tag: "require" },
    name: t`Apple`,
  },
  {
    groupId: "Group 4",
    id: "mango",
    image: { data: require("@assets/images/food/mango.jpg"), tag: "require" },
    name: t`Mango`,
  },
  {
    groupId: "Group 2",
    id: "corn",
    image: { data: require("@assets/images/food/corn.jpg"), tag: "require" },
    name: t`Corn`,
  },
  {
    groupId: "Group 2",
    id: "beans",
    image: { data: require("@assets/images/food/beans.jpg"), tag: "require" },
    name: t`Beans`,
  },
  {
    groupId: "Group 2",
    id: "whiteBeans",
    image: {
      data: require("@assets/images/food/whiteBeans.jpg"),
      tag: "require",
    },
    name: t`White beans`,
  },
  {
    groupId: "Group 2",
    id: "yellowBeans",
    image: {
      data: require("@assets/images/food/yellowBeans.jpg"),
      tag: "require",
    },
    name: t`Yellow beans`,
  },
  {
    groupId: "Group 2",
    id: "cranberryBeans",
    image: {
      data: require("@assets/images/food/cranberryBeans.jpg"),
      tag: "require",
    },
    name: t`Cranberry beans`,
  },
  {
    groupId: "Group 4",
    id: "lemon",
    image: { data: require("@assets/images/food/lemon.jpg"), tag: "require" },
    name: t`Lemon`,
  },
  {
    groupId: "Group 4",
    id: "lime",
    image: { data: require("@assets/images/food/lime.jpg"), tag: "require" },
    name: t`Lime`,
  },
  {
    groupId: "Group 3",
    id: "lobster",
    image: {
      data: require("@assets/images/food/lobster.jpg"),
      tag: "require",
    },
    name: t`Lobster`,
  },
  {
    groupId: "Group 2",
    id: "peas",
    image: { data: require("@assets/images/food/peas.jpg"), tag: "require" },
    name: t`Peas`,
  },
  {
    groupId: "Group 2",
    id: "lentils",
    image: {
      data: require("@assets/images/food/lentils.jpg"),
      tag: "require",
    },
    name: t`Lentils`,
  },
  {
    groupId: "Group 3",
    id: "sole",
    image: { data: require("@assets/images/food/sole.jpg"), tag: "require" },
    name: t`Sole`,
  },
  {
    groupId: "Group 1",
    id: "green beans",
    image: {
      data: require("@assets/images/food/greenBeans.jpg"),
      tag: "require",
    },
    name: t`Green beans`,
  },
  {
    groupId: "Group 2",
    id: "wholemeal bread",
    image: {
      data: require("@assets/images/food/wholemealBread.jpg"),
      tag: "require",
    },
    name: t`Wholemeal bread`,
  },
  {
    groupId: "Group 2",
    id: "soy",
    image: { data: require("@assets/images/food/soy.jpg"), tag: "require" },
    name: t`Soy`,
  },
  {
    groupId: "Group 2",
    id: "spelled wheat",
    image: {
      data: require("@assets/images/food/spelledWheat.jpg"),
      tag: "require",
    },
    name: t`Spelled wheat`,
  },
  {
    groupId: "Group 2",
    id: "italian pasta",
    image: {
      data: require("@assets/images/food/italianPasta.jpg"),
      tag: "require",
    },
    name: t`Italian pasta`,
  },
  {
    groupId: "Group 3",
    id: "bass",
    image: { data: require("@assets/images/food/bass.jpg"), tag: "require" },
    name: t`Bass`,
  },
  {
    groupId: "Group 3",
    id: "gilt-head seabream",
    image: {
      data: require("@assets/images/food/giltHeadSeabream.jpg"),
      tag: "require",
    },
    name: t`Gilt-Head seabream`,
  },
  {
    groupId: "Group 3",
    id: "squid",
    image: { data: require("@assets/images/food/squid.jpg"), tag: "require" },
    name: t`Squid`,
  },
  {
    groupId: "Group 3",
    id: "egg",
    image: { data: require("@assets/images/food/egg.jpg"), tag: "require" },
    name: t`Egg`,
  },
  {
    groupId: "Group 3",
    id: "scallops",
    image: {
      data: require("@assets/images/food/scallops.jpg"),
      tag: "require",
    },
    name: t`Scallops`,
  },
  {
    groupId: "Group 3",
    id: "cheese",
    image: { data: require("@assets/images/food/cheese.jpg"), tag: "require" },
    name: t`Cheese`,
  },
  {
    groupId: "Group 3",
    id: "yogurt",
    image: { data: require("@assets/images/food/yogurt.jpg"), tag: "require" },
    name: t`Yogurt`,
  },
  {
    groupId: "Group 4",
    id: "pineapple",
    image: {
      data: require("@assets/images/food/pineapple.jpg"),
      tag: "require",
    },
    name: t`Pineapple`,
  },
  {
    groupId: "Group 4",
    id: "apricot",
    image: {
      data: require("@assets/images/food/apricot.jpg"),
      tag: "require",
    },
    name: t`Apricot`,
  },
  {
    groupId: "Group 4",
    id: "papaya",
    image: { data: require("@assets/images/food/papaya.jpg"), tag: "require" },
    name: t`Papaya`,
  },
];
