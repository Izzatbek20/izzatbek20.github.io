// Plaginlarni ro'yxatga olish
gsap.registerPlugin(MotionPathPlugin)

const cursor = document.getElementById('cursor');
const cursor_coment = document.getElementById('cursor-coment');

// Surcor ni animatsiyasi
gsap.to('.cursor', {
    opacity: 0,
    ease: "power2.inOut",
    repeat: -1
})

gsap.to('.cursor-coment', {
    opacity: 0,
    ease: "power2.inOut",
    repeat: -1,
})


// Banner
let tl = gsap.timeline();


tl.to('.banner-coment', {
    delay: 2,
    duration: 1,
    text: "# Salom, dunyo",
    onComplete: () => {
        // .4s kursorni yashiradi
        setTimeout(() => {
            cursor_coment.style.display = 'none';
        }, 400)
    }
})

// Banner yozuvlarini animatsiyasi
tl.to('.banner-text-1', {
    delay: 0.5,
    duration: 1,
    text: 'Mening ismim'
}).to('.name', {
    duration: 1,
    text: 'Izzatbek.'
}).to('.banner-text-2', {
    duration: 1,
    text: 'Men php backend dasturchisiman.',
    onComplete: () => {
        // .4s kursorni yashiradi
        setTimeout(() => {
            cursor.style.display = 'none';
        }, 400)
    }
}).fromTo('#banner-contact-btn', {
    x: "-50vw",
    maxWidth: 0,
    display: 0,
}, {
    display: 1,
    x: 0,
    maxWidth: '100%',
    duration: 2,
    ease: "elastic.out(1,0.3)",
}).fromTo('.mouse', {
    opacity: 0
}, {
    opacity: 1,
    duration: 0.5,
}).fromTo('.mous_scroll_text', {
    opacity: 0
}, {
    opacity: 1,
});