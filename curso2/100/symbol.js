const nome = Symbol('nome')
const numero = Symbol('numero')
const corUniforme = Symbol('corUniforme')

const jogador ={
    [nome]: 'j1',
    [numero]: 10,
    [corUniforme]: 'amarelo'
}

for(p in jogador){ //não funciona
    console.log(p)
}

console.log(jogador[nome])
console.log(jogador[numero])
console.log(jogador[corUniforme])

