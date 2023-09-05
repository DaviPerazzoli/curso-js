class Carro{
    canal="CFB Cursos"
    constructor(nome, tipo){
        this.nome=nome
        if(tipo==1){
            this.tipo="Esportivo"
            this.velmax=300
        }else if(tipo==2){
            this.tipo="Utilitário"
            this.velmax=100
        }else if(tipo==3){
            this.tipo="Passeio"
            this.velmax=160
        }else{
            this.tipo="Militar"
            this.velmax=180
        }
    }

    info(){
        return `Nome: ${this.nome}, Tipo: ${this.tipo}, Velocidade máxima: ${this.velmax}`
    }

    getNome(){
        return this.nome
    }

    getTipo(){
        return this.tipo
    }

    getVelmax(){
        return this.velmax
    }

    setNome(nome){
        this.nome = nome
    }

    setTipo(tipo){
        const carro = new Carro(this.nome, tipo)
        this.tipo=carro.tipo
        this.velmax=carro.velmax
    }

    getInfo(){
        const mapa = new Map()
        mapa.set('nome', this.nome)
        mapa.set('tipo', this.tipo)
        mapa.set('velmax', this.velmax)
        return mapa
    }
}

let c1=new Carro("Rapidão", 1)
let c2=new Carro("Super Luxo", 2)
let c3=new Carro("Bombadao", 4)
let c4=new Carro("Carrego tudo", 3)

c1.setNome("fodastico")
c1.setTipo(2)

console.log(c1.info())
console.log(c1.getNome())
console.log(c1.getTipo())
console.log(c1.getVelmax())
console.log('--------------')
console.log(c2.getInfo().get('nome'))
console.log(c2.getInfo().get('tipo'))
console.log(c2.getInfo().get('velmax'))

// console.log(c1.nome)
// console.log(c1.velmax)
// console.log(c1.tipo)
// console.log(c2.nome)
// console.log(c2.velmax)
// console.log(c2.tipo)
// console.log(c3.nome)
// console.log(c3.velmax)
// console.log(c3.tipo)
