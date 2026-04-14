import { Request, Response } from 'express';
import Budget from '../models/Budget';

export const getBudgets = async (req: Request, res: Response) => {
  try {
    const budgets = await Budget.find();
    res.json(budgets);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const addBudget = async (req: Request, res: Response) => {
  const { category, amount } = req.body;
  try {
    const newBudget = new Budget({ category, amount });
    await newBudget.save();
    res.status(201).json(newBudget);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};


export const updateBudget = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { category, amount } = req.body;
  try {
    const updatedBudget = await Budget.findByIdAndUpdate(id, { category, amount }, { new: true });
    if (!updatedBudget) return res.status(404).json({ message: 'Budget not found' });
    res.json(updatedBudget);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const deleteBudget = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedBudget = await Budget.findByIdAndDelete(id);
    if (!deletedBudget) return res.status(404).json({ message: 'Budget not found' });
    res.json({ message: 'Budget deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
