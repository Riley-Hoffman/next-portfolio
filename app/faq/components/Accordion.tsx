'use client';
import { useState, useRef, useEffect } from 'react';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type AccordionItem = {
    question: string;
    answer: React.ReactElement;
};

type AccordionProps = {
    items: AccordionItem[];
    label: string;
};

export default function Accordion({ items, label }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleAccordionClick = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    useEffect(() => {
        if (openIndex !== null && contentRefs.current[openIndex]) {
            contentRefs.current[openIndex]?.focus();
        }
    }, [openIndex]);

    return (
        <ul className="pb-12 leading-loose" aria-label={label}>
            {items.map((item, index) => (
                <li className="group" key={index}>
                    <button 
                        className="w-full py-6 px-5 bg-pink-100 text-left font-medium text-[#2d2b34] border-b border-solid border-[#e1d7ee] text-lg transition-all duration-500 ease-in-out aria-expanded:border-b-0 group-last:border-b-0 group peer"
                        onClick={() => handleAccordionClick(index)}
                        aria-expanded={openIndex === index ? "true" : "false"}
                    >   
                        <FontAwesomeIcon 
                            className="p-2 mr-5 box-content text-xs text-pink-200 bg-zinc rounded-[50%] transition-all duration-200 ease-in-out group-hover:text-zinc group-focus-visible:text-zinc group-aria-expanded:text-zinc group-hover:bg-purple-100 group-focus-visible:bg-purple-100 group-aria-expanded:bg-purple-100" 
                            icon={openIndex === index ? faMinus : faPlus}  
                        />
                        {item.question}
                    </button>
                    <div 
                        className="px-5 transition-all duration-500 ease-in-out [&>*]:hidden peer-aria-expanded:[&>*]:block peer-aria-expanded:m-b-4 peer-aria-expanded:py-[0.125rem]"
                        tabIndex={-1}
                        ref={(el) => {
                            contentRefs.current[index] = el;
                        }}
                    >
                        {item.answer}
                    </div>
                </li>
            ))}
        </ul>
    );
}