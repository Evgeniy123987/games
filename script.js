let img = document.querySelector('.img');
let body = document.querySelector('body');

function my () {
    let message = document.createElement('div');
    message.textContent = 'Вы нашли кота!!!';
    message.className = 'message';
    body.append(message);


}

img.addEventListener('click', my);

