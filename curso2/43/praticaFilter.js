const caixaCursos=document.getElementById('caixaCursos')
const btn_c=[...document.querySelectorAll('.curso')]
const cursos=['HTML', 'CSS', 'Javascript', 'PHP', 'My SQL', 'React Native']
const btnCursoSelecionado=document.getElementById('btnCursoSelecionado')
const btnRemoveCurso=document.getElementById('btnRemoverCurso')
const btnAdicionarNovoCursoAntes=document.getElementById('btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois=document.getElementById('btnAdicionarNovoCursoDepois')
const nomeCurso=document.getElementById('nomeCurso')

let indice = 0

const criarNovoCurso = (curso)=>{
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id', 'c'+indice)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = curso

    const comandos=document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb=document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)
    return novoElemento
}

const radioSelecionado=()=>{
    const todosRadios=[...document.querySelectorAll('input[type=radio]')]
    const radioSelecionado=todosRadios.filter((ele)=>{
        return ele.checked
    })[0]
    return radioSelecionado
}

cursos.map((el)=>{
    caixaCursos.appendChild(criarNovoCurso(el))
    indice++
})

btnCursoSelecionado.addEventListener('click', ()=>{
    let rs = radioSelecionado()
    try{
        //const cursoSelecionado=radioSelecionado.parentNode.parentNode.firstChild
        const cursoSelecionado=rs.parentNode.previousSibling.textContent
        alert(`Curso selecionado: ${cursoSelecionado}`)
    }catch(ex){
        alert("Nenhum curso foi selecionado!")
    }
    // if(rs!=undefined){
    //     const cursoSelecionado=radioSelecionado.parentNode.parentNode.firstChild
    //     const cursoSelecionado=rs.parentNode.previousSibling.textContent
    //     alert(`Curso selecionado: ${cursoSelecionado}`)
    // }else{
    //     alert("Nenhum curso foi selecionado!")
    // }
})

btnRemoveCurso.addEventListener('click', ()=>{
    let rs = radioSelecionado()
    try{
        const cursoSelecionado=rs.parentNode.parentNode
        cursoSelecionado.remove()
    }catch(ex){
        alert("Nenhum curso foi selecionado!")
    }
})

btnAdicionarNovoCursoAntes.addEventListener('click', ()=>{
    let rs = radioSelecionado()
    try{
        const cursoSelecionado=rs.parentNode.parentNode
        if(nomeCurso.value.length != 0){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado)
        }else{
            alert('Digite o nome do curso!')
        }
    }catch(ex){
        alert("Nenhum curso foi selecionado!")
    }
})

btnAdicionarNovoCursoDepois.addEventListener('click', ()=>{
    let rs = radioSelecionado()
    try{
        const cursoSelecionado=rs.parentNode.parentNode
        if(nomeCurso.value.length != 0){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling)
        }else{
            alert('Digite o nome do curso!')
        }
    }catch(ex){
        alert("Nenhum curso foi selecionado!")
    }
})