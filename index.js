const sendButton = document.querySelector('#enviar')

const inputMail = document.querySelector('#correo');


const sending = (e) => {
    if(e.target.value.length > 4) {
        sendButton.disabled = false
        sendButton.innerHTML = ' (=‐ω‐=)'
    }else {
        sendButton.disabled = true;
        sendButton.innerHTML = ' (´；ω；`)'
    }
}


inputMail.addEventListener('keyup', sending)
