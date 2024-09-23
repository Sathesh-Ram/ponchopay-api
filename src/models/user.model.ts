import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

/**
 * User model defines the structure of the 'users' table.
 * Includes basic user details like name and email.
 */
class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'User',
    timestamps: true,
  }
);

export default User;
