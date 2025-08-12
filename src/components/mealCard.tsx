import type { Meal } from "@/types";

interface MealCardProps {
    meal: Meal; 
}

export default function MealCard({ meal }: MealCardProps) {
  return (
    <div
      style={{
        border: "2px solid #ccc",
        padding: "16px",
        margin: "16px",
        borderRadius: "5px",
        width: "calc(100% - 32px)",
        height: "calc(100% - 32px)",
        boxSizing: "border-box",
      }}
    >
      <p>{meal.type}</p>
      <h2>{meal.name}</h2>
      <ul>
        {meal.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}