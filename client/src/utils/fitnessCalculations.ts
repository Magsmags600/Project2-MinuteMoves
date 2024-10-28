// src/utils/fitnessCalculations.ts

import { BodyInfo } from '../interfaces/BodyInfo';

interface MacronutrientBreakdown {
  totalCalories: number;
  protein: number; // grams
  fats: number; // grams
  carbohydrates: number; // grams
}

export function calculateNutrition(
  bodyInfo: BodyInfo,
  weight: number,
  height: number,
  age: number,
  gender: string,
  activityLevel: string
): MacronutrientBreakdown {
  // Calculate BMR using Mifflin-St Jeor Equation
  let bmr: number;
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Calculate TDEE based on activity level
  let tdee: number;
  switch (activityLevel) {
    case 'sedentary':
      tdee = bmr * 1.2;
      break;
    case 'lightly active':
      tdee = bmr * 1.375;
      break;
    case 'moderately active':
      tdee = bmr * 1.55;
      break;
    case 'very active':
      tdee = bmr * 1.725;
      break;
    case 'super active':
      tdee = bmr * 1.9;
      break;
    default:
      tdee = bmr; // Default to BMR if activity level is unknown
  }

  // Adjust TDEE based on weight goal percentage
  const adjustmentFactor = bodyInfo.percentage / 100; // Convert percentage to decimal
  const adjustedCalories = tdee * (1 + adjustmentFactor); // Increase for weight gain or decrease for weight loss

  // Macronutrient distribution (in % of adjusted calories)
  const proteinPercentage = 0.25; // 25%
  const fatsPercentage = 0.30; // 30%
  const carbohydratesPercentage = 0.45; // 45%

  // Calculate calories for each macronutrient
  const proteinCalories = adjustedCalories * proteinPercentage;
  const fatsCalories = adjustedCalories * fatsPercentage;
  const carbohydratesCalories = adjustedCalories * carbohydratesPercentage;

  // Convert calories to grams
  const protein = proteinCalories / 4; // 4 calories per gram
  const fats = fatsCalories / 9; // 9 calories per gram
  const carbohydrates = carbohydratesCalories / 4; // 4 calories per gram

  return {
    totalCalories: Math.round(adjustedCalories),
    protein: Math.round(protein),
    fats: Math.round(fats),
    carbohydrates: Math.round(carbohydrates),
  };
}
