"use server";

import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { formSchema, type FormData } from "@/lib/schemas";

export async function sendEmail(formData: FormData) {
  const validatedFields = formSchema.safeParse(formData);

  if (!validatedFields.success) return { data: null, error: "Invalid fields" };
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: "Marcus Gamboa <marcus@marcusgamboa.com>",
      to: [validatedFields.data.email, "marcus@marcusgamboa.com"],
      subject: "New Contact Form Submission",
      react: EmailTemplate({
        firstName: validatedFields.data.name,
        email: validatedFields.data.email,
        message: validatedFields.data.message,
      }),
    });

    return { data, error };
  } catch (error) {
    console.error(error);
    return { error: "Failed to send email" };
  }
}
