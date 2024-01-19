const p_texto = document.getElementById('p_texto')
const btn_texto = document.getElementById('btn_texto')
const endpoint = 'https://api.adviceslip.com/advice'

p_texto.innerHTML='Esperando'

const obterDados=()=>{
    fetch(endpoint)
    .then((res)=>res.json())
    .then(dados=>{
        p_texto.innerHTML=dados.slip.advice
    })
    .catch(retorno=>console.log(retorno))

    p_texto.innerHTML='Procurando conselho...'
}

btn_texto.addEventListener('click',obterDados)
