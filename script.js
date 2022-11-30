let but = document.querySelector('.button');
but.addEventListener('click', tipe);

function tipe () {
    let start = document.querySelector('.start');
    start.remove(body);
}

let img = document.querySelector('.img');
let body = document.querySelector('body');

function my () {
    let message = document.createElement('div');
    message.textContent = 'Вы нашли кота!!!';
    message.className = 'message';
    body.append(message);


}

img.addEventListener('click', my);



