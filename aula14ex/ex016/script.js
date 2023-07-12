function contar(){
    let inicio = document.getElementById('iini').value
    let fim = document.getElementById('ifim').value
    let passo = document.getElementById('ipasso').value
    let res = document.querySelector('div#res')

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0 || passo == 0){
        alert("Preencha todos os campos corretamente!")
    }else{
        msg = ''
        for(let c = Number(inicio); c <= Number(fim); c += Number(passo)){
            msg += c + '👉'
        }
        res.innerHTML = '<p>' + msg + '🏁 </p>'
    }
}

