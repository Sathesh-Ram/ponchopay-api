import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

/**
 * Initialize Sequelize instance with PostgreSQL configuration
 * using environment variables defined in the .env file.
 */
const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'postgres',
  logging: false, // Turn off Sequelize logging for production
});

export default sequelize;

