import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RecipeData } from "../interfaces/RecipeData"; // Define this to structure your recipe info
import { fetchRecipes } from "../api/recipeAPI"; // API call to get recipes based on targets


