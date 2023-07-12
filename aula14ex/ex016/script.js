function contar(){
    var inicio = document.getElementById('iini').value
    var fim = document.getElementById('ifim').value
    var passo = document.getElementById('ipasso').value
    var res = document.querySelector('div#res')

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0 || passo == 0){
        alert("Preencha todos os campos corretamente!")
    }else{
        msg = ''
        for(c = Number(inicio); c <= Number(fim); c += Number(passo)){
            msg += c + '👉'
        }
        res.innerHTML = '<p>' + msg + '🏁 </p>'
    }
}

