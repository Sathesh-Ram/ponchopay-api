import { Router } from 'express';
import PaymentController from '../controllers/payment.controller';

const router = Router();

/**
 * Route to create a payment.
 * POST /api/payments
 */
router.post('/payments', PaymentController.createPayment);

/**
 * Route to update payment status.
 * PUT /api/payments/:id/status
 */
router.put('/payments/:id/status', PaymentController.updatePaymentStatus);

/**
 * Route to list all payments.
 * GET /api/payments
 */
router.get('/payments', PaymentController.getPayments);

/**
 * Route to filter payments by status.
 * GET /api/payments?status=<status>
 */
router.get('/payments', PaymentController.filterPaymentsByStatus);

/**
 * Route to get the total amount of all completed payments.
 * GET /api/payments/total
 */
router.get('/payments/total', PaymentController.getTotalCompletedPayments);

export default router;
