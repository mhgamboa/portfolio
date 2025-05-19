"use client";

import type React from "react";
import { useState } from "react";
import { Send } from "lucide-react";
import { z } from "zod";
import { sendEmail } from "@/app/action";
import { tryCatch } from "@/utils/trycatch";
import { formSchema, type FormData } from "@/lib/schemas";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

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

  const contactSection = useInView({ threshold: 0.2 });

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

  // Reset form state
  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setTouchedFields(new Set());
    setErrors({});
    setSubmitError(null);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate all form data with Zod
    try {
      formSchema.parse(formData);
      setIsSubmitting(true);
      setErrors({});

      const result = await tryCatch(sendEmail(formData));

      if (result.error) {
        // Handle different error scenarios
        const errorMessage = result.error.toString();
        if (errorMessage.includes("Failed to send email")) {
          setSubmitError("Unable to send your message. Please try again later.");
        } else {
          setSubmitError("Something went wrong. Please try again later.");
        }
        setIsSubmitting(false);
        return;
      }

      // Check for validation failure (data is null)
      if (result.data === null) {
        setSubmitError("Please check your form inputs and try again.");
        setIsSubmitting(false);
        return;
      }

      // Check for Resend API errors
      if (result.data?.error) {
        setSubmitError("Unable to send your message. Please try again later.");
        setIsSubmitting(false);
        return;
      }

      // Success case - we have data and no errors
      setIsSubmitting(false);
      setSubmitSuccess(true);
      resetForm();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      // Handle Zod validation errors
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach(err => {
          const field = err.path[0] as keyof FormData;
          fieldErrors[field] = err.message;
        });
        setErrors(fieldErrors);
        setTouchedFields(new Set(Object.keys(formData) as Array<keyof FormData>));
      } else {
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
    <motion.div
      className="mb-16"
      ref={contactSection.ref as any}
      initial={{ opacity: 0, y: 50 }}
      animate={contactSection.isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, type: "spring" }}
      id="contact-form"
    >
      <h2 className="text-xl font-black mb-6 text-center">Get In Touch</h2>
      <div className="border-4 border-black bg-white dark:bg-[#2a2a2a] p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
        {submitSuccess ? (
          <div className="text-center py-8">
            <div className="mb-4">
              <svg
                className="mx-auto h-12 w-12 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-black dark:text-white">
              Thanks for reaching out. I'll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {submitError && (
              <div
                className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-900/50 dark:text-red-400 flex items-start"
                role="alert"
              >
                <svg
                  className="w-5 h-5 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{submitError}</span>
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
              className="bg-[#69a1f0] hover:bg-[#5a92e1] text-black font-bold py-3 px-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:translate-x-0.5 transition-transform flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed w-full"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={16} className="ml-2" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}
