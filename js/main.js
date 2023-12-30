const tg = {
    token: "6523006688:AAFnDIMUluEviarTjo7yoLmhabLzMTvLzN0",
    chat_id: 1733819468
}
document.getElementById('contact').onsubmit = (e) => {
    let form_name = document.getElementById('name');
    let form_email = document.getElementById('email');
    let form_message = document.getElementById('messsage');
    let form_alert = document.getElementById('form-alert');

    const Http = new XMLHttpRequest();

    if (form_name.value == "") {
        form_name.style.borderColor = "red";
    } else {
        form_name.style.borderColor = "rgb(46, 99, 172)";
    }
    if (form_email.value == "") {
        form_email.style.borderColor = "red";
    } else {
        form_email.style.borderColor = "rgb(46, 99, 172)";
    }
    if (form_message.value == "") {
        form_message.style.borderColor = "red";
    } else {
        form_message.style.borderColor = "rgb(46, 99, 172)";
    }
    if (form_name.value && form_email.value && form_message.value) {
        let text = `<b>Ism</b>: ${form_name.value}%0A<b>Aloqa uchun</b>: ${form_email.value}%0A<b>Habar</b>: ${form_message.value}`
        let url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}&parse_mode=html`;
        Http.open('GET', url);
        Http.send();

        form_name.value = ''
        form_email.value = ''
        form_message.value = ''

        form_alert.style.display = 'block';
        e.preventDefault();
    } else {
        if (form_name.value == "") {
            form_name.style.borderColor = "red";
        } else {
            form_name.style.borderColor = "rgb(46, 99, 172)";
        }
        if (form_email.value == "") {
            form_email.style.borderColor = "red";
        } else {
            form_email.style.borderColor = "rgb(46, 99, 172)";
        }
        if (form_message.value == "") {
            form_message.style.borderColor = "red";
        } else {
            form_message.style.borderColor = "rgb(46, 99, 172)";
        }
        e.preventDefault();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        // type: 'loop',
        gap: 10,
        width: '100%',
        perPage: 2,
        autoScroll: {
            speed: 0.2,
        },
        breakpoints: {
            1200: {
                perPage: 2,
            },
            640: {
                perPage: 1,
                type: 'loop',
                padding: '0',
                gap: 5,
                autoScroll: {
                    speed: 0.2,
                },
            },
        }
    });

    splide.on('click', function (e) {
        console.log(e);
    });
    splide.mount(window.splide.Extensions);
});

// const robot = document.querySelector('.robot')


// const heart = [
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// ]

// heart.forEach((value, index) => {
//     const box = document.createElement('div')
//     box.classList.add('robot-box', 'w-10', 'h-10', 'border', 'text-white')
//     box.setAttribute('data-index', index)
//     if (value == 1) {
//         box.classList.add('bg-white')
//     }
//     robot.appendChild(box)
// });

// document.querySelectorAll('.robot-box').forEach((e) => {
//     e.addEventListener('click', (e) => {
//         const index = e.target.getAttribute('data-index')
//         if (heart[index] == 0) {
//             e.target.classList.add('bg-white')
//             heart[index] = 1;
//         } else {
//             e.target.classList.remove('bg-white')
//             heart[index] = 0;
//         }
//         let textValue = ''
//         heart.forEach(element => {
//             textValue += element + ',';
//         });
//         console.log(textValue);
//     })
// })