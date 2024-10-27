export interface RecipeData {
    id: number;         // Unique identifier for each recipe
    name: string;       // Name of the recipe
    calories: number;   // Total calories
    protein: number;    // Protein content in grams
    carbs: number;      // Carbohydrate content in grams
    fat: number;        // Fat content in grams
    ingredients: string[];  // List of ingredients
    instructions: string;   // Preparation instructions
  }