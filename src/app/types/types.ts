import { z } from "zod";

export const formTypes = z
    .object({
        socialSecurityNumber: z.string().min(9).max(9),
        firstName: z.string().min(2).max(50),
        lastName: z.string().min(2).max(50),
        dateOfBirth: z.string().refine((date) => { return new Date(date) < new Date() }, { message: "Date of Birth must be in the past" }),
        email: z.string().email().or(z.string().max(0))
    })

export type formSchema = z.infer<typeof formTypes>;