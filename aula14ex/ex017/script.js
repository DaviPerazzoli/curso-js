function tabuada(){
    let num = document.getElementById('inum').value
    let tab = document.getElementById('itab')

    if(num.length == 0){
        alert('Preencha o campo corretamente!')
    }else{
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            //tab.innerHTML += `<option>${num} x ${c} = ${num * c}</option>`
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            tab.appendChild(item)
        }
    }
}