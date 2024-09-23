import PaymentService from './payment.service';
import Payment from '../models/payment.model';
import Product from '../models/product.model';

// Only mock Sequelize methods (findByPk, create), not the entire model
jest.spyOn(Product, 'findByPk').mockImplementation();
jest.spyOn(Payment, 'create').mockImplementation();

describe('PaymentService', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear all mocks before each test
  });

  it('should create a payment when stock is available', async () => {
    const product = { id: 1, stock_level: 10, save: jest.fn() };
    const paymentData = { productId: 1, amount: 100, userId: 1, payment_method: 'credit card' };

    const expectedPaymentData = { ...paymentData, status: 'initialized' };

    // Mock the Sequelize methods
    (Product.findByPk as jest.Mock).mockResolvedValue(product);
    (Payment.create as jest.Mock).mockResolvedValue(expectedPaymentData);

    const result = await PaymentService.createPayment(paymentData);

    expect(result).toEqual(expectedPaymentData); 
    expect(Product.findByPk).toHaveBeenCalledWith(1);
    expect(Product.findByPk).toHaveBeenCalledTimes(1);
    expect(Payment.create).toHaveBeenCalledWith(expectedPaymentData);
  });

  it('should throw an error if the product is out of stock', async () => {
    (Product.findByPk as jest.Mock).mockResolvedValue({ stock_level: 0 });

    const paymentData = { productId: 1, amount: 100, userId: 1, payment_method: 'credit card' };

    await expect(PaymentService.createPayment(paymentData)).rejects.toThrow('Product is out of stock');
  });
});
