"use client";
import { useState, useEffect } from "react";
import { FormState } from "../components/Form";

export const useFormValidation = (initialState: FormState) => {
  const [formState, setFormState] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    if (submitted) {
      const validateForm = () => {
        const { name, email, message } = formState;
        let newErrors = { name: "", email: "", message: "" };
        if (name.trim() === "") newErrors.name = "Please enter your name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
          newErrors.email = "Please enter a valid email address.";
        if (message.trim() === "")
          newErrors.message = "Please enter a message.";
        setErrors(newErrors);
      };
      validateForm();
    }
  }, [formState, submitted]);

  const handleChange =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((prevState) => ({
        ...prevState,
        [field]: event.target.value,
      }));
      setSubmitted(false);
      setErrors({ name: "", email: "", message: "" });
    };

  const handleSubmitClick = () => {
    setSubmitted(true);
  };

  return {
    formState,
    errors,
    handleChange,
    handleSubmitClick,
    submitted,
  };
}
