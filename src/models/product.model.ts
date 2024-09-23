import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

/**
 * Product model that defines the schema of the 'products' table in the database.
 * Includes fields for name, description, price, and stock level.
 */
class Product extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public stock_level!: number;
}

Product.init(
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
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    stock_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,  // Handle cases where stock level is not set
    },
  },
  {
    sequelize,
    modelName: 'Product',
    timestamps: true,  // Automatically adds createdAt and updatedAt fields
  }
);

export default Product;
