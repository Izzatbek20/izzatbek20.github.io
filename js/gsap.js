// // Plaginlarni ro'yxatga olish
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, ScrollToPlugin)

const cursor_1 = document.getElementById('cursor-1');
const cursor_2 = document.getElementById('cursor-2');
const body = document.getElementById('body');

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
let tl = gsap.timeline({
    onStart: () => {
        cursor_1.style.display = 'none';
        cursor_2.style.display = 'none';
    },
});


// Ekran sahifani yuqorisida turgan bo'lsa banner animatsiyasiga ruxsat beramiz. 
// Agar pasta bo'lsa ScrollTriger orqali birdaniga tugashiga o'tamiz animatsiyani
// if (window.scrollY >= 200) {
ScrollTrigger.create({
    trigger: '#banner',
    start: 'top 100%',
    end: 'bottom 50%',
    toggleActions: "play complete none none",
    animation: tl, // Animatsiyani ScrollTrigger bilan bog'lab olish
    onEnter: () => {
        cursor_1.style.display = 'none';
        cursor_2.style.display = 'none';
    }
});
// }


tl.to('.banner-coment', {
    delay: 2,
    duration: 1,
    text: "# Salom, dunyo",
    onComplete: () => {
        // .4s kursorni yashiradi
        setTimeout(() => {
            document.getElementById('cursor-coment').style.display = 'none';
        }, 400)
    }
})

// Banner yozuvlarini animatsiyasi
tl.to('.banner-text-1', {
    delay: 0.5,
    duration: 1,
    text: 'Mening ismim',
    onStart: () => {
        cursor_1.style.display = 'inline-block';
    },
    onComplete: () => {
        // .4s kursorni yashiradi
        setTimeout(() => {
            cursor_1.style.display = 'none';
        }, 100)
    }
}).to('.name', {
    duration: 1,
    text: 'Izzatbek.'
}).to('.banner-text-2', {
    duration: 1,
    text: 'Men php backend dasturchisiman.',
    onStart: () => {
        cursor_2.style.display = 'inline-block';
    },
    onComplete: () => {
        // .4s kursorni yashiradi
        setTimeout(() => {
            cursor_2.style.display = 'none';
        }, 600)
    }
}).fromTo('#banner-contact-btn', {
    y: "5vh",
    opacity: 0,
    maxWidth: 0,
    display: 0,
}, {
    display: 1,
    y: 0,
    opacity: 1,
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

// const words = ['Imm.', 'Izzatbek.', 'Majidov.']
// let tl_name = gsap.timeline({
//     delay: 6.5,
//     repeat: -1
// })

// words.forEach(word => {
//     tl_name.to('.name', {
//         duration: 1,
//         text: word,
//         // chars: '010110010110011011',
//         // revealDelay: 0.5,
//         // speed: 0.3,
//     })
// });


// Pastga scroll bo'lganda "mouse down scroll" yo'qotib qo'yamiz
gsap.to(".mous_scroll", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".mous_scroll",
        start: "top center",
        end: "bottom bottom",
        // markers: true,
        toggleActions: "play none none reverse",
        // once: true
    },
});


// Button hover uchun
function buttonHover(box, limit, interval) {
    for (let index = 0; index <= limit; index++) {
        const item = document.createElement('div')
        const w_h = getRandomInt(1, 10)
        item.className = 'item' + index + interval
        item.style.width = w_h + 'px';
        item.style.height = w_h + 'px';
        item.style.display = 'inline-block';
        item.style.margin = '1px';
        item.style.position = 'absolute';
        item.style.zIndex = -1;
        item.style.left = getRandomInt(0, box.offsetWidth) + "px";
        item.style.backgroundColor = 'white';

        box.appendChild(item)

        let y = getRandomInt(0, 150) - getRandomInt(0, 150)
        let x = getRandomInt(0, 150) - getRandomInt(0, 150)
        gsap.to('.' + item.className, {
            y: y,
            x: x,
            width: 0,
            height: 0,
            opacity: 0,
            duration: 2,
            ease: 'none',
        })
        setTimeout(() => {
            item.remove()
        }, 3000)
    }
}

// Banner burron hover
let hoverTime;

document.getElementById('banner-contact-btn').addEventListener('mouseover', function (e) {
    let i = 1
    hoverTime = setInterval(function () {
        buttonHover(e.target, 10, i)
        i++
    }, 200);
})
document.getElementById('banner-contact-btn').addEventListener('mouseout', function () {
    clearInterval(hoverTime)
})

// Random int
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


// Skillis ni animatsiyasi

gsap.to('.skillis_title', {
    duration: 1,
    text: "# Malakalar",
    scrollTrigger: {
        trigger: '.skillis_title',
        start: 'top 80%',
        end: 'bottom 50%',
    },
    onComplete: () => {
        // .4s kursorni yashiradi
        setTimeout(() => {
            document.getElementById('skillis-cursor').style.display = 'none';
        }, 400)
    }
})

gsap.from('.skillis-images', {
    x: `+=${document.querySelector('.skillis-images').offsetWidth}`,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.skillis-images',
        start: 'top 80%',
        end: 'bottom 50%',
    }
})
gsap.from('.skillis-text', {
    x: `+=-${document.querySelector('.skillis-text').offsetWidth}`,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.skillis-text',
        start: 'top 80%',
        end: 'bottom 50%',
    }
})
gsap.from('.resume-dowbload', {
    y: '20vh',
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.skillis-text',
        start: 'top 80%',
        end: 'bottom 50%',
    }
})