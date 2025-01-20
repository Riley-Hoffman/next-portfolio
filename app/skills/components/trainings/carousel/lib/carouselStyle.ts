export const carouselStyle = async () => {
  await Promise.all([
    import('swiper/css'),
    import('swiper/css/navigation'),
    import('swiper/css/pagination'),
    import('../styles/custom-swiper.css'),
  ])
}
