import { NextResponse } from "next/server";
import { Resend } from "resend";
import Confirm from "@/components/email/Confirm";

const resend = new Resend(process.env.RESEND);

export async function POST(request: Request) {
  const { name, message, email } = await request.json();

  await resend.emails.send({
    from: "marcus@marcusgamboa.com",
    to: [email, "marcus@marcusgamboa.com"],
    subject: "I've got your message! 😁",
    react: Confirm({ name, message }),
  });

  return NextResponse.json({ status: "OK" });
}
