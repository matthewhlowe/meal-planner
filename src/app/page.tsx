import MealCard from "@/components/MealCard";
import { mockMeals } from "@/mocks";

export default function Home() {
  return <>
  <MealCard meal={mockMeals[0]} />
  </>;
}
