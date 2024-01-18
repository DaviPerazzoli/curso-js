const long = document.getElementById('long')
const lati = document.getElementById('lati')

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        (pos)=>{
            long.innerHTML='Longitude:'+pos.coords.longitude
            lati.innerHTML='Latitude:'+pos.coords.latitude
        }, 
        ()=>{
            console.log('erro')
        })
}else{
    console.log('Geolocalização não ativada')
}

// function mostrarLocalizacao(pos){
//     long.innerHTML='Longitude:'+pos.coords.longitude
//     lati.innerHTML='Latitude:'+pos.coords.latitude
// }

// function erroLocalizacao(){
//     console.log('erro')
// }