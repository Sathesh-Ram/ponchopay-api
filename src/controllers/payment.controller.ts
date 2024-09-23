import { Request, Response } from 'express';
import PaymentService from '../services/payment.service';

/**
 * PaymentController handles all HTTP requests related to payments.
 */
class PaymentController {
  /**
   * Handles POST request to create a new payment.
   * @param req Express request object.
   * @param res Express response object.
   */
  async createPayment(req: Request, res: Response) {
    try {
      const payment = await PaymentService.createPayment(req.body);
      // Ensure the payment object is returned
      return res.status(201).json(payment);
    } catch (error) {
      return res.status(500).json({ message: (error as Error).message });
    }
  }

  /**
   * Handles PUT request to update payment status.
   * @param req Express request object.
   * @param res Express response object.
   */
  async updatePaymentStatus(req: Request, res: Response) {
    try {
      const payment = await PaymentService.updateStatus(req.params.id, req.body.status);
      return res.status(200).json(payment);
    } catch (error) {
      return res.status(500).json({ message: (error as Error).message });
    }
  }

  /**
   * Handles GET request to fetch all payments.
   * @param req Express request object.
   * @param res Express response object.
   */
  async getPayments(req: Request, res: Response) {
    try {
      const payments = await PaymentService.getAllPayments();
      return res.status(200).json(payments);
    } catch (error) {
      return res.status(500).json({ message: (error as Error).message });
    }
  }

  /**
   * Handles GET request to filter payments by status.
   * If status is provided in query params, it filters payments by that status.
   * @param req Express request object.
   * @param res Express response object.
   */
  async filterPaymentsByStatus(req: Request, res: Response) {
    try {
      const status = req.query.status as string;
      const payments = await PaymentService.getPaymentsByStatus(status);
      return res.status(200).json(payments);
    } catch (error) {
      return res.status(500).json({ message: (error as Error).message });
    }
  }

  /**
   * Handles GET request to return the total amount of all completed payments.
   * @param req Express request object.
   * @param res Express response object.
   */
  async getTotalCompletedPayments(req: Request, res: Response) {
    try {
      const total = await PaymentService.getTotalOfCompletedPayments();
      return res.status(200).json({ total });
    } catch (error) {
      return res.status(500).json({ message: (error as Error).message });
    }
  }
}

export default new PaymentController();