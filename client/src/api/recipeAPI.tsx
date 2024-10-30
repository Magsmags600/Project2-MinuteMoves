// src/api/recipeAPI.ts
import axios from 'axios';


// Fetch user-specific nutritional goals
export const fetchUserGoals = async (id: number ): Promise<{ calories: number; protein: number; carbs: number; fat: number }> => {
  try {
    const response = await axios.get<{ id: number; calories: number; protein: number; carbs: number; fat: number }>(`/api/bodyInfo/${id}`);
    console.log("API response:", response.data); 

    // Extract only the nutritional properties
    const { calories, protein, carbs, fat } = response.data;
    return { calories, protein, carbs, fat };

  } catch (error) {
    console.error("Error fetching user goals:", error);
    throw error;
  }
};

export const fetchRecipes = async (calories: number, protein: number, carbs: number, fat: number) => {
  try {
    const response = await axios.post('/api/meal-recommendations', { calories, protein, carbs, fat });
    console.log(response.data);
    return response.data.result; 
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
