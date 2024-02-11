import { z } from "zod";

export const ClientSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  relationship: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  address: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  zip: z.string().min(1),
  country: z.string().min(1),
  dob: z.string().min(1),
});

export const AccountSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  username: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(1),
  confirmPassword: z.string(),
  type: z.string().min(1),
});
