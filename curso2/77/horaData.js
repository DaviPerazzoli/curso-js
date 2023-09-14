const div_data=document.getElementById('data')
const div_relogio=document.getElementById('relogio')
// const data_r=new Date()

//console.log(Date.now()) // Timestamp

// const hoje = `${data.getDate()<10?"0"+data.getDate(): data.getDate()}/${data.getMonth()<10?"0"+data.getMonth(): data.getMonth()}/${data.getFullYear()}`
// div_data.innerHTML=hoje
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
}

relogio()

setInterval(relogio, 1000)