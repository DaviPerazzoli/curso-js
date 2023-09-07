class Carro{ // * Classe Pai / BASE
    constructor(nome, portas=2){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }

    ligar=function(){
        this.ligado=true
    }

    desligar=function(){
        this.ligado=false
    }

    setCor=function(cor){
        this.cor=cor
    }
}

class Militar extends Carro{ // * Classe Filho
    constructor(nome, portas=2, blindagem, munição=0){
        super(nome, portas)
        this.blindagem=blindagem
        this.munição=munição
        this.setCor('verde')
    }

    atirar=function(){
        if(this.munição>0){
            this.munição--
        }
    }
}

class Utilitario extends Carro{
    constructor(nome, portas=2, funcao){
        super(nome, portas)
        this.funcao = funcao
    }
}

const c1=new Carro('normal')
c1.ligar()
c1.setCor('preto')

const c2=new Militar('lutador', 1, 100, 50)
console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${c1.ligado?"Sim":"Não"}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log('----------------------------')

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${c2.ligado?"Sim":"Não"}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.munição}`)

for(let c=c2.munição;c>0;c--){
    c2.atirar()
}

console.log(`Munição depois do tiroteio: ${c2.munição}`)
console.log(`Cor: ${c2.cor}`)
console.log('----------------------------')