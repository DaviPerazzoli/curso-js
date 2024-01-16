const carro = document.getElementById('carro')
const btn_parar = document.getElementById('btn_parar')
const btn_esquerda = document.getElementById('btn_esquerda')
const btn_direita = document.getElementById('btn_direita')

const init = ()=>{
    carro.style.position='relative'
    carro.style.left = '0px'
    carro.style.transition= '0.1s left'
}

const posicaoDentroDaTela = ()=>{
    return parseInt(carro.style.left) >= 0 && parseInt(carro.style.left) < (document.body.offsetWidth - carro.offsetWidth)
}

let anima=null

const mover=(dir)=>{
    let posicao_carro = parseInt(carro.style.left)
    posicao_carro+= 10 * dir
    carro.style.left = posicao_carro + 'px'
}

btn_parar.addEventListener('click', ()=>{
    clearInterval(anima)
})

btn_esquerda.addEventListener('click', (evt)=>{
    clearInterval(anima)
    anima = setInterval(mover, 20, -1)
})

btn_direita.addEventListener('click', ()=>{
    clearInterval(anima)
    anima = setInterval(mover, 20, 1)
})

// window.onload=init()
window.addEventListener('load', init())