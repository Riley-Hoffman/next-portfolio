import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const CarouselButtons = () => {
  const commonClasses = 'absolute top-1/2 transform -translate-y-1/2 bg-pink-100 rounded-full py-1 px-4 z-10 transition-shadow duration-400';
  return (
    <>
      <button aria-label="Previous slide" className={`prev-btn left-4 shadow-[#12121c_2px_3px_0_0,_inset_#12121c_0_0_0_0] hover:shadow-[#12121c_1px_1px_0_0,_inset_#12121c_0_0_0_0] focus-visible:shadow-[#12121c_1px_1px_0_0,_inset_#12121c_0_0_0_0] active:shadow-[#12121c_0_0_0_0,_inset_#12121c_1px_1px_3px_-1px] ${commonClasses}`}>
          <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button aria-label="Next slide" className={`next-btn right-4 shadow-[#12121c_-2px_3px_0_0] hover:shadow-[#12121c_-1px_1px_0_0,_inset_#12121c_0_0_0_0] focus-visible:shadow-[#12121c_-1px_1px_0_0,_inset_#12121c_0_0_0_0] active:shadow-[#12121c_0_0_0_0,inset_#12121c_-1px_1px_3px_-1px] ${commonClasses}`}>
          <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </>
  );
};
