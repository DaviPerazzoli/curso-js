function tabuada(){
    var num = document.getElementById('inum').value
    var tab = document.getElementById('itab')

    if(num.length == 0){
        alert('Preencha o campo corretamente!')
    }else{
        tab.innerHTML = ''
        for(c = 1; c <= 10; c++){
            tab.innerHTML += `<option>${num} x ${c} = ${num * c}</option>`
        }
    }
}