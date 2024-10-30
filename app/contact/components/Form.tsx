"use client";
import { useEffect } from "react";
import { useFormValidation } from "../hooks/useFormValidation";
import { Legend } from "./Legend";
import { FormField } from "./FormField";
import { SubmitButton } from "./SubmitButton";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface FormState {
  name: string;
  email: string;
  message: string;
}

export function Form() {
  const {
    formState,
    errors,
    handleChange,
    handleSubmitClick,
    handleSubmit,
    submitted,
  } = useFormValidation({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const generateCsrfToken = async () => {
      const response = await fetch("/api/csrf-token");
      const data = await response.json();
      if (data.token) {
        localStorage.setItem("csrf-token", data.token);
      }
    };

    generateCsrfToken();
  }, []);

  const { name, email, message } = formState;
  return (
    <form
      className="relative max-w-2xl px-5 pb-10 pt-5"
      onSubmit={handleSubmit}
    >
      <fieldset>
        <Legend />
        <div className="pb-5">
          <div className="relative pb-6 md:flex md:items-center md:justify-between md:gap-5">
            <FormField
              type="text"
              value={name}
              handleChange={handleChange}
              name="name"
              placeholder="Enter your name.."
            />
            <br className="inline md:hidden" />
            <br className="inline md:hidden" />
            <FormField
              type="email"
              value={email}
              handleChange={handleChange}
              name="email"
              placeholder="Enter your email.."
            />
          </div>
          <FormField
            type="textarea"
            value={message}
            handleChange={handleChange}
            name="message"
            placeholder="Enter your message.."
          />
        </div>
      </fieldset>
      {Object.values(errors).some((error) => error) && submitted && (
        <p
          className="absolute top-[-4rem] font-source-sans text-red-500"
          aria-live="polite"
        >
          <FontAwesomeIcon icon={faCircleExclamation} />
          &nbsp;&nbsp;
          {Object.values(errors).filter(Boolean).join(" ")}
        </p>
      )}
      <SubmitButton handleSubmitClick={handleSubmitClick} />
    </form>
  );
}
