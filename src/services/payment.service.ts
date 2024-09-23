import Payment from '../models/payment.model';
import Product from '../models/product.model';

/**
 * PaymentService is responsible for handling the business logic of payments.
 */
class PaymentService {
  /**
   * Creates a new payment in the system.
   * Validates the stock level of the product before proceeding.
   * @param paymentData Payment information (productId, amount, userId, paymentMethod).
   * @throws Error if the product is out of stock or does not exist.
   * @returns The created payment.
   */
  async createPayment(paymentData: { productId: number; amount: number; userId: number; payment_method: string }) {
    // Find the product by ID
    const product = await Product.findByPk(paymentData.productId);
    if (!product) throw new Error('Product not found');

    // Check if the product is in stock
    if (product.stock_level <= 0) throw new Error('Product is out of stock');

    // Reduce the stock level by 1 since I am making a payment
    product.stock_level -= 1;
    await product.save();

    // Create the payment
    const payment = await Payment.create({
      amount: paymentData.amount,
      status: 'initialized',
      productId: paymentData.productId,
      userId: paymentData.userId,
      payment_method: paymentData.payment_method,
    });

    return payment;
  }

  /**
   * Updates the payment's status, enforcing correct progression.
   * @param paymentId ID of the payment to update.
   * @param status New status of the payment.
   * @returns The updated payment.
   */
  async updateStatus(paymentId: string, status: string) {
    const validStatuses = ['initialized', 'user_set', 'payment_taken', 'complete'];
    const payment = await Payment.findByPk(paymentId);
    if (!payment) throw new Error('Payment not found');

    const currentStatusIndex = validStatuses.indexOf(payment.status);
    const newStatusIndex = validStatuses.indexOf(status);
    if (newStatusIndex <= currentStatusIndex) throw new Error('Invalid status progression');

    payment.status = status;
    return payment.save();
  }

  /**
   * Fetches all payments from the system.
   * @returns A list of all payments.
   */
  async getAllPayments() {
    return Payment.findAll();
  }

  /**
   * Filters payments by status.
   * @param status Payment status to filter by.
   * @returns A list of payments filtered by the given status.
   */
  async getPaymentsByStatus(status: string) {
    return Payment.findAll({
      where: { status },
    });
  }

  /**
   * Returns the total amount of all completed payments.
   * @returns The total amount of all completed payments.
   */
  async getTotalOfCompletedPayments() {
    return Payment.sum('amount', { where: { status: 'complete' } });
  }
}

export default new PaymentService();
