const pessoa={
    nome: "bruno",
    canal:'CFB cursos',
    curso: 'Javascript',
    aulas:{
        aula01: 'introdução',
        aula02: 'variaveis',
        aula03: 'condicional'
    }
}

const s_json = JSON.stringify(pessoa)   //* Converte objeto para string JSON
const o_json=JSON.parse(s_json)         //* Converte string para objeto

console.log(pessoa)
console.log(s_json)
console.log(o_json)