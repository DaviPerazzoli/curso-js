function carregar(){
    var msg = document.getElementById("hora")
    var img = document.getElementById("imagem")
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`

    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'imagens/dia.png'
        document.body.style.background = "#F3D8A1"
    }else if(hora > 12 && hora < 18){
        //BOA TARDE
        img.src = 'imagens/tarde.png'
        document.body.style.background = "#F15503"
    }else{
        //BOA NOITE
        img.src = "imagens/noite.png"
        document.body.style.background = "#5A6976"
    }
}