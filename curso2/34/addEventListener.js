// const c1 = document.getElementById("c1")

// const msg = ()=>{
//     alert("clicou")
// }

const cursos=[...document.querySelectorAll('.cursoc1')]

cursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
    const ele = evt.target
    ele.classList.add('destaque')
    })
})

// c1.addEventListener('click', (evt)=>{
//     const el = evt.target
//     el.classList.add('destaque')
// })

