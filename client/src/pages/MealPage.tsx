import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RecipeData } from "../interfaces/RecipeData"; // Define this to structure your recipe info
import { fetchRecipes } from "../api/recipeAPI"; // API call to get recipes based on targets

const MealPage = () => {
    // State for recommended recipes and nutrient goals
    const [recipes, setRecipes] = useState<RecipeData[]>([]);
    const [nutrientGoals, setNutrientGoals] = useState({
      protein: 0,
      carbs: 0,
      fat: 0,
      calories: 0,
    });

      // Fetch recipes based on nutrient goals
    const fetchRecommendedRecipes = async () => {
        try {
          const data = await fetchRecipes(nutrientGoals);
          setRecipes(data);
        } catch (err) {
          console.error('Failed to retrieve recipes:', err);
        }
      };

        // Use effect to load recipes based on goals (set from intake survey)
  useEffect(() => {
    fetchRecommendedRecipes();
  }, [nutrientGoals]);

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