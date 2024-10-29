import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RecipeData } from "../interfaces/RecipeData"; 
import { fetchRecipes,fetchUserGoals } from '../api/recipeAPI'; 
import '../css/MealPage.css';

const MealPage = () => {
    // State for recommended recipes and nutrient goals
    const [recipes, setRecipes] = useState<RecipeData[]>([]);
    const [userGoals, setUserGoals] = useState<{ calories: number; protein: number; carbs: number; fat: number } | null>(null);

        
    useEffect(() => {
      const loadUserGoals = async () => {
        try {
          const goals = await fetchUserGoals();
          
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
            const fetchedRecipes = await fetchRecipes(userGoals.calories, userGoals.protein, userGoals.carbs, userGoals.fat);
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
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h3>{recipe.name}</h3>
              <p>Calories: {recipe.calories}</p>
              <p>Protein: {recipe.protein}g</p>
              <p>Carbs: {recipe.carbs}g</p>
              <p>Fat: {recipe.fat}g</p>
              <Link to={`/recipe/${recipe.id}`}>
                <button>View Recipe</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No recipes match your targets yet. Try adjusting your survey answers.</p>
        )}
      </div>
    </div>
  );
};

export default MealPage;