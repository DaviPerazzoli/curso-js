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
        this.velx=Math.floor(Math.random()*2+1)
        this.vely=Math.floor(Math.random()*2+1)
        this.dirx=(Math.random()*10)>5?1:-1
        this.diry=(Math.random()*10)>5?1:-1
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id=Date.now()+'_'+Math.floor(Math.random()*100000000000000)
        this.desenhar()
        this.controle=setInterval(()=>{this.controlar()}, 10)
        this.eu.addEventListener('click', ()=>{
            if(this.tam <200){
                this.tam+=5
            }

        })
    }

    //* Retorna a posição da bola no array
    minhaPos(){
        return this.arrayBolas.indexOf(this)
    }

    //* remove o controle, o elemento do array e o objeto no DOM
    //* se forem todos, apenas limpa o array
    remover(todos=false){
        clearInterval(this.controle)
        if(todos){
            bolas=[]

        }else{
            bolas = bolas.filter((e)=>{ return e.id !== this.id })

        }
        this.eu.remove()

    }

    //* verifica se a bolinha tocou nas bordas
    controle_bordas(){
        if(this.py+this.tam >= alturaPalco || this.py <= 0){
            this.diry *= -1
            this.r = Math.floor(Math.random()*255)
            this.g = Math.floor(Math.random()*255)
            this.b = Math.floor(Math.random()*255)
        }
        if(this.px+this.tam >= larguraPalco || this.px <= 0){
            this.dirx *= -1
            this.r = Math.floor(Math.random()*255)
            this.g = Math.floor(Math.random()*255)
            this.b = Math.floor(Math.random()*255)
        }
    }

    controlar(){
        this.controle_bordas()
        //* movimentação: soma a posição atual com a direção x velocidade
        this.px += this.dirx*this.velx
        this.py += this.diry*this.vely
        this.eu.setAttribute('style', `left:${this.px}px; top:${this.py}px; width: ${this.tam}px; height: ${this.tam}px; background-color: rgb(${this.r}, ${this.g}, ${this.b})`)

        //* remove a bolinha se estiver fora da tela
        if((this.px > larguraPalco) || (this.py>alturaPalco)){
            this.remover()
            num_objetos.innerHTML=bolas.length
        }
    }

    //* Método para mostrar uma bolinha
    desenhar(){
        const bola = document.createElement('div')
        bola.classList.add('bola')
        bola.setAttribute('id', this.id)
        // bola.style.width = this.tam.toString() + 'px'
        // bola.style.height = this.tam.toString() + 'px'
        // bola.style.backgroundColor = `rgb(${this.r}, ${this.g}, ${this.b})`
        // bola.style.left = this.px.toString() + 'px'
        // bola.style.top = this.py.toString() + 'px'
        bola.setAttribute('style', `width: ${this.tam}px; height: ${this.tam}px; left:${this.px}px; top:${this.py}px;  background-color: rgb(${this.r}, ${this.g}, ${this.b})`)
        palco.appendChild(bola)
        this.eu = bola
    }
}

window.addEventListener('resize', (e)=>{
    larguraPalco=palco.offsetWidth
    alturaPalco=palco.offsetHeight
})

//* Botão para criar as bolinhas

btn_add.addEventListener('click', (e)=>{

    //* Pega a quantidade desejada de bolinhas
    const qtde = txt_qtde.value 

    for(let i=0; i< qtde; i++){
        //* Instanciar novas bolinhas, colocar no array bolas e atualizar a contagem de bolas
        let bola = new Bola(bolas, palco)
        
        bolas.push(bola)
    }
    num_objetos.innerHTML=bolas.length
})

btn_remover.addEventListener('click', (e)=>{
    bolas.forEach((bola)=>{
        //remover bolinha
       bola.remover(true)
    })
    num_objetos.innerHTML=bolas.length
})