const timeline = gsap.timeline({ defaults: { duration: 0.7 }})
timeline
  .from('.header', { y: '-100%', ease: 'power1' })
  .from('.link', { opacity: 0, stagger: .5 })
  .to('.footer', {  y: 0, ease: 'power1' })
  .from('.textos', { opacity: 0, stagger: .5})
  .from('.textoss', { opacity: 0, stagger: .5})