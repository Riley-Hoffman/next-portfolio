'use client'
import { useState, useEffect } from 'react';
import { FormState } from '../components/Form';
import { useRouter } from 'next/navigation';

export function useFormValidation(initialState: FormState) {
    const [formState, setFormState] = useState(initialState);
    const [submitted, setSubmitted] = useState(false); 
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [formError, setFormError] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (submitted) {
            const validateForm = () => {
                const { name, email, message } = formState;
                let newErrors = { name: '', email: '', message: '' };
                if (name.trim() === '') newErrors.name = 'Please enter your name.';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid email address.';
                if (message.trim() === '') newErrors.message = 'Please enter a message.';
                setErrors(newErrors);
            };
            validateForm();
        }
    }, [formState, submitted]); 

    const handleChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: event.target.value,
        }));
        setSubmitted(false);
        setErrors({ name: '', email: '', message: '' });
        setFormError(''); 
    };

    const handleSubmitClick = () => {
        setSubmitted(true); 
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const csrfToken = localStorage.getItem('csrf-token');
        if (!csrfToken) {
            console.error('CSRF token is missing');
            return;
        }
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'csrf-token': csrfToken,
                },
                body: JSON.stringify(formState),
            });
            if (response.ok) {
                console.log('Form submitted successfully');
                router.push('/thank-you');
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('An error occurred', error);
        }
    };
    
    return {
        formState,
        errors,
        handleChange,
        handleSubmitClick,
        handleSubmit,
        submitted, 
        formError,
    };
}
