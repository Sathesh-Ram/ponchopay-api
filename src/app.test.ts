import request from 'supertest';
import app from './app';
import sequelize from './config/database'; // Add Sequelize import

// Sync the database before running tests
beforeAll(async () => {
  await sequelize.sync({ force: true }); // Ensure that the database is in a clean state
});

// Close the database connection after all tests
afterAll(async () => {
  await sequelize.close(); // Close the connection to prevent hanging tests
});

describe('API Endpoints', () => {
  it('should fetch all products', async () => {
    const res = await request(app)
      .get('/api/products')
      .expect(200);
    
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should create a new product', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({
        name: 'Test Product',
        description: 'A sample product',
        price: 10.5,
        stock_level: 100
      })
      .expect(201);
    
    expect(res.body.name).toBe('Test Product');
  });
});
