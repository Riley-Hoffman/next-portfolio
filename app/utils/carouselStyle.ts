export const carouselStyle = () =>
  Promise.all([
    import('swiper/css'),
    import('swiper/css/navigation'),
    import('swiper/css/pagination'),
  ])
