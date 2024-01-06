const palco = document.getElementById('palco')
const num_objetos = document.getElementById('num_objetos')
const txt_qtde = document.getElementById('txt_qtde')
const btn_add = document.getElementById('btn_add')
const btn_remover = document.getElementById('btn_remover')

let larguraPalco=palco.offsetWidth
let alturaPalco=palco.offsetHeight
let bolas=[]
let numBolas = 0

class Bola{
    constructor(){
        this.tam=Math.floor(Math.random()*10)+10
        this.r = Math.floor(Math.random()*255)
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)
        this.px=Math.floor(Math.random()*(larguraPalco-this.tam))
        this.py=Math.floor(Math.random()*(alturaPalco-this.tam))
    }

    
}

window.addEventListener('resize', (e)=>{
    let larguraPalco=palco.offsetWidth
    let alturaPalco=palco.offsetHeight
})

btn_add.addEventListener('click', (e)=>{
    const qtde = txt_qtde.ariaValueMax
    for(let i=0; i< qtde; i++){
        //instanciar novas bolinhas e colocar no array bolas
    }
})

btn_remover.addEventListener('click', (e)=>{
    bolas.map((b)=>{
        //remover bolinha
    })
})