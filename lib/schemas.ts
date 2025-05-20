import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(5, { message: "Message must be at least 5 characters" }),
  turnstileToken: z.string().min(1, { message: "Please complete the security check" }),
});

export type FormData = z.infer<typeof formSchema>;
