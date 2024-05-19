const sendButton = document.querySelector('#enviar')

const inputMail = document.querySelector('#mail');


const sending = (e) => {
    if(e.target.value.length > 4 && e.target.value.includes('@') && e.target.value.includes('.')){
        sendButton.disabled = false
        sendButton.innerHTML = ' (=‐ω‐=)'
    }else {
        sendButton.disabled = true;
        sendButton.innerHTML = ' (´；ω；`)'
    }
}


inputMail.addEventListener('keyup', sending)
