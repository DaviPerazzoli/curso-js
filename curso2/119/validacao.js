const f_nome = document.getElementById('f_nome')
const f_nota = document.getElementById('f_nota')
const btn_validar = document.getElementById('btn_validar')
const f_msg = document.getElementById('f_msg')

btn_validar.addEventListener('click', (evt)=>{
    let estadoValidacao=f_nota.validity
    console.log(f_nota.validity)
    if(estadoValidacao.valueMissing){
        f_nota.setCustomValidity('Poxa, este campo é obrigatório')
    }else if(estadoValidacao.rangeOverflow){
        f_nota.setCustomValidity('Nossa, que nota alta você digitou, hein')
    }else if(estadoValidacao.rangeUnderflow){
        f_nota.setCustomValidity('Credo, que nota baixa!')
    }

    f_nota.reportValidity()

    evt.preventDefault()
})