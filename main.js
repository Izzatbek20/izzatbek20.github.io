const tg = {
    token: "6523006688:AAFnDIMUluEviarTjo7yoLmhabLzMTvLzN0",
    chat_id: 1733819468
}
document.getElementById('contact').onsubmit = (e) => {
    let form_name = document.getElementById('form-name');
    let form_email = document.getElementById('form-email');
    let form_message = document.getElementById('form-message');

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
    }

}

const sideabar = document.querySelector('.sidebar')
document.querySelector('#menu').addEventListener('click', (e) => {
    sideabar.style.display = 'block'
    sideabar.style.height = '100vh'
})