import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { BodyInfoFactory } from './bodyInfo.js';

const User = UserFactory(sequelize);
const BodyInfo = BodyInfoFactory(sequelize);

User.hasOne(BodyInfo, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

BodyInfo.belongsTo(User, {
  foreignKey: 'userId',
});

export { User, BodyInfo };
