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
    constructor(arrayBolas, palco){
        // *Definindo as propriedades para valores aleatórios

        this.tam=Math.floor(Math.random()*10)+10        //* Tamanho
        this.r = Math.floor(Math.random()*255)          //* Cor
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)
        this.px=Math.floor(Math.random()*(larguraPalco-this.tam)) //* Posição
        this.py=Math.floor(Math.random()*(alturaPalco-this.tam))
        this.velx=Math.floor(Math.random()*2+0.5)
        this.vely=Math.floor(Math.random()*2+0.5)
        this.dirx=(Math.random()*10)>5?1:-1
        this.diry=(Math.random()*10)>5?1:-1
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id=Date.now()+'_'+Math.floor(Math.random()*100000000000000)
        this.desenhar()
        this.controle=setInterval(this.controlar(), 10)
        this.eu=document.getElementById(this.id)
    }

    minhaPos(){

    }

    remover(){

    }

    controlar(){

    }

    //* Método para mostrar uma bolinha
    desenhar(){
        const bola = document.createElement('div')
        bola.classList.add('bola')
        bola.setAttribute('id', this.id)
        bola.style.width = this.tam.toString() + 'px'
        bola.style.height = this.tam.toString() + 'px'
        bola.style.backgroundColor = `rgb(${this.r}, ${this.g}, ${this.b})`
        bola.style.left = this.px.toString() + 'px'
        bola.style.top = this.py.toString() + 'px'
        palco.appendChild(bola)
        this.elemento = bola
    }
}

window.addEventListener('resize', (e)=>{
    let larguraPalco=palco.offsetWidth
    let alturaPalco=palco.offsetHeight
})

//* Botão para criar as bolinhas

btn_add.addEventListener('click', (e)=>{

    //* Pega a quantidade desejada de bolinhas
    const qtde = txt_qtde.value 

    for(let i=0; i< qtde; i++){
        //* Instanciar novas bolinhas, colocar no array bolas e atualizar a contagem de bolas
        let bola = new Bola()
        bolas.push(bola)
        

        num_objetos.innerHTML = bolas.length
    }
})

btn_remover.addEventListener('click', (e)=>{
    bolas.forEach((bola)=>{
        //remover bolinha
       
    })
    
})