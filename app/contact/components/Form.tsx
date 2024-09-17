'use client';
import { useEffect } from 'react';
import { useFormValidation } from '../hooks/useFormValidation';
import { Legend } from './Legend';
import { FormField } from './FormField';
import { SubmitButton } from './SubmitButton';

export interface FormState {
    name: string;
    email: string;
    message: string;
}

export function Form() {
    const { formState, errors, formError, handleChange, handleSubmitClick, handleSubmit, submitted } = useFormValidation({
        name: '',
        email: '',
        message: '',
    });

    useEffect(() => {
        const generateCsrfToken = async () => {
            const response = await fetch('/api/csrf-token');
            const data = await response.json();
            if (data.token) {
                localStorage.setItem('csrf-token', data.token);
            }
        };
        
        generateCsrfToken();
    }, []);

    const { name, email, message } = formState;
    return (
        <form className="max-w-screen-md pt-5 px-5 pb-10" onSubmit={handleSubmit}>
            <fieldset>
                <Legend />
                <div className="pb-5">
                    <div className="pb-3 relative md:flex md:justify-between md:items-center md:gap-5">
                        <FormField type="text" value={name} handleChange={handleChange} name="name" placeholder="Your name.." />
                        <br className="inline md:hidden" />
                        <br className="inline md:hidden" />
                        <FormField type="email" value={email} handleChange={handleChange} name="email" placeholder="Your email.." />
                    </div>
                    <FormField type="textarea" value={message} handleChange={handleChange} name="message" placeholder="Your message.." />
                </div>
            </fieldset>
            {Object.values(errors).some(error => error) && submitted && (
                <p className="sr-only" aria-live="polite">
                    {errors.name && <span>{errors.name}</span>}
                    {errors.email && <span>{errors.email}</span>}
                    {errors.message && <span>{errors.message}</span>}
                </p>
            )}
            {formError && (
                <p className="text-red-500" aria-live="polite">
                    {formError}
                </p>
            )}
            <SubmitButton handleSubmitClick={handleSubmitClick} />
        </form>
    );
}
