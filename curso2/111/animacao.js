const carro = document.getElementById('carro')
const btn_parar = document.getElementById('btn_parar')


let tamMax = window.innerWidth - parseInt(carro.style.width)
let anima=null

const init = ()=>{
    carro.style.position='relative'
    carro.style.left = '0px'
    // carro.style.transition= '0.1s left'
    carro.style.width = '100px'
    redefinirTamMax()
}

const redefinirTamMax=()=>{
    tamMax = window.innerWidth - parseInt(carro.style.width)
}

//* utilizando recursividade
const mover=(dir)=>{
    console.log(tamMax)
    let posicao_carro = parseInt(carro.style.left)
    if(posicao_carro > tamMax || posicao_carro < 0){
        dir *= -1
    }
    posicao_carro+= 10 * dir
    carro.style.left = posicao_carro + 'px'
    anima=setTimeout(mover, 20, dir)
}

btn_parar.addEventListener('click', ()=>{
    clearTimeout(anima)
})

btn_esquerda.addEventListener('click', (evt)=>{
    clearTimeout(anima)
    mover(-1)
})

btn_direita.addEventListener('click', ()=>{
    clearTimeout(anima)
    mover(1)
})

// window.onload=init()
window.addEventListener('load', init())
window.addEventListener('resize', redefinirTamMax)
