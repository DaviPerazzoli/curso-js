const Pessoa={
    nome: "",
    idade: 0,
    getNome: function(){
        return this.nome
    },
    getIdade: function(){
        return this.idade
    },
    setNome: function(nome){
        this.nome= nome
    },
    setIdade: function(idade){
        this.idade = idade
    }
}

const res = document.querySelector('.res')
const btn_add = document.getElementById('btn_add')

btn_add.addEventListener('click', ()=>{
    const nome = document.getElementById('f_nome')
    const idade = document.getElementById('f_idade')
    Pessoa.setNome(nome.value)
    Pessoa.setIdade(idade.value)
    nome.value=null
    idade.value=null
    nome.focus()

    const p=document.createElement('div')
    p.setAttribute('class', 'pessoa')
    p.innerHTML=`Nome: ${Pessoa.getNome()}<br>Idade: ${Pessoa.getIdade()}`
    res.appendChild(p)
})