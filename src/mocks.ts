import type { Meal } from "./types";

export const mockMeals: Meal[] = [
  {
    id: 1,
    name: "Pancakes",
    type: "breakfast",
    ingredients: ["flour", "milk", "eggs", "sugar", "baking powder"],
  },
  {
    id: 2,
    name: "Caesar Salad",
    type: "lunch",
    ingredients: [
      "romaine lettuce",
      "croutons",
      "Caesar dressing",
      "parmesan cheese",
    ],
  },
  {
    id: 3,
    name: "Spaghetti Bolognese",
    type: "dinner",
    ingredients: [
      "spaghetti",
      "ground beef",
      "tomato sauce",
      "onion",
      "garlic",
    ],
  },
];
