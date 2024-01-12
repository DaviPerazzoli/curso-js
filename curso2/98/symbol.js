// const s1=Symbol('oi')
// const s2=Symbol()
// const s3=Symbol.for('bruno')
// const s4=Symbol.for('canal')

// console.log(s1)
// console.log(s2)

// if(s1 === s2){
//     document.write('pica')
// }else{
//     document.write('bolas')
// }

// console.log(Symbol.keyFor(s4))
// console.log(s1.description)

class Jogador{
    constructor(nome){
        this.id = Symbol()
        this.nome=nome
    }
}

let jogadores=[new Jogador('j1'), new Jogador('j2'), new Jogador('j3'), new Jogador('j4'),new Jogador('j1'), new Jogador('j3')]

let s=[]

jogadores=jogadores.filter((j)=>{
    return j.nome=='j1'
})

s= jogadores.map(j => {
    return j.id
})

console.log(jogadores)
console.log(s)
