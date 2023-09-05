const caixa =document.getElementById('caixa')

let mapa=new Map()

mapa.set("curso", "Javascript")
mapa.set(100, "CFB Cursos")
mapa.set(1, 100)
mapa.set('canal', 100)

mapa.delete(100)

//console.log(mapa)

let pes=1
if(mapa.has(pes)){
    caixa.innerHTML="A chave existe na coleção com o valor "+ mapa.get(pes)
    caixa.innerHTML+= "<br> O tamanho da coleção é " + mapa.size
}else{
    caixa.innerHTML="A chave NÃO existe na coleção"  
}
//caixa.innerHTML=mapa.get("curso")

mapa.forEach((el, key)=>{
    // console.log(key)
    // console.log(el)
})

console.log(mapa.entries())
mapa.clear()
console.log(mapa.entries())
