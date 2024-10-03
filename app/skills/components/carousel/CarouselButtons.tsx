import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const CarouselButtons = () => {
  const commonClasses = 'absolute top-1/2 transform -translate-y-1/2 bg-pink-100 rounded-full py-1 px-4 shadow-lg border border-zinc z-10 hover:bg-pink-100 hover:border-purple-200 hover:text-purple-200 focus-visible:bg-pink-100 focus-visible:border-purple-200 focus-visible:text-purple-200';
  return (
    <>
      <button aria-label="Previous slide" className={`prev-btn left-4 ${commonClasses}`}>
          <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button aria-label="Next slide" className={`next-btn right-4 ${commonClasses}`}>
          <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </>
  );
};
