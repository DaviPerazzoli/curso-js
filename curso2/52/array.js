let cores=['azul', 'verde', 'vermelho']
let cursos=['html','css','javascript', cores[0]]
const caixa = document.getElementById('caixa')

// cursos[0]=2023
// cursos.push('c++')
// cursos.unshift('python')
// cursos.shift()
// cursos.pop()

cursos.map((el)=>{
    let p = document.createElement('p')
    p.innerHTML=el
    caixa.appendChild(p)
})