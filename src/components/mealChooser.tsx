"use client";

import React, { useState, useEffect } from "react";

import type { Meal } from "@/types";
import MealCard from "./mealCard";

export default function MealChooser() {
    const [meals, setMeals] = useState<Meal[]>([]);
    
    const [currentMealIndex, setCurrentMealIndex] = useState<number>(0);

    const [chosenMeals, setChosenMeals] = useState<Meal[]>([]);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meals`);
            const data = await response.json();
            return data as Meal[];
        }

        fetchMeals().then((meals) => {
            setMeals(meals);
        });
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