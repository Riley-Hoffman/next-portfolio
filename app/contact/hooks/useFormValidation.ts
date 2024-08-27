import { useState, useEffect } from 'react';
import { FormState } from '../components/Form';

export function useFormValidation(formState: FormState) {
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    useEffect(() => {
        const validateForm = () => {
            const { name, email, message } = formState;
            let newErrors = { name: '', email: '', message: '' };

            if (name.trim() === '') newErrors.name = 'Please enter your name.';
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid email address.';
            if (message.trim() === '') newErrors.message = 'Please enter a message.';

            setErrors(newErrors);
        };

        validateForm();
    }, [formState]);

    return errors;
}
