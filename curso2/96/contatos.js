import contatos from './bancoContatos.js'

let contato = {
        getTodosContatos: function(){
            return contatos
        },
        getContato: function(index){
            return contatos[index]
        },
        addContato: function(contato, target){
            contatos.push(contato)

            target.innerHTML=''

            contatos.forEach((e, i)=>{
                const div = document.createElement('div')
                div.classList.add('contato')
                const p_nome=document.createElement('p')
                const p_email=document.createElement('p')
                const p_telefone=document.createElement('p')
                p_nome.innerHTML=e.nome
                p_email.innerHTML=e.email
                p_telefone.innerHTML=e.telefone
                div.appendChild(p_nome)
                div.appendChild(p_email)
                div.appendChild(p_telefone)

                const btn_remover = document.createElement('button')
                btn_remover.innerHTML='🗑️'
                btn_remover.setAttribute('style', 'padding: 5px; background-color: black;')
                btn_remover.addEventListener('click', (evt)=>{
                    evt.target.parentNode.remove()
                    contatos.splice(i, 1)
                })
                div.appendChild(btn_remover)

                target.appendChild(div)
            })
        }
}

export default contato