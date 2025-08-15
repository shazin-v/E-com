import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
});

export const signupSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    terms: z.literal(true).refine(() => true, {
        message: "You must agree to the terms and conditions",
    }),
});

export const forgotPasswordSchema = z.object({
    email: z.string().email("Invalid email address"),
});

export const otpSchema = z.object({
    otp: z.string().length(6, "OTP must be exactly 6 digits"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type SignupSchema = z.infer<typeof signupSchema>;
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
export type OtpSchema = z.infer<typeof otpSchema>;
