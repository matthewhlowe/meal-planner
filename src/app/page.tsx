"use client";

import { useState } from "react";

import MealChooser from "@/components/mealChooser";
import type { MenuItem } from "@/types";
import Menu from "@/components/Menu";

export default function Home() {
    const [menuChoice, setMenuChoice] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    { text: "Add Meal", onClick: () => { setMenuChoice("add"); } },
    { text: "Choose Meals", onClick: () => { setMenuChoice("choose"); } }
  ];

  const components: { [key: string]: React.ReactNode } = {
    add: <div>Add Meal Component Placeholder</div>,
    choose: <MealChooser />
  };

  return (
    <>
      {menuChoice === null ? <Menu items={menuItems} /> : 
      <>
        <button onClick={() => setMenuChoice(null)}>Back to Menu</button>
        {components[menuChoice]}
      </>
      }
    </>
  );
}
