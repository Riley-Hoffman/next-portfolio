const carouselButtonsBaseClasses =
  'hidden shadow-heading dark:shadow-gradientthree'

export const carouselButtonsConfig = [
  {
    label: 'Previous slide',
    className: `prev-btn left-4 shadow-[0.125rem_0.188rem_0_0] ${carouselButtonsBaseClasses}`,
    icon: 'raphael:arrowleft',
  },
  {
    label: 'Next slide',
    className: `next-btn right-4 shadow-[-0.125rem_0.188rem_0_0] ${carouselButtonsBaseClasses}`,
    icon: 'raphael:arrowright',
  },
]
