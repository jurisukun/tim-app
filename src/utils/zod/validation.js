import { z } from "zod";

export const ClientSchema = z.object({
  firstname: z.string(),
  middlename: z.string(),
  lastname: z.string(),
  relationship: z.string(),
  telephone: z.string(),
  email: z.string().email(),
  decname: z.string(),
  servicetype: z.array(z.string()),
  inquirystatus: z.string(),
  notes: z.array(z.array(z.string())),
  image_url: z.string(),
});

export const AccountSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  username: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string(),
  role: z.enum([
    "ADMIN",
    "EXECUTIVE",
    "OPERATIONS",
    "EMPLOYEE",
    "CLIENT",
    "OTHER",
  ]),
  image_url: z.string(),
});
