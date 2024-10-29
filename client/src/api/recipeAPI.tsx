// src/api/recipeAPI.ts
import axios from 'axios';


// Fetch user-specific nutritional goals
export const fetchUserGoals = async (id: number ): Promise<{ calories: number; protein: number; carbs: number; fat: number }> => {
  try {
    const response = await axios.get(`/api/bodyInfo/${id}`); 
    return response.data.BodyInfo; 
  } catch (error) {
    console.error("Error fetching user goals:", error);
    throw error;
  }
};

export const fetchRecipes = async (calories: number, protein: number, carbs: number, fat: number) => {
  try {
    const response = await axios.post('/api/meal-recommendations', { calories, protein, carbs, fat });
    console.log(response.data);
    return response.data.result; // Adjust based on the response structure from OpenAI
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
