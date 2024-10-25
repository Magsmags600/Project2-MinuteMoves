import { BodyInfo } from '../models/index.js';

export const seedUsers = async () => {
  await BodyInfo.bulkCreate(
    [
      { 
        calories: 2000,
        protein: 100,
        carbs: 150,
        fat: 50,
        percentage: 10,
        userId: 1,
    },
      {
        calories: 3000,
        protein: 200,
        carbs: 300,
        fat: 100,
        percentage: 15,
        userId: 2,
      },
      {
        calories: 4500,
        protein: 350,
        carbs: 450,
        fat: 150,
        percentage: 20,
        userId: 3,
      },
    ],
    { individualHooks: true }
  );
};