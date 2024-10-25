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
    public id!: number; // primary hey
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
          type: DataTypes.INTERGER,
          allowNull: false,
        },
        protein: {
            type: DataTypes.INTERGER,
            allowNull: false,
        },
        carbs: {
            type: DataTypes.INTERGER,
            allowNull: false,
        },
        fat: {
            type: DataTypes.INTERGER,
            allowNull: false,
        },
        percentage: {
            type: DataTypes.INTERGER,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTERGER,
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
  