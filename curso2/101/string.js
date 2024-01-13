let nome = 'bruno Pinho campos'
let nome2 = 'bruno Pinho campos'
let canal = 'CFB cursos'

console.log(nome)

console.log(nome.charAt(1))
console.log(nome.charCodeAt(1))

console.log(nome.concat(canal))
console.log(nome.indexOf('o'))

console.log(nome.lastIndexOf('o'))
console.log(nome.localeCompare(nome2))

console.log(nome.replace('Pinho', 'Teste'))

console.log(nome.search('Pinho'))

console.log(nome.slice(6,9))

let arr_nome = nome.split(' ')
console.log(arr_nome)

let parte=nome.substring(0,5)
console.log(parte)

console.log(nome.toUpperCase())
console.log(nome.toLowerCase())

console.log(nome.valueOf())

let num=10
console.log(typeof(num.toString()))