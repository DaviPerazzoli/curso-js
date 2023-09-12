const teclasNum=[...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes=document.querySelector('.res')
const display = document.querySelector('#display')
const ton=document.getElementById('ton')
const tlimpar=document.getElementById('tlimpar')
const tseparador=document.getElementById('tseparador')

let ligado=true
let sinal=false
let virgula=false

teclasNum.map((el)=>{
    el.addEventListener('click', (evt)=>{
        if(!ligado)return
        
        if(display.innerHTML==='0'){
            display.innerHTML=''
        }

        if(evt.target.innerHTML==','){
            if(sinal){
                return
            }
            if(virgula==false){
                virgula=true
                display.innerHTML+=evt.target.innerHTML
            }
        }else{
            display.innerHTML+=evt.target.innerHTML
            sinal=false
        }
    })
})

teclasOp.map((el)=>{
    el.addEventListener('click', (evt)=>{
        if(!ligado){
            return
        }

        if(sinal){
            return
        }

        
        display.innerHTML+=evt.target.innerHTML
        sinal=true
        virgula=false
    })
})

tlimpar.addEventListener('click', ()=>{
    if(!ligado){
        return
    }
    display.innerHTML='0'
    virgula=false
})

ton.addEventListener('click', ()=>{
    if(ligado){
        ligado=false
        display.innerHTML=''
    }else{
        ligado=true
        display.innerHTML='0'
    }
})