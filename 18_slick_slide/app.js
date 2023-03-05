$(function () {
  $('.slide_01').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
  })

  $('.slide_02').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
  })

  //   scroll reveal
  ScrollReveal().reveal('.img_01', {
    distance: '100px',
    origin: 'left',
  })

  ScrollReveal().reveal('.img_02', {
    distance: '100px',
    origin: 'right',
    delay: 300,
  })

  ScrollReveal().reveal('.img_03', {
    distance: '100px',
    origin: 'bottom',
  })

  ScrollReveal().reveal('.img_04', {
    distance: '100px',
    origin: 'top',
  })
})
