"use client";
import { useState, useRef, useEffect } from "react";

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
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    buttonRefs.current.forEach((button, index) => {
      if (!button) return;
      if (openIndex === index) {
        setTimeout(() => button.classList.remove("init"), 500);
      } else {
        setTimeout(() => button.classList.add("init"), 500);
      }
    });

    contentRefs.current.forEach((content, index) => {
      if (!content) return;
      if (openIndex === index) {
        content.style.maxHeight = `${content.scrollHeight + 44}px`;
      } else {
        content.style.maxHeight = "0px";
      }
    });
    if (openIndex !== null && contentRefs.current[openIndex]) {
      contentRefs.current[openIndex]?.focus();
    }
  }, [openIndex]);

  return (
    <ul
      className="mb-12 max-w-[90%] rounded-lg leading-loose shadow-[#12121c_4px_4px_0_0]"
      aria-label={label}
    >
      {items.map((item, index) => (
        <li className="group" key={index}>
          <button
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
            className="accordion group peer w-full border-b border-solid border-[#e1d7ee] bg-pink-100 px-5 py-6 text-left text-lg font-medium leading-9 text-[#2d2b34] transition-all duration-500 ease-in-out group-first:rounded-t-lg group-last:rounded-b-lg group-last:border-b-0 aria-expanded:border-b-0"
            onClick={() => handleAccordionClick(index)}
            aria-expanded={openIndex === index ? "true" : "false"}
          >
            <div className="plus-minus mb-[0.063rem] mr-5 box-content rounded-[50%] bg-zinc p-3 text-xs text-pink-200 transition-all duration-200 ease-in-out before:w-[0.625rem] after:h-[0.625rem] group-hover:bg-purple-100 group-hover:text-zinc group-focus-visible:bg-purple-100 group-focus-visible:text-zinc group-aria-expanded:bg-purple-100 group-aria-expanded:text-zinc"></div>
            {item.question}
          </button>
          <div
            className={`overflow-hidden px-5 transition-all duration-500 ease-in-out ${openIndex === index ? "py-[0.125rem]" : "peer-[.init]:hidden"}`}
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
