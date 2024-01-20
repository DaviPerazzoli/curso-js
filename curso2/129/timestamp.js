const timer = document.querySelector('#timer');
const btn_comecar = document.getElementById('btn_comecar');
const btn_contar = document.getElementById('btn_contar');
const btn_finalizar = document.getElementById('btn_finalizar');
const voltas=document.getElementById('voltas');

let intervalo;
let ligado=false;
let timeStampAntigo;

const converterHora=(milisegundos)=>{
    // return String(Math.floor(milisegundos/3600000)).padStart(2,'0');
    let hora = Math.floor(milisegundos/3600000);
    return (hora<10?'0'+hora:hora);
}

const converterMinuto=(milisegundos)=>{
    // return String(Math.floor(milisegundos/60000)%60).padStart(2,'0');
    let minuto = Math.floor(milisegundos/60000)%60;
    return (minuto<10?'0'+minuto:minuto);
}

const converterSegundo=(milisegundos)=>{
    // return String(Math.floor(milisegundos/1000)%60).padStart(2,'0');
    let segundo=Math.floor(milisegundos/1000)%60;
    return (segundo<10?'0'+segundo:segundo);
}

const converterMilisegundo=(milisegundos)=>{
    return String(milisegundos%1000).padStart(3,'0');
}

const contador=()=>{
    const timeStampAtual=Date.now();
    let tempoPassado = timeStampAtual-timeStampAntigo;
    timer.innerHTML= converterHora(tempoPassado) + ':'+converterMinuto(tempoPassado) + ':'+converterSegundo(tempoPassado);
}

const contarVolta=()=>{
    const timeStampAtual = Date.now();
    let tempoPassado = timeStampAtual-timeStampAntigo;
    const volta = document.createElement('p');
    volta.classList.add('volta')
    volta.innerHTML = converterHora(tempoPassado) + ':'+converterMinuto(tempoPassado) + ':'+converterSegundo(tempoPassado) + ':' + converterMilisegundo(tempoPassado);
    voltas.appendChild(volta)
}

btn_comecar.addEventListener('click', ()=>{
    timeStampAntigo = Date.now();
    intervalo=setInterval(contador, 1000);
    ligado=true
})

btn_finalizar.addEventListener('click', ()=>{
    clearInterval(intervalo);
    timer.innerHTML='00:00:00';
    voltas.innerHTML=''
    ligado=false
})

btn_contar.addEventListener('click', ()=>{
    if(ligado){
        contarVolta();
    }
})
