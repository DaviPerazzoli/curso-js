const funcao = function(v1, v2){return v1+v2}

const f = new Function("v1","v2", "return v1+v2") // ! Função construtor

console.log(f(10, 5))
console.log(funcao(10,20))