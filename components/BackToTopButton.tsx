'use client'
import { useState, useEffect } from 'react';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed px-2 py-2 border-2 border-pink-200 right-5 bottom-5 z-[1000] shadow-[0_0.008rem_1rem_-0.563rem_black] rounded-md button hover:border-zinc"
        aria-label="Back to Top"
      >
        <FontAwesomeIcon className="text-2xl" icon={faChevronCircleUp} />
      </button>
    )
  );
};
