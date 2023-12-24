let cursor = gsap.to('.cursor', {
    opacity: 0,
    ease: "power2.inOut",
    repeat: -1
})

let tl = gsap.timeline();

tl.to('.banner-text-1', {
    duration: 1,
    text: 'Mening ismim'
}).to('.name', {
    duration: 1,
    text: 'Izzatbek.'
}).to('.banner-text-2', {
    duration: 1,
    text: 'Men php backend dasturchisiman.'
})