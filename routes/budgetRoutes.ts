import express from 'express';
import { getBudgets, addBudget, updateBudget, deleteBudget } from '../controllers/budgetController';

const router = express.Router();

router.get('/', getBudgets);
router.post('/', addBudget);
router.put('/:id', updateBudget);
router.delete('/:id', deleteBudget);

export default router;
