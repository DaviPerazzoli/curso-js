const carro = document.getElementById('carro')
const btn_parar = document.getElementById('btn_parar')
const btn_rodar = document.getElementById('btn_rodar')

let tamMax = window.innerWidth - parseInt(carro.style.width)
let anima=null
let tamCarro = null

const init = ()=>{
    carro.style.position='relative'
    carro.style.left = '0px'
    carro.style.width = '100px'
    carro.style.height = '40px'
    redefinirTamMax()
}

const redefinirTamMax=()=>{
    tamCarro = parseInt(carro.style.width)
    tamMax = window.innerWidth - tamCarro
}

//* utilizando recursividade
const mover=(dir)=>{
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

btn_rodar.addEventListener('click', ()=>{
    mover(1)
})

// window.onload=init()
window.addEventListener('load', init())
window.addEventListener('resize', redefinirTamMax)
window.addEventListener('keydown', (evt)=>{
    if( evt.code == 'ArrowUp'){
        carro.style.width= parseInt(carro.style.width)+10+'px'
        carro.style.height= parseInt(carro.style.height)+10+'px'
    }
    if( evt.code == 'ArrowDown'){
        carro.style.width= parseInt(carro.style.width)-10+'px'
        carro.style.height= parseInt(carro.style.height)-10+'px'
    }
    redefinirTamMax()
})