import { Request, Response } from 'express';
import ProductService from '../services/product.service';

/**
 * ProductController handles all HTTP requests related to products.
 */
class ProductController {
  /**
   * Handles GET request to fetch all products.
   * @param req Express request object.
   * @param res Express response object.
   */
  async getProducts(req: Request, res: Response) {
    try {
      const products = await ProductService.getAllProducts();
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ message: (error as Error).message });
    }
  }

  /**
   * Handles POST request to create a new product.
   * @param req Express request object.
   * @param res Express response object.
   */
  async createProduct(req: Request, res: Response) {
    try {
      const product = await ProductService.createProduct(req.body);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json({ message: (error as Error).message });
    }
  }
}

export default new ProductController();
