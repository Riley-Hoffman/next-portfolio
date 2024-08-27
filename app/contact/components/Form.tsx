'use client';
import { useState } from 'react';
import { Legend } from './Legend';
import { FormField } from './FormField';
import { SubmitButton } from './SubmitButton';
import { useFormValidation } from '../hooks/useFormValidation';

export interface FormState {
    name: string;
    email: string;
    message: string;
}

export function Form() {
    const [formState, setFormState] = useState<FormState>({
        name: '',
        email: '',
        message: '',
    });
    
    const [submitClicked, setSubmitClicked] = useState(false);
    const errors = useFormValidation(formState);
    const { name, email, message } = formState;

    const handleChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: event.target.value,
        }));
        if (submitClicked) {
            setSubmitClicked(false);
        }
    };

    const handleSubmitClick = () => {
        setSubmitClicked(true);
    };

    return (
        <form className="max-w-screen-md pt-5 px-5 pb-10" action="https://formspree.io/f/xwkyonza" method="POST">
            <fieldset>
                <Legend />
                <div className="pb-5">
                    <div className="pb-3 relative md:flex md:justify-between md:items-center md:gap-5">
                        <FormField type="text" value={name} handleChange={handleChange} name="name" placeholder="Your name.." />
                        <br className="inline md:hidden" />
                        <br className="inline md:hidden" />
                        <FormField type="email" value={email} handleChange={handleChange} name="email" placeholder="Your email.." />
                        {submitClicked &&
                            <p className="sr-only" aria-live="polite">
                                {errors.name && <span>{errors.name}</span>}
                                {errors.email && <span>{errors.email}</span>}
                                {errors.message && <span>{errors.message}</span>}
                            </p>
                        }
                    </div>
                    <FormField type="textarea" value={message} handleChange={handleChange} name="message" placeholder="Your message.." />
                </div>
            </fieldset>
            <SubmitButton handleSubmitClick={handleSubmitClick} />
        </form>
    );
}
