class Pessoa{
    constructor(nome, idade){
        this.nome=nome
        this.idade=idade
    }

    getNome(){
        return this.nome
    }

    getIdade(){
        return this.idade
    }

    setNome(nome){
        this.nome = nome
    }

    setIdade(idade){
        this.idade = idade
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`------------------`)
    }
}

let pessoas=[]

const btn_add=document.querySelector('#btn_add')
const res=document.querySelector('.res')

const addPessoa=()=>{
    res.innerHTML=''
    pessoas.map((el)=>{
        const div=document.createElement('div')
        div.setAttribute('class', 'pessoa')
        div.innerHTML=`Nome: ${el.getNome()}<br> Idade: ${el.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener('click', (evt)=>{
    const nome = document.getElementById('f_nome')
    const idade = document.getElementById('f_idade')
    const p=new Pessoa(nome.value, idade.value)
    pessoas.push(p)
    nome.value =null
    idade.value =null
    nome.focus()

    addPessoa()
})