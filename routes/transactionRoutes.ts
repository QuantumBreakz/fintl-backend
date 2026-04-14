import express from 'express';
import { getTransactions, addTransaction, getIncome, getExpenses, updateTransaction, deleteTransaction } from '../controllers/transactionController';
import { validate } from '../middleware/validate';
import { transactionSchema } from '../schemas/schemas';

const router = express.Router();

router.get('/', getTransactions);
router.post('/', validate(transactionSchema), addTransaction);
router.get('/income', getIncome);
router.get('/expenses', getExpenses);
router.put('/:id', validate(transactionSchema), updateTransaction);
router.delete('/:id', deleteTransaction);

export default router;
