const f_nome = document.getElementById('f_nome')
const f_nota = document.getElementById('f_nota')
const btn_validar = document.getElementById('btn_validar')
const f_msg = document.getElementById('f_msg')

btn_validar.addEventListener('click', (evt)=>{
    let msg

    if(!f_nota.checkValidity()){
        msg = f_nota.validationMessage
    }

    f_msg.innerHTML = msg
    evt.preventDefault()
})