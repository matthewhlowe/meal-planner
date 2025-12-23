"use client";

import React, { useState, useEffect } from "react";

import type { Meal } from "@/types";
import MealCard from "./mealCard";

import { mockMeals } from "@/mocks";

export default function MealChooser() {
    const [meals, setMeals] = useState<Meal[]>([]);
    
    const [currentMealIndex, setCurrentMealIndex] = useState<number>(0);

    const [chosenMeals, setChosenMeals] = useState<Meal[]>([]);

    useEffect(() => {
        const meals = mockMeals; // replace with fetch

        setMeals(meals);
        setCurrentMealIndex(0);
    }, []);

    const addMeal = (meal: Meal) => {
        setChosenMeals([...chosenMeals, meal]);
        setCurrentMealIndex((index) => index + 1);
    }

    const passMeal = () => {
        setCurrentMealIndex((index) => index + 1);
    }

    if (meals.length === 0) {
        return <p>Loading meals...</p>;
    }

    return (
        <>
        {currentMealIndex < meals.length ? (
        <MealCard meal={meals[currentMealIndex]} addMeal={addMeal} passMeal={passMeal} />
        ) : (
            <>
                <h2>Chosen Meals:</h2>
                <ul>
                {chosenMeals.map((meal) => (
                    <li key={meal.id}>{meal.name}</li>
                ))}
                </ul>
            </>
        )}
        </>
    )
}