/*
* function* cores(){
*     yield 'vermelho'
*     yield 'verde'
*     yield 'azul'
* }
* 
* let itc = cores()
* 
* console.log(itc.next().value)
* console.log(itc.next().value)
* console.log(itc.next().value)
*/
/*
function* perguntas(){
    const nome = yield 'Qual o seu nome?'
    const esporte = yield 'Qual o seu esporte favorito?'
    return 'Seu nome é ' + nome + ' e seu esporte favortio é '+ esporte
}
*/

function* contador(){
    let i=0
    while(true){
        yield i++
        if(i > 5){
            break
        }
    }
}

let cont = contador()

for(c of cont){
    console.log(c)
}