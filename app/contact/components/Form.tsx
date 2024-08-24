'use client';
import { useState, useRef } from 'react';
import useValidateEmail from '../hooks/useValidateEmail';

interface FormState {
    name: string;
    email: string;
    message: string;
}

export default function Form() {
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
                <legend className="sr-only">Contact Info</legend>
                <div className="pb-5">
                    <div className="pb-3 relative md:flex md:justify-between md:items-center md:gap-5">
                        <label className="inline-block text-xl my-4" htmlFor="name">Name:</label>
                        <input className="w-full p-2 border-2 bg-[#f8f3f9] rounded-sm font-source-sans text-lg gradient-border contrast-more:bg-white" enterKeyHint="next" id="name" name="name" placeholder="Your name.." type="text" required value={name} onChange={handleChange('name')} />
                        <br className="inline md:hidden" />
                        <br className="inline md:hidden" />
                        <label className="inline-block text-xl my-4" htmlFor="email">Email:</label>
                        <input className="w-full p-2 border-2 bg-[#f8f3f9] rounded-sm font-source-sans text-lg gradient-border contrast-more:bg-white" enterKeyHint="next" id="email" name="email" placeholder="Your email.." type="email" required value={email} onChange={handleChange('email')} />
                        {(!nameIsValid || !emailIsValid || !messageIsValid) && submitClicked &&
                            <p className="sr-only" tabIndex={-1} ref={errorMessageRef}>
                                {(!nameIsValid) && <span>Please enter your name. </span>}
                                {(!emailIsValid) && <span>Please enter a valid email address. </span>}
                                {(!messageIsValid) && <span>Please enter a message.</span>}
                            </p>
                        }
                    </div>
                    <label className="inline-block text-xl my-4" htmlFor="message">Message:</label>
                    <textarea className="w-full p-2 border-2 bg-[#f8f3f9] rounded-sm font-source-sans text-lg gradient-border contrast-more:bg-white" id="message" name="message" placeholder="Write me a message.." spellCheck={true} rows={8} required value={message} onChange={handleChange('message')} ></textarea>
                </div>
            </fieldset>
            <button type="submit" className="p-3 button" onClick={handleSubmitClick}>
                Submit
            </button>
        </form>
    );
}