import ProductService from './product.service';
import Product from '../models/product.model';

jest.mock('../models/product.model');

describe('ProductService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new product', async () => {
    const productData = {
      name: 'Test Product',
      description: 'Test Description',
      price: 10,
      stock_level: 100,
    };

    (Product.create as jest.Mock).mockResolvedValue(productData);

    const result = await ProductService.createProduct(productData);

    expect(result).toEqual(productData);
    expect(Product.create).toHaveBeenCalledWith(productData);
  });
});
