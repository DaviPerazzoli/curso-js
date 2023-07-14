let amigo = {
    sexo: 'M',
    nome: 'José',
    peso: 85.7,
    engordar(p){
        this.peso += p
    }
}

console.log(amigo)
console.log(amigo.nome)
console.log(amigo.peso)
amigo.engordar(2)
console.log(amigo.peso)