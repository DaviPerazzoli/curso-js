const caixaCursos=document.getElementById('caixaCursos')
const btn_c=[...document.querySelectorAll('.curso')]
const cursos=['HTML', 'CSS', 'Javascript', 'PHP', 'My SQL', 'React Native']
const btnCursoSelecionado=document.getElementById('btnCursoSelecionado')
const btnRemoveCurso=document.getElementById('btnRemoverCurso')
const btnAdicionarNovoCursoAntes=document.getElementById('btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois=document.getElementById('btnAdicionarNovoCursoDepois')
const nomeCurso=document.getElementById('nomeCurso')

let indice = 0

const tirarSelecao=()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el)=>{
        el.classList.remove('selecionado')
    })
}

const criarNovoCurso = (curso)=>{
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id', 'c'+indice)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = curso
    novoElemento.addEventListener('click', (evt)=>{
        tirarSelecao()
        evt.target.classList.toggle('selecionado')
    })
    return novoElemento
}

const cursoSelecionado=()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    return cursosSelecionados[0]
}

cursos.map((el)=>{
    caixaCursos.appendChild(criarNovoCurso(el))
    indice++
})

btnCursoSelecionado.addEventListener('click', ()=>{
    try{
        //const cursoSelecionado=radioSelecionado.parentNode.parentNode.firstChild
        alert(`Curso selecionado: ${cursoSelecionado().innerHTML}`)
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
    try{
        cursoSelecionado().remove()
    }catch(ex){
        alert("Nenhum curso foi selecionado!")
    }
})

btnAdicionarNovoCursoAntes.addEventListener('click', ()=>{
    try{
        if(nomeCurso.value.length != 0){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado())
        }else{
            alert('Digite o nome do curso!')
        }
    }catch(ex){
        alert("Nenhum curso foi selecionado!")
    }
})

btnAdicionarNovoCursoDepois.addEventListener('click', ()=>{
    try{
        if(nomeCurso.value.length != 0){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)
        }else{
            alert('Digite o nome do curso!')
        }
    }catch(ex){
        alert("Nenhum curso foi selecionado!")
    }
})