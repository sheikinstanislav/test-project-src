gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".section-heading1", 1.5, {opacity: 0, y: '70px'}, {opacity: 1, y: '0'})

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "service",
  }
});

tl.fromTo(".service-item__img", 0.7, {opacity: 0, y: '70px'}, {opacity: 1, y: '0'})
  .fromTo(".service-item__title", 0.7, {opacity: 0, y: '70px'}, {opacity: 1, y: '0'})
  .fromTo(".service-item__desc", 0.7, {opacity: 0, y: '70px'}, {opacity: 1, y: '0'})
  .fromTo(".lightpaper-img", 1, {opacity: 0, y: '70px'}, {opacity: 1, y: '0'})
  .fromTo(".section-heading2", 1, {opacity: 0, y: '70px'}, {opacity: 1, y: '0'})
  .fromTo(".section-heading3", 1, {opacity: 0, y: '70px'}, {opacity: 1, y: '0'})
