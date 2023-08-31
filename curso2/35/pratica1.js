const selecionar = (elemento)=>{
    elemento.target.classList.add('destaque')
}

const copiar = ()=>{
    selecionados = [...document.getElementsByClassName('destaque')]
    caixa2 = document.getElementById('caixa2')
    selecionados.map((el)=>{
        caixa2.appendChild(el)
    })
   // caixa2.appendChild(selecionados)
}

itens = [...document.getElementsByClassName('curso')]
botao = document.getElementById('btnCopiar')

itens.map((el)=>{
    el.addEventListener('click', selecionar)
})

botao.addEventListener('click', copiar)