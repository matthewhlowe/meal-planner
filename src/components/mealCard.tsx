import type { Meal } from "@/types";
import styles from "./MealCard.module.css";

interface MealCardProps {
    meal: Meal; 
}

export default function MealCard({ meal }: MealCardProps) {
  return (
    <div className={styles.card}>
      <p>{meal.type}</p>
      <h2>{meal.name}</h2>
      <ul>
        {meal.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className={styles.circularButton}>&#x2715;</button>
        <button className={styles.circularButton}>&#x2713;</button>
      </div>
    </div>
  );
}