import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { z } from "zod";
import { formSchema } from "@/components/contact-form";

type FormData = z.infer<typeof formSchema>;

export async function sendEmail(formData: FormData) {
  const validatedFields = formSchema.safeParse(formData);
  // console.log("process.env.RESEND_API_KEY", process.env.RESEND_API_KEY);

  if (!validatedFields.success) return { data: null, error: "Invalid fields" };
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "New Contact Form Submission",
      react: EmailTemplate({
        firstName: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });
    return { data, error };
  } catch (error) {
    console.error(error);
    return { error: "Failed to send email" };
  }
}
