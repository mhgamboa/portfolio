"use client";

import type React from "react";
import { useState } from "react";
import { Send } from "lucide-react";
import { z } from "zod";
import { sendEmail } from "@/app/action";
import { tryCatch } from "@/utils/trycatch";

// Define Zod schema for form validation
export const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(5, { message: "Message must be at least 5 characters" }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [touchedFields, setTouchedFields] = useState<Set<keyof FormData>>(new Set());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // If the field has been touched (blurred before), validate on change too
    if (touchedFields.has(name as keyof FormData)) {
      validateField(name as keyof FormData, value);
    }
  };

  // Validate a single field
  const validateField = (field: keyof FormData, value: string) => {
    try {
      // Create a partial schema for just this field
      const fieldSchema = z.object({ [field]: formSchema.shape[field] });
      fieldSchema.parse({ [field]: value });

      // Clear error for this field if validation passes
      setErrors(prev => ({ ...prev, [field]: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Set error for this field
        const fieldError = error.errors.find(err => err.path[0] === field);
        if (fieldError) {
          setErrors(prev => ({ ...prev, [field]: fieldError.message }));
        }
      }
    }
  };

  // Handle blur event
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;

    // Mark this field as touched
    setTouchedFields(prev => new Set(prev).add(fieldName));

    // Validate the field
    validateField(fieldName, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate all form data with Zod
    try {
      formSchema.parse(formData);
      // If validation passes, proceed with submission
      setIsSubmitting(true);
      setErrors({});

      // Simulate form submission
      const result = await tryCatch(sendEmail(formData));
      console.log(result);
      if (result.error) {
        setSubmitError(result.error.toString());
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTouchedFields(new Set());

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      // Handle Zod validation errors
      if (error instanceof z.ZodError) {
        // Convert Zod errors to a more usable format
        const fieldErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach(err => {
          const field = err.path[0] as keyof FormData;
          fieldErrors[field] = err.message;
        });
        setErrors(fieldErrors);

        // Mark all fields as touched
        setTouchedFields(new Set(Object.keys(formData) as Array<keyof FormData>));
      } else {
        // Handle unexpected errors
        setSubmitError(
          error instanceof Error
            ? error.message
            : "An unexpected error occurred. Please try again later."
        );
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mb-16" id="contact-form">
      <h2 className="text-xl font-black mb-6 text-center">Get In Touch</h2>
      <div className="border-4 border-black bg-white dark:bg-[#2a2a2a] p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
        {submitSuccess ? (
          <div className="text-center py-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">Message Sent!</h3>
            <p className="text-black dark:text-white">
              Thanks for reaching out. I'll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {submitError && (
              <div
                className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-900/50 dark:text-red-400"
                role="alert"
              >
                {submitError}
              </div>
            )}
            <div>
              <label htmlFor="name" className="block font-bold mb-1 text-black dark:text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full p-3 border-2 ${
                  errors.name ? "border-red-500" : "border-black"
                } bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#69a1f0]`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block font-bold mb-1 text-black dark:text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full p-3 border-2 ${
                  errors.email ? "border-red-500" : "border-black"
                } bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#69a1f0]`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block font-bold mb-1 text-black dark:text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={4}
                className={`w-full p-3 border-2 ${
                  errors.message ? "border-red-500" : "border-black"
                } bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#69a1f0]`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#69a1f0] hover:bg-[#5a92e1] text-black font-bold py-3 px-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:translate-x-0.5 transition-transform flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send size={16} className="ml-2" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
