const div_data=document.getElementById('div_data')
const div_relogio=document.getElementById('div_relogio')
const btn_ativar=document.getElementById('ativar')
const btn_parar=document.getElementById('btn_parar')
const tmp_alarme=document.getElementById('tmp_alarme')
const hora_alarme=document.getElementById('hora_alarme')
const timer=document.getElementById('timer')

const data=new Date()

const data_r = `${data.getDate()<10?"0"+data.getDate(): data.getDate()}/${data.getMonth()<10?"0"+data.getMonth(): data.getMonth()}/${data.getFullYear()}`
div_data.innerHTML=data_r

const som_alarme = new Audio('alarme.mp3')
som_alarme.loop=-1

let ts_atual=null
let ts_alarme=null
let alarme_ativado=false
let alarme_tocando=false

btn_ativar.addEventListener('click', ()=>{
    ts_atual=Date.now()
    ts_alarme=ts_atual + (Number(tmp_alarme.value) *1000)
    alarme_ativado=true
    const data_alarme=new Date(ts_alarme)
    hora_alarme.innerHTML="Hora do alarme: "+data_alarme.getHours()+":"+data_alarme.getMinutes()+":"+data_alarme.getSeconds()
    tmp_alarme.value=null
})

btn_parar.addEventListener('click', ()=>{
    alarme_ativado=false
    alarme_tocando=false
    hora_alarme.innerHTML="Hora do Alarme:"
    timer.classList.remove('alarme')
    som_alarme.pause()
    som_alarme.currentTime=0
})



const relogio=()=>{
    const data=new Date()
    let hora = data.getHours()
    hora = hora<10?'0'+hora: hora
    let minuto = data.getMinutes()
    minuto = minuto<10?'0'+minuto: minuto
    let segundo = data.getSeconds()
    segundo=segundo<10?'0'+segundo:segundo
    let horario=hora+':'+minuto+':'+segundo
    div_relogio.innerHTML= horario

    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando=true
            som_alarme.play()
            timer.classList.add('alarme')
        }
    }
}

setInterval(relogio, 1000)