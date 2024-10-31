import { useState, useRef, useEffect } from "react";

export const useAccordion = (itemsLength: number) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>(
    Array(itemsLength).fill(null),
  );
  const contentRefs = useRef<(HTMLDivElement | null)[]>(
    Array(itemsLength).fill(null),
  );

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

  return {
    openIndex,
    handleAccordionClick,
    buttonRefs,
    contentRefs,
  };
};
