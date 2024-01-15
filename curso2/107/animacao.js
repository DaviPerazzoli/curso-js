const carro = document.getElementById('carro')
const btn_esquerda = document.getElementById('btn_esquerda')
const btn_direita = document.getElementById('btn_direita')

const init = ()=>{
    carro.style.position='relative'
    carro.style.left = '0px'
    carro.style.transition= '0.1s left'
}

const separarPrimeiroNumero = (termo)=>{
    return /^\d+/.exec(termo)[0]
}

const posicaoDentroDaTela = ()=>{
    return carro.style.left <0 
}

btn_esquerda.addEventListener('click', (evt)=>{
    if(posicaoDentroDaTela()){
        let posicao_carro = Number(separarPrimeiroNumero(carro.style.left))
        posicao_carro -=10
        carro.style.left = posicao_carro + 'px'
        console.log(posicao_carro)
    }
})

btn_direita.addEventListener('click', ()=>{
    let posicao_carro = Number(separarPrimeiroNumero(carro.style.left))
    posicao_carro +=10
    carro.style.left = posicao_carro + 'px'
    console.log(posicao_carro)
})

// window.onload=init()
window.addEventListener('load', init())