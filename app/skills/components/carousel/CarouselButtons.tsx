import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

export const CarouselButtons = () => {
  const commonClasses =
    "absolute top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-pink-100 px-4 py-1 transition-shadow active:shadow-none"
  return (
    <>
      <button
        aria-label="Previous slide"
        className={`prev-btn left-4 shadow-[#12121c_0.125rem_0.188rem_0_0,_inset_#12121c_0_0_0_0] hover:shadow-[#12121c_0.063rem_0.063rem_0_0,_inset_#12121c_0_0_0_0] focus-visible:shadow-[#12121c_0.063rem_0.063rem_0_0,_inset_#12121c_0_0_0_0] ${commonClasses}`}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        aria-label="Next slide"
        className={`next-btn right-4 shadow-[#12121c_-0.125rem_0.188rem_0_0] hover:shadow-[#12121c_-0.063rem_0.063rem_0_0,_inset_#12121c_0_0_0_0] focus-visible:shadow-[#12121c_-0.063rem_0.063rem_0_0,_inset_#12121c_0_0_0_0] ${commonClasses}`}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </>
  )
}
