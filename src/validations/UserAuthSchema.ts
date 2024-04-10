import { z } from 'zod';

export const userRegisterationSchema = z.object({
  email: z.string({
    required_error: "Email is required",
  })
  .email("Invalid email"),

  firstName: z.string({
    required_error: "First name is required",
  })
  .min(3, { message: "First name must be at least 3 characters" })
  .max(50, { message: "First name cannot exceed 50 characters" }),
  
  lastName: z.string({
    required_error: "Last name is required",
  })
  .min(3, { message: "Last name must be at least 3 characters" })
  .max(50, { message: "Last name cannot exceed 25 characters" }),

  password: z.string({
    required_error: "Password is required",
  })
  .min(6, "Password must be at least 6 characters")
  .max(30, "Password cannot exceed 30 characters")
  .regex(/(?=.*[a-z])/, "Password must contain at least one lowercase letter")
  .regex(/(?=.*[A-Z])/, "Password must contain at least one uppercase letter")
  .regex(/(?=.*[0-9])/, "Password must contain at least one digit")
  .regex(/(?=.*[!@#$%^&*])/, "Password must contain at least one special character"),
  confirmPassword: z.string({
    required_error: "Confirm password is required",
  })
  .min(6, "Confirm password must be at least 6 characters")
  .max(30, "Confirm password cannot exceed 30 characters"),
  
  profileImage: z.string().optional()


}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})

export type UserRegisterationType = z.infer<typeof userRegisterationSchema>


export const userLoginSchema = z.object({
  email: z.string({
    required_error: "Email is required",
  })
  .email("Invalid email"),

  password: z.string({
    required_error: "Password is required",
  })
})

export type UserLoginType = z.infer<typeof userLoginSchema>


