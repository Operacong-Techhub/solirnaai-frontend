import z from "zod";

export const loginFormSchema = z.object({
    email: z.email("Enter a valid email address"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long"),
});


export const signupFormSchema = z.object({
    firstName: z.string().min(3, "First name must be at least 3 characters long"),
    lastName: z.string().min(3, "Last name must be at least 3 characters long"),
    email: z.email("Enter a valid email address"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long"),
})