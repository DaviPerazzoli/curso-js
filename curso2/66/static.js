class Npc{
    static alerta=false
    constructor(energia){
        this.energia=energia
    }
    info=function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${Npc.alerta}`)
        console.log(`-------------------------`)
    }

    static alertar=function(){
        Npc.alerta=true
    }
}

Npc.alertar()

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)

// Npc.alerta=true

npc1.info()
npc2.info()
npc3.info()