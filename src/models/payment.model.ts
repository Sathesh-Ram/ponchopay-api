import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Product from './product.model';
import User from './user.model';

/**
 * Payment model defines the schema of the 'payments' table.
 * Includes references to the associated product and user.
 */
class Payment extends Model {
  public id!: number;
  public amount!: number;
  public status!: string;
  public payment_method!: string;
  public productId!: number;
  public userId!: number;
}

Payment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('initialized', 'user_set', 'payment_taken', 'complete'),
      defaultValue: 'initialized',
    },
    payment_method: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Products',
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Payment',
    timestamps: true,
  }
);

// Define associations after models are initialized
Product.hasMany(Payment, { foreignKey: 'productId' });
Payment.belongsTo(Product, { foreignKey: 'productId' });

User.hasMany(Payment, { foreignKey: 'userId' });
Payment.belongsTo(User, { foreignKey: 'userId' });

export default Payment;
