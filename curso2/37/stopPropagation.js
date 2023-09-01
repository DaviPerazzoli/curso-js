const caixa1 = document.querySelector('#caixa1')
const botoes = [...document.querySelectorAll('.c1')]

caixa1.addEventListener('click', (evt)=>{
    console.log('clicou')
    console.log(evt.target)
})

botoes.map((el)=>{
    el.addEventListener('click', (evt)=>{
        evt.stopPropagation()
    })
})
