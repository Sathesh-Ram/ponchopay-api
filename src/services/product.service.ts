import Product from '../models/product.model';

/**
 * ProductService is responsible for managing the product-related business logic.
 * It communicates directly with the Product model.
 */
class ProductService {
  /**
   * Fetches all products available in the database.
   * @returns List of all products.
   */
  async getAllProducts() {
    return Product.findAll();
  }

  /**
   * Creates a new product in the database.
   * @param productData Object containing the new product details.
   * @returns The newly created product.
   */
  async createProduct(productData: { name: string; description: string; price: number; stock_level: number }) {
    return Product.create(productData);
  }
}

export default new ProductService();
