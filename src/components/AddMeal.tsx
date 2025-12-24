"use client";

import { useState } from "react";

import type { MealType } from "@/types";

export default function AddMeal() {
    const [name, setName] = useState("");
    const [type, setType] = useState<MealType | "">("");
    const [ingredients, setIngredients] = useState("");

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meal`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                type,
                ingredients
            })
        });

        if (request.ok) {
            setSubmitted(true);
        }
    }

    return (
        <>
        {!submitted ? <form onSubmit={handleSubmit}>
            <label>Meal Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

            <label>Meal Type:</label>
            <select value={type} onChange={(e) => setType(e.target.value as MealType | "")} required>
                <option value="" disabled>Select Meal Type</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
            </select>

            <label>Ingredients:</label>
            <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required></textarea>

            <button type="submit">Add Meal</button>
        </form> : 
        <div>
            
        </div>}
        </>
    )
}