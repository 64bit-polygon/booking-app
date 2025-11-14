import { z } from 'zod';
import { EMAIL, NAME } from '../constants';

export const bookingFormSchema = z.object({
  [NAME]: z.string().min(2, 'Name must be at least 2 characters'),
  [EMAIL]: z.email('Invalid email address'),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;