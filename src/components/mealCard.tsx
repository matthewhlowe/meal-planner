"use client";

import type { Meal } from "@/types";
import styles from "./MealCard.module.css";

interface MealCardProps {
    meal: Meal; 
    addMeal: (meal: Meal) => void;
    passMeal: () => void;
}

export default function MealCard({ meal, addMeal, passMeal }: MealCardProps) {

  const handleAddClick = () => {
    addMeal(meal);
  }

  const handlePassClick = () => {
    passMeal();
  }

  return (
    <div className={styles.card}>
      <img src={meal.image} alt={meal.name} style={{ width: "100%"}} />
      <div style={{ padding: "0 16px"}}>
        <p>{meal.type}</p>
        <h2>{meal.name}</h2>
        <ul className={styles.inlineList} style={{ flexShrink: 1, overflowY: "hidden", textOverflow: "ellipsis"}}>
          {meal.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button className={styles.circularButton} onClick={handlePassClick}>&#x2715;</button>
          <button className={styles.circularButton} onClick={handleAddClick}>&#x2713;</button>
        </div>
      </div>
    </div>
  );
}