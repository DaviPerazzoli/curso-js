const temperatura = document.getElementById('temperatura');
const nivel = document.getElementById('nivel');
const pressao = document.getElementById('pressao');

let dados={
    _temperatura:0,
    _pressao:0,
    _nivel:0,
    set valores(val){
        this._temperatura=val.temperatura;
        this._pressao=val.pressao;
        this._nivel=val.nivel;
        temperatura.innerHTML='Temperatura: '+this._temperatura;
        pressao.innerHTML='Pressão: '+this._pressao;
        nivel.innerHTML='Nível: '+this._nivel;
    },
    get valores(){
        return [this._temperatura,this._pressao,this._nivel];
    }
};

const endpoint = 'http://127.0.0.1:1880/davi';
const consultarAPI=()=>{
    fetch(endpoint)
    .then(retorno=>retorno.json())
    .then(retorno=>{
        dados.valores=retorno;
    })
    
}

let intervalo=setInterval(consultarAPI, 2000);

