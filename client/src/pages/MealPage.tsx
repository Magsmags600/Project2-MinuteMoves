import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RecipeData } from "../interfaces/RecipeData"; // Define this to structure your recipe info
// import { fetchRecipes } from '../api/recipeAPI'; // Define this to structure your recipe API call
import '../css/MealPage.css';

const MealPage = () => {
    // State for recommended recipes and nutrient goals
    const [recipes] = useState<RecipeData[]>([]);

      // Fetch recipes based on nutrient goals
    const fetchRecommendedRecipes = async () => {
        try {
      
        } catch (err) {
          console.error('Failed to retrieve recipes:', err);
        }
      };

        // Use effect to load recipes based on goals (set from intake survey)
  useEffect(() => {
    fetchRecommendedRecipes();
  });

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