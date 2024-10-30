"use client";
import { usePathname } from "next/navigation";
import { useState, useRef, useCallback, useEffect } from "react";

interface HamburgerProps {
  expanded?: (isExpanded: boolean) => void;
}

export const Hamburger = ({ expanded }: HamburgerProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const location = usePathname();

  const updateAttributes = useCallback((newIsExpanded: boolean) => {
    if (hamburgerRef.current) {
      const { current: hamburgerElement } = hamburgerRef;
      hamburgerElement.setAttribute("aria-expanded", newIsExpanded.toString());
    }
  }, []);

  const toggleMenu = useCallback(() => {
    setIsExpanded((prevState) => {
      const newIsExpanded = !prevState;
      updateAttributes(newIsExpanded);
      expanded?.(newIsExpanded);
      return newIsExpanded;
    });
  }, [updateAttributes, expanded]);

  const handleResize = useCallback(() => {
    if (window.innerWidth > 700 && isExpanded) {
      setIsExpanded(false);
      updateAttributes(false);
      expanded?.(false);
    }
  }, [isExpanded, updateAttributes, expanded]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    setIsExpanded(false);
    updateAttributes(false);
  }, [location, updateAttributes]);

  return (
    <>
      <button
        id="hamburger"
        aria-expanded={isExpanded}
        aria-label={isExpanded ? "Close Menu" : "Open Menu"}
        onClick={toggleMenu}
        ref={hamburgerRef}
        className="hamburger group peer relative ml-auto block h-10 w-16 px-5 md:hidden"
      >
        {[...Array(4)].map((_, index) => (
          <span
            key={index}
            className="line gradient-border absolute top-4 block w-7 rotate-0 border-2 border-solid brightness-90 transition-all duration-200 ease-in-out first:top-2 last:top-6 group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:left-[15px] group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:top-[21px] group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:w-0 group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:border-0 group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:transition-none group-aria-expanded:[&:nth-child(2)]:rotate-45 group-aria-expanded:[&:nth-child(3)]:-rotate-45"
          ></span>
        ))}
      </button>
      <button
        className="closer fixed inset-0 hidden h-full w-full cursor-default peer-aria-expanded:block"
        onClick={toggleMenu}
        aria-hidden="true"
      ></button>
      <noscript>
        <style>{`.hamburger { display: none; }`}</style>
      </noscript>
    </>
  );
};
