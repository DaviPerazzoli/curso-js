const btn_alert = document.getElementById('btn_alert')
const btn_confirm = document.getElementById('btn_confirm')
const btn_prompt = document.getElementById('btn_prompt')

btn_alert.addEventListener('click', ()=>{
    alert('Olá seu porra')
})

btn_confirm.addEventListener('click', ()=>{
    let confirmacao = confirm('Olá seu porra')
    if(confirmacao){
        document.body.style.backgroundColor = 'lightblue'
    }else{
        document.body.style.backgroundColor = 'lightgreen'
    }
})

btn_prompt.addEventListener('click', ()=>{
    let resposta = prompt('Olá seu porra', 'Olá é o crl')
    alert(resposta)
})