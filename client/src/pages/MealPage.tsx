import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RecipeData } from "../interfaces/RecipeData"; 
import { fetchRecipes,fetchUserGoals } from '../api/recipeAPI'; 
import '../css/MealPage.css';
import auth from '../utils/auth'; 


const MealPage = () => {
    // State for recommended recipes and nutrient goals
    const [recipes, setRecipes] = useState<RecipeData[]>([]);
    const [userGoals, setUserGoals] = useState<{ calories: number; protein: number; carbs: number; fat: number } | null>(null);

        
    useEffect(() => {
      const loadUserGoals = async () => {
        try {
          const id  = auth.getProfile()?.id
          const goals = await fetchUserGoals(id as any);
          console.log(goals);
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
            const fetchedRecipes = await fetchRecipes(userGoals.calories, userGoals.protein, userGoals.carbs, userGoals.fat);
            console.log(fetchRecipes);
            setRecipes(fetchedRecipes);
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
      <p>Based on your intake survey, here are some meal suggestions!</p>

      <div className="meal-list">
        {recipes ? (
          <div> {recipes}</div>
        ) : (<div></div>)}

      </div>
    </div>
  );
};

export default MealPage;