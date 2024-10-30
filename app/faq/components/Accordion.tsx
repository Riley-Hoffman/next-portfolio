'use client';
import { useState, useRef, useEffect } from 'react';

type AccordionItem = {
    question: string;
    answer: React.ReactElement;
};

type AccordionProps = {
    items: AccordionItem[];
    label: string;
};

export function Accordion({ items, label }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleAccordionClick = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    useEffect(() => { 
        buttonRefs.current.forEach((button, index) => {
            if (!button) return;
            if (openIndex === index) {
                setTimeout(() => button.classList.remove('init'), 500);
            } else {
                setTimeout(() => button.classList.add('init'), 500);
            }
        });     
        
        contentRefs.current.forEach((content, index) => {
            if (!content) return;

            if (openIndex === index) {
                content.style.maxHeight = `${content.scrollHeight + 44}px`;
            } else {
                content.style.maxHeight = '0px';
            }
        });
        if (openIndex !== null && contentRefs.current[openIndex]) {
            contentRefs.current[openIndex]?.focus();
        }
    }, [openIndex]);

    return (
        <ul className="max-w-[90%] mb-12 shadow-[#12121c_4px_4px_0_0] rounded-lg leading-loose" aria-label={label}>
            {items.map((item, index) => (
                <li className="group" key={index}>
                    <button ref={(el) => { buttonRefs.current[index] = el;}} className="w-full py-6 px-5 bg-pink-100 text-left font-medium text-[#2d2b34] border-b border-solid border-[#e1d7ee] text-lg leading-9 transition-all duration-500 ease-in-out group-first:rounded-t-lg group-last:rounded-b-lg accordion aria-expanded:border-b-0 group-last:border-b-0 group peer" onClick={() => handleAccordionClick(index)} aria-expanded={openIndex === index ? "true" : "false"} >   
                        <div className="p-3 mr-5  mb-[0.063rem] box-content text-xs text-pink-200 bg-zinc rounded-[50%] transition-all duration-200 ease-in-out group-hover:text-zinc group-focus-visible:text-zinc group-aria-expanded:text-zinc group-hover:bg-purple-100 group-focus-visible:bg-purple-100 group-aria-expanded:bg-purple-100 plus-minus after:h-[0.625rem] before:w-[0.625rem]"></div>
                        {item.question}
                    </button>
                    <div className={`px-5 transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'py-[0.125rem]' : 'peer-[.init]:hidden'}`} style={{ maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : 'initial' }} tabIndex={-1} ref={(el) => { contentRefs.current[index] = el; }} >
                        {item.answer}
                    </div>
                </li>
            ))}
        </ul>
    );
}