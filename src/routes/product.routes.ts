import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

/**
 * Route to fetch all products.
 * GET /api/products
 */
router.get('/products', ProductController.getProducts);

/**
 * Route to create a new product.
 * POST /api/products
 */
router.post('/products', ProductController.createProduct);

export default router;
