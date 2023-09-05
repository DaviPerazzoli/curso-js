const caixa =document.getElementById('caixa')

let musicas= new Set(["musica1", "musica boa", "musica10"])

musicas.add("musica muito legal")
musicas.add("musica1")     //* São ignoradas
musicas.add("musica1")
musicas.add("musica10")

console.log(musicas)

// musicas.forEach((el)=>{
//     caixa.innerHTML+=el+"<br>"
// })

for(let m of musicas){
    caixa.innerHTML+=m+"<br>"
}

let vetor = new Array('oi', 1, 2)

console.log(vetor)