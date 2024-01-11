import contato from './contatos.js'

const listaContatos = document.getElementById('listaContatos')
const btn_gravar = document.getElementById('btn_gravar')

btn_gravar.addEventListener('click', (evt)=>{
    const cont = {
        nome: document.getElementById('f_nome').value,
        email: document.getElementById('f_email').value,
        telefone: document.getElementById('f_telefone').value
    }
    contato.addContato(cont ,listaContatos)
    console.log(contato.getTodosContatos())
})