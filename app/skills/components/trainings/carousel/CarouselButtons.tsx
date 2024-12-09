import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

export const CarouselButtons = () => {
  return (
    <>
      <button
        aria-label="Previous slide"
        className={`prev-btn left-4 shadow-[#12121c_0.125rem_0.188rem_0_0] dark:shadow-[#edede3_0.125rem_0.188rem_0_0]`}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        aria-label="Next slide"
        className={`next-btn right-4 shadow-[#12121c_-0.125rem_0.188rem_0_0] dark:shadow-[#edede3_-0.125rem_0.188rem_0_0]`}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </>
  )
}
