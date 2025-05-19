import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({ firstName, email, message }: EmailTemplateProps) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>
      From: {firstName} ({email})
    </p>
    <p>Message:</p>
    <p>{message}</p>
  </div>
);
