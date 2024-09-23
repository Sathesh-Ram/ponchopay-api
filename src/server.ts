import dotenv from 'dotenv';
import sequelize from './config/database';
import app from './app';

dotenv.config();

/**
 * Start the Express server and sync Sequelize models to the database.
 * This ensures that my database tables are created and ready to store data.
 * 
 * { force: false } prevents existing tables from being dropped. 
 * { alter: true } adjusts tables to match model changes.
 */
sequelize.sync({ alter: true })
  .then(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Unable to connect to the database:', err);
  });
