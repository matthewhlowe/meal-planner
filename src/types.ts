export type MealType = "breakfast" | "lunch" | "dinner";

export interface Meal {
  id: number;
  name: string;
  type: MealType;
  ingredients: string[];
  image?: string
}
