import { User } from '../models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate(
    [
      { firstName: 'Joy', 
        lastName: 'Cleary', 
        username: 'JollyGuru', 
        email: 'jolly@guru.com', 
        password: 'password' 
      },
      {
        firstName: 'Sunny',
        lastName: 'Scott',
        username: 'SunnyScribe',
        email: 'sunny@scribe.com',
        password: 'password',
      },
      {
        firstName: 'Ramon',
        lastName: 'Cambros',
        username: 'RadiantComet',
        email: 'radiant@comet.com',
        password: 'password',
      },
      {
        firstName: 'Luna',
        lastName: 'Johnson',
        username: 'LunarWanderer',
        email: 'luna@wanderer.com',
        password: 'password',
      },
      {
        firstName: 'Ethan',
        lastName: 'Blake',
        username: 'BlazingHawk',
        email: 'ethan@hawk.com',
        password: 'password',
      },
      {
        firstName: 'Olivia',
        lastName: 'Morris',
        username: 'OceanBreeze',
        email: 'olivia@breeze.com',
        password: 'password',
      },
      {
        firstName: 'Ava',
        lastName: 'Davis',
        username: 'StellarDreamer',
        email: 'ava@dreamer.com',
        password: 'password',
      },
      {
        firstName: 'Liam',
        lastName: 'Smith',
        username: 'NebulaKnight',
        email: 'liam@knight.com',
        password: 'password',
      },
      {
        firstName: 'Maya',
        lastName: 'Reed',
        username: 'CosmicMuse',
        email: 'maya@muse.com',
        password: 'password',
      },
      {
        firstName: 'Zara',
        lastName: 'Patel',
        username: 'GalacticSoul',
        email: 'zara@soul.com',
        password: 'password',
      }
    ],
    { individualHooks: true }
  );
};
