import { Request, Response } from 'express';
import Goal from '../models/Goal';

export const getGoals = async (req: Request, res: Response) => {
  try {
    const goals = await Goal.find();
    res.json(goals);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const addGoal = async (req: Request, res: Response) => {
  const { title, amount } = req.body;
  try {
    const newGoal = new Goal({ title, amount });
    await newGoal.save();
    res.status(201).json(newGoal);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};


export const updateGoal = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, amount } = req.body;
  try {
    const updatedGoal = await Goal.findByIdAndUpdate(id, { title, amount }, { new: true });
    if (!updatedGoal) return res.status(404).json({ message: 'Goal not found' });
    res.json(updatedGoal);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const deleteGoal = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedGoal = await Goal.findByIdAndDelete(id);
    if (!deletedGoal) return res.status(404).json({ message: 'Goal not found' });
    res.json({ message: 'Goal deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
