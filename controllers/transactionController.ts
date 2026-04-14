import { Request, Response } from 'express';
import Transaction from '../models/Transaction';

export const getTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const addTransaction = async (req: Request, res: Response) => {
  const { description, amount } = req.body;
  try {
    const newTransaction = new Transaction({ description, amount });
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getIncome = async (req: Request, res: Response) => {
  try {
    const income = await Transaction.find({ amount: { $gt: 0 } });
    res.json(income);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getExpenses = async (req: Request, res: Response) => {
  try {
    const expenses = await Transaction.find({ amount: { $lt: 0 } });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};


export const updateTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, amount, date } = req.body;
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(id, { description, amount, date }, { new: true });
    if (!updatedTransaction) return res.status(404).json({ message: 'Transaction not found' });
    res.json(updatedTransaction);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const deleteTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedTransaction = await Transaction.findByIdAndDelete(id);
    if (!deletedTransaction) return res.status(404).json({ message: 'Transaction not found' });
    res.json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
