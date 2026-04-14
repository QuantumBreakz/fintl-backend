import { z } from 'zod';

export const registerSchema = z.object({
  body: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  })
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
  })
});

export const transactionSchema = z.object({
  body: z.object({
    description: z.string().min(1, 'Description is required'),
    amount: z.number(),
    category: z.string().optional(),
    date: z.string().optional(),
  })
});
