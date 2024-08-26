'use client';
import { useState, useRef } from 'react';
import { Legend } from './Legend';
import { Label } from './Label';
import { NameInput } from './NameInput';
import { EmailInput } from './EmailInput';
import { MessageTextarea } from './MessageTextarea';
import { SubmitButton } from './SubmitButton';
import { useValidateEmail } from '../hooks/useValidateEmail';

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
    const errorMessageRef = useRef<HTMLParagraphElement>(null);

    const { name, email, message } = formState;
    const emailIsValid = useValidateEmail(email);
    const nameIsValid = name.length > 0;
    const messageIsValid = message.length > 0;

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
        if (!nameIsValid || !emailIsValid || !messageIsValid) {
            setTimeout(() => {
                errorMessageRef.current?.focus();
            }, 300);
        }
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
                        {(!nameIsValid || !emailIsValid || !messageIsValid) && submitClicked &&
                            <p className="sr-only" tabIndex={-1} ref={errorMessageRef}>
                                {(!nameIsValid) && <span>Please enter your name.</span>}
                                {(!emailIsValid) && <span>Please enter a valid email address.</span>}
                                {(!messageIsValid) && <span>Please enter a message.</span>}
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
