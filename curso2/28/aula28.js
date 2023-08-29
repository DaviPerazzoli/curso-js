// const cursos=['HTML', 'CSS', 'Javascript', 'PHP', 'React']
// cursos.map((el,i)=>{
//     return el
// })

// let elementos = document.getElementsByTagName('div')
// elementos = [...elementos]

// elementos.map((e, i)=>{
//     e.innerHTML = 'bolas'
// })

// const elementos = document.getElementsByTagName('div')
// const val=Array.prototype.map.call(elementos, ({innerHTML}) => innerHTML)
// console.log(val)

const converterInt=(int) => parseInt(int)
const dobrar = e => e*2

let num = ['1', '2', '3', '4', '5'].map(converterInt)

console.log(num)