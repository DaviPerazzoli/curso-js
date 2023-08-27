let vaga = ['carro1', 'carro2', 'carro3']
let num = [1,5,2,3,9,5]
/*
* console.log(num.length)
* console.log(num)
* num.sort()
* num.push(5)
* num.push(90)
* console.log(num)
* 
* for(let i = 0; i < num.length; i++){
*     console.log(num[i])
* }
*/

for(let i in num){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

console.log(num.indexOf(9))