import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

interface BodyInfoAttributes {
    id: number; // primary key
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    percentage: number;
    userId: number; // reference
  }

  interface BodyInfoCreationAttributes extends Optional<BodyInfoAttributes, 'id'> {}

  export class BodyInfo
  extends Model<BodyInfoAttributes, BodyInfoCreationAttributes>
  implements BodyInfoAttributes
  {
    public id!: number; // primary key
    public calories!: number;
    public protein!: number;
    public carbs!: number;
    public fat!: number;
    public percentage!: number;
    public userId!: number; // reference

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }

  export function BodyInfoFactory(sequelize: Sequelize): typeof BodyInfo {
    BodyInfo.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        calories: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        protein: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        carbs: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fat: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        percentage: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
            },
        },
      },
      {
        tableName: 'bodyInfo',
        sequelize,
      }
    );
  
    return BodyInfo;
  }
  