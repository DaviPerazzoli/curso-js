const caixaCursos=document.getElementById('caixaCursos')
const btn_c=[...document.querySelectorAll('.curso')]
const c1_2=document.querySelector('#c1_2')
const cursos=['HTML', 'CSS', 'Javascript', 'PHP', 'My SQL', 'React Native']
const btnCursoSelecionado=document.getElementById('btnCursoSelecionado')

cursos.map((el, chave)=>{
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id', 'c'+chave)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = el

    const comandos=document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb=document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
})

