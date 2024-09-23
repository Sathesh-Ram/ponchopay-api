import express from 'express';
import productRoutes from './routes/product.routes';
import paymentRoutes from './routes/payment.routes';
import userRoutes from './routes/user.routes'; 

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Load routes
app.use('/api', productRoutes);
app.use('/api', paymentRoutes);
app.use('/api', userRoutes);

// Fallback route for 404 errors
app.use((req, res) => res.status(404).send('Route not found'));

export default app;
