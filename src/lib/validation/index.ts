import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(3, {message:"The minimum is 3 charaters"}),
    username: z.string().min(3, {message:"The minimum is 3 charaters"}),
    email: z.string().email(),
    password: z.string().min(6, {message: "Pass word must be at least 6 characters"})
  })