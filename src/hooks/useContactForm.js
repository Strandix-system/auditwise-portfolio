// hooks/useContactForm.js
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { submitContactForm } from "../api/contactApi";

// ─── Yup Validation Schema ───────────────────────────────────────────────────

const contactSchema = yup.object({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name must be at most 60 characters")
    .required("Name is required"),

  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  contact: yup
    .string()
    .matches(/^\+?[0-9\s\-()]{7,15}$/, "Please enter a valid phone number")
    .required("Contact number is required"),

  additionalInfo: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be at most 1000 characters")
    .required("Message is required"),
});

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      additionalInfo: "",
    },
  });

  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      reset(); // Clear form on success
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return {
    register,
    errors,
    onSubmit,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    errorMessage: mutation.error?.message,
  };
}
