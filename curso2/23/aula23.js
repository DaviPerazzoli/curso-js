function soma(...valores){
    let soma = 0
    for(n of valores){
        soma += n
    }
    return soma
}

console.log(soma(1,2,3,4,5))