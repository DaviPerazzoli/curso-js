class Carro{ // * Classe Pai / BASE
    constructor(nome, portas=2){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }

    ligar=function(){
        this.ligado=true
    }

    desligar=function(){
        this.ligado=false
    }

    setCor=function(cor){
        this.cor=cor
    }
}

class Militar extends Carro{ // * Classe Filho
    constructor(nome, portas=2, blindagem, munição=0){
        super(nome, portas)
        this.blindagem=blindagem
        this.munição=munição
        this.setCor('verde')
    }

    atirar=function(){
        if(this.munição>0){
            this.munição--
        }
    }
}

const f_tipoMilitar=document.getElementById('f_tipoMilitar')
const f_tipoNormal=document.getElementById('f_tipoNormal')
const f_blindagem=document.querySelector('#f_blindagem')
const f_municao=document.querySelector('#f_municao')
const btn_addCarro = document.querySelector('#btn_addCarro')
const f_nome = document.getElementById('f_nome')
const f_portas = document.getElementById('f_portas')
const saida=document.querySelector('.carros')
let carros=[]

const removerCarro=(quem)=>{
    carros=carros.filter((el)=>{
        return el.nome!=quem
    })
}

f_nome.focus()

const mostrarCarros=()=>{
    saida.innerHTML=''
    carros.map((el)=>{
        const carro=document.createElement('div')
        carro.setAttribute('class', 'carro')
        carro.setAttribute('data-nome', el.nome)
        carro.innerHTML=`Nome: ${el.nome}<br>Portas: ${el.portas}`

        if(el.blindagem!=undefined){
            carro.innerHTML+=`<br>Blindagem: ${el.blindagem}<br>Munição: ${el.munição}`
        }

        const btnRemover =document.createElement('button')
        btnRemover.setAttribute('class', 'btnRemover')
        btnRemover.innerHTML="Remover"
        btnRemover.addEventListener('click', (evt)=>{
            const quemRemover=evt.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            mostrarCarros()
        })

        carro.appendChild(btnRemover)
        saida.appendChild(carro)

        f_nome.value=null
        f_blindagem.value=null
        f_municao.value=null
        f_portas.value=null

        f_nome.focus()
    })
}

btn_addCarro.addEventListener('click', (evt)=>{
    if(f_tipoNormal.checked){
        const c = new Carro(f_nome.value, Number(f_portas.value))
        carros.push(c)
    }else if(f_tipoMilitar.checked){
        const c=new Militar(f_nome.value, Number(f_portas.value), Number(f_blindagem.value), Number(f_municao.value))
        carros.push(c)
    }

    mostrarCarros()
})

f_tipoMilitar.addEventListener('click', (evt)=>{
    f_blindagem.removeAttribute('disabled')
    f_municao.removeAttribute('disabled')
})

f_tipoNormal.addEventListener('click', (evt)=>{
    f_blindagem.setAttribute('disabled', 'disabled')
    f_municao.setAttribute('disabled', 'disabled')
    f_blindagem.value=null
    f_municao.value=null
})
