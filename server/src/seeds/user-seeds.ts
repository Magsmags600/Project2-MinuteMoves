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
    ],
    { individualHooks: true }
  );
};
