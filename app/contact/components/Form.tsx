'use client';
import { useState } from 'react';
import { Legend } from './Legend';
import { Label } from './Label';
import { NameInput } from './NameInput';
import { EmailInput } from './EmailInput';
import { MessageTextarea } from './MessageTextarea';
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
                        <Label label="name" />
                        <NameInput name={name} handleChange={handleChange} />
                        <br className="inline md:hidden" />
                        <br className="inline md:hidden" />
                        <Label label="email" />
                        <EmailInput email={email} handleChange={handleChange} />
                        {submitClicked &&
                            <p className="sr-only" aria-live="polite">
                                {errors.name && <span>{errors.name}</span>}
                                {errors.email && <span>{errors.email}</span>}
                                {errors.message && <span>{errors.message}</span>}
                            </p>
                        }
                    </div>
                    <Label label="message" />
                    <MessageTextarea message={message} handleChange={handleChange} />
                </div>
            </fieldset>
            <SubmitButton handleSubmitClick={handleSubmitClick} />
        </form>
    );
}
