import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import { fetchRecipes,fetchUserGoals } from '../api/recipeAPI'; 
import '../css/MealPage.css';
import auth from '../utils/auth'; 


const MealPage = () => {
    // State for recommended recipes and nutrient goals
    const [userGoals, setUserGoals] = useState<{ calories: number; protein: number; carbs: number; fat: number } | null>(null);
    const [fetchedRecipes, setFetchedRecipes] = useState<string | null>(null);
        
    useEffect(() => {
      const loadUserGoals = async () => {
        try {
          const id  = auth.getProfile()?.id
          const goals = await fetchUserGoals(id as any);
          const { calories, protein, carbs, fat } = goals;
    

          const filteredGoals = { calories, protein, carbs, fat };
    
          setUserGoals(filteredGoals); // Store only the filtered goals in state
        } catch (error) {
          console.error("Failed to fetch user goals:", error);
        }
      };
      
      loadUserGoals();
    }, []);

    useEffect(() => {
      const loadRecipes = async () => {
        if (userGoals) {
          try {
            console.log(userGoals); 
            const recipes = await fetchRecipes(userGoals.calories, userGoals.protein, userGoals.carbs, userGoals.fat);
            setFetchedRecipes(recipes);
          } catch (error) {
            console.error("Failed to fetch recipes:", error);
          }
        }
      };
      
          loadRecipes();  // Run the load function when MealPage mounts
        }, [userGoals]);
      

  return (
    <div className="meal-page">
      <h2>Your Recommended Meals</h2>
      <p>Based on your stats, here are some meal suggestions!</p>
      {fetchedRecipes ? (
        <div>
        {fetchedRecipes.split(/(?=Meal Idea)/g).map((meal, index) => (
          <div key={index} style={{ border: "1px solid #ddd", padding: "1em", marginBottom: "1em" }}>
            <h3>{meal.match(/Meal Idea \d+:\s*([^\n]+)/)?.[0]}</h3> {/* Title of each meal */}
            
            <div>
              <h4>Ingredients:</h4>
              <ul>
                {meal.match(/Ingredients:\s*([\s\S]*?)(?=Preparation:|Nutritional breakdown:|Meal Idea|$)/)?.[1]
                  .split(" - ") // Split by hyphen to get individual ingredients
                  .map((ingredient, i) => ingredient.trim() && <li key={i}>{ingredient.trim()}</li>)} {/* Trim and display each ingredient */}
              </ul>
            </div>
            
            <div>
              <h4>Preparation:</h4>
              <p>{meal.match(/Preparation:\s*([\s\S]*?)(?=Nutritional breakdown:|Meal Idea|$)/)?.[1]}</p> {/* Preparation */}
            </div>
            
            <div>
              <h4>Nutritional breakdown:</h4>
              <p>{meal.match(/Nutritional breakdown:\s*([\s\S]*?)(?=Meal Idea|$)/)?.[1]}</p> {/* Nutritional info */}
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p>Loading recipes...</p>
    )}
      </div>
  );
};

export default MealPage;

