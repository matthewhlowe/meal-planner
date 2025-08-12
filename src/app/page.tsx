import MealCard from "@/components/mealCard";
import { mockMeals } from "@/mocks";

export default function Home() {
  return <>
  <MealCard meal={mockMeals[0]} />
  </>;
}
