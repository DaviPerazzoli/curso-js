const caixa1 = document.querySelector('#caixa1')
const btnC=[...document.querySelectorAll('.curso')]
/*
* const novoElemento=document.createElement('div')     cria
* novoElemento.innerHTML = 'React Native'              bota texto
* novoElemento.setAttribute('id', 'c7')                coloca atributos
* // novoElemento.setAttribute('class', 'curso c1')
* novoElemento.classList.add('curso')
* novoElemento.classList.add('c1')
* caixa1.appendChild(novoElemento)                     coloca no pai
*/
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'My SQL', 'React Native']

cursos.map((el, i)=>{
    const novo = document.createElement('div')
    novo.setAttribute('id', 'c'+ (i+1))
    novo.setAttribute('class', 'curso c1')
    novo.innerHTML = el
    caixa1.appendChild(novo)   

    novo.addEventListener('click', (evt)=>{
        evt.target.parentNode.removeChild(evt.target)
    })
})