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
        buttonRefs.current.forEach((button) => {
            if (button) {
                button.classList.add('init');
            }
        });     
        const peers = document.querySelectorAll('.peer.accordion');
        peers.forEach(peer => {
            const isExpanded = peer.getAttribute('aria-expanded') === 'true';
            if (peer.classList.contains('init') && !isExpanded) {
                let nextSibling = peer.nextElementSibling!.firstElementChild;
                while (nextSibling) {
                    nextSibling.classList.add('hidden');
                    nextSibling = nextSibling.nextElementSibling;
                }
            }
        });   
        if (openIndex !== null && contentRefs.current[openIndex]) {
            contentRefs.current[openIndex]?.focus();
        }
    }, [openIndex]);

    return (
        <ul className="pb-12 leading-loose" aria-label={label}>
            {items.map((item, index) => (
                <li className="group" key={index}>
                    <button ref={(el) => { buttonRefs.current[index] = el;}} className="w-full py-6 px-5 bg-pink-100 text-left font-medium text-[#2d2b34] border-b border-solid border-[#e1d7ee] text-lg leading-9 transition-all duration-500 ease-in-out accordion aria-expanded:border-b-0 group-last:border-b-0 group peer" onClick={() => handleAccordionClick(index)} aria-expanded={openIndex === index ? "true" : "false"} >   
                        <div className="p-3 mr-5  mb-[0.063rem] box-content text-xs text-pink-200 bg-zinc rounded-[50%] transition-all duration-200 ease-in-out group-hover:text-zinc group-focus-visible:text-zinc group-aria-expanded:text-zinc group-hover:bg-purple-100 group-focus-visible:bg-purple-100 group-aria-expanded:bg-purple-100 plus-minus after:h-[0.625rem] before:w-[0.625rem]"></div>
                        {item.question}
                    </button>
                    <div className="px-5 transition-all duration-500 ease-in-out peer-aria-expanded:[&>*]:block peer-aria-expanded:m-b-4 peer-aria-expanded:py-[0.125rem]" tabIndex={-1} ref={(el) => { contentRefs.current[index] = el; }} >
                        {item.answer}
                    </div>
                </li>
            ))}
        </ul>
    );
}