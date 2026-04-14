import mongoose from 'mongoose';

const GoalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
});

export default mongoose.model('Goal', GoalSchema);
