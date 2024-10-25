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
      {
        calories: 1800,
        protein: 90,
        carbs: 130,
        fat: 40,
        percentage: 8,
        userId: 4,
      },
      {
        calories: 3200,
        protein: 160,
        carbs: 280,
        fat: 90,
        percentage: 12,
        userId: 5,
      },
      {
        calories: 4000,
        protein: 300,
        carbs: 400,
        fat: 130,
        percentage: 18,
        userId: 6,
      },
      {
        calories: 2500,
        protein: 150,
        carbs: 200,
        fat: 70,
        percentage: 11,
        userId: 7,
      },
      {
        calories: 3500,
        protein: 250,
        carbs: 350,
        fat: 110,
        percentage: 14,
        userId: 8,
      },
      {
        calories: 5000,
        protein: 400,
        carbs: 500,
        fat: 170,
        percentage: 25,
        userId: 9,
      },
      {
        calories: 2800,
        protein: 180,
        carbs: 220,
        fat: 80,
        percentage: 13,
        userId: 10,
      }
    ],
    { individualHooks: true }
  );
};