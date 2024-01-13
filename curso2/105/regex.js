let nome = String('Brunoooooooo Pinho Campossssss 1978')
let email = "bruno@bruno.com.br"
let numeros = '1, 10, 100, 1000'

console.log(nome.search(/pinho/i))

console.log(nome.match(/O/ig))

console.log(nome.replace(/o/ig, 'teste'))

console.log(nome.match(/[a-g|h-z|0-9]/ig))

//metacaracteres

console.log(nome.match(/\d/ig)) // numeros

console.log(nome.match(/\s/ig)) // espaços

console.log(nome.match(/\bP/ig)) // DWORD

//quantificadores

console.log(nome.match(/o+|s+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))