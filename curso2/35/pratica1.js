const itens = [...document.getElementsByClassName('curso')]
const botao = document.getElementById('btnCopiar')
const caixa2 = document.getElementById('caixa2')
const caixa1 = document.getElementById('caixa1')

const selecionar = (elemento)=>{
    elemento.target.classList.toggle('destaque')
}

const copiar = ()=>{
    const selecionados = [...document.getElementsByClassName('destaque')]
    itens.map((el)=>{
        const classes = [...el.classList]
        let selecionado = false

        classes.map((el)=>{
            if(el == 'destaque'){
                selecionado = true
            }
        })

        if(!selecionado){
            caixa1.appendChild(el)
        }
    })
    
    selecionados.map((el)=>{
        caixa2.appendChild(el)
    })
}

itens.map((el)=>{
    el.addEventListener('click', selecionar)
})

botao.addEventListener('click', copiar)