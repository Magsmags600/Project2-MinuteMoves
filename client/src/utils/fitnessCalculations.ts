import { BodyInfo } from '../interfaces/BodyInfo';

export async function calculateNutrition(
  weight: number,
  height: number,
  age: number,
  gender: string,
  activityLevel: string,
  muscleGoal: string, // New parameter
  userId: number
): Promise<void> {
  let bmr: number;
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

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
      tdee = bmr;
  }

  // Define the adjustment factor based on muscleGoal
  let adjustmentFactor: number;

  if (muscleGoal === 'lose weight') {
    adjustmentFactor = -0.10; // Decrease calories by 10%
  } else {
    adjustmentFactor = 0.10; // Increase calories by 10%
  }

  const adjustedCalories = tdee * (1 + adjustmentFactor);

  const proteinPercentage = 0.25;
  const fatsPercentage = 0.30;
  const carbohydratesPercentage = 0.45;

  const proteinCalories = adjustedCalories * proteinPercentage;
  const fatsCalories = adjustedCalories * fatsPercentage;
  const carbohydratesCalories = adjustedCalories * carbohydratesPercentage;

  const protein = proteinCalories / 4;
  const fats = fatsCalories / 9;
  const carbohydrates = carbohydratesCalories / 4;

  // Construct the BodyInfo data object
  const bodyInfoData: BodyInfo = {
    calories: Math.round(adjustedCalories),
    protein: Math.round(protein),
    carbs: Math.round(carbohydrates),
    fat: Math.round(fats),
    percentage: 10,
    userId: userId,
  };

  // Send the data to the backend
  try {
    const response = await fetch('/api/bodyInfo/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyInfoData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    console.log('BodyInfo data created successfully');
  } catch (error) {
    console.error('Failed to create BodyInfo:', error);
  }
}
