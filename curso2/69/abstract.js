class CarroPadrao{
    //* Classe abstrata
    constructor(){
        if(this.constructor===CarroPadrao){
            throw new TypeError('Esta classe não pode ser instanciada')
        }
        if(this.ligar===undefined){
            throw new TypeError('É obrigatório implementar o método ligar')
        }
        if(this.desligar===undefined){
            throw new TypeError('É obrigatório implementar o método desligar')
        }
        this.rodas=4
        this.portas=4
        this.ligado=false
    }
}

class Carro extends CarroPadrao{
    constructor(tipo, estagioTurbo){
        super()
        this.turbo = new Turbo(estagioTurbo)
        if(tipo==1){
            this.velMax=120
            this.nome='normal'
        }else if(tipo==2){
            this.velMax=160
            this.nome='esportivo'
        }else if(tipo==3){
            this.velMax=200
            this.nome='super esportivo'
        }
        this.velMax+=this.turbo.potencia
    }

    info(){
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log(this.rodas)
        console.log(this.portas)
        console.log(this.ligado)
        console.log('--------------------')
    }

    ligar(){
        this.ligado=true
    }

    desligar(){
        this.ligado=false
    }
}

class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4, estagioTurbo)
        this.velMax=300 + this.turbo.potencia
        this.nome='Carro especial'
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Velocidade Máxima: ${this.velMax}`)
        console.log(`Turbo: ${this.turbo.potencia}`)
        console.log('--------------------')
    }
}

class Turbo{
    constructor(e){
        if(e==0){
            this.potencia=0
        }else if(e==1){
            this.potencia=50
        }else if(e==2){
            this.potencia=75
        }else if(e==3){
            this.potencia=100
        }
    }
}

c1=new Carro(1, 1)
c1.info()