const teclasNum=[...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes=document.querySelector('.res')
const display = document.querySelector('#display')
const ton=document.getElementById('ton')
const tlimpar=document.getElementById('tlimpar')
let ligado=true

teclasNum.map((el)=>{
    el.addEventListener('click', (evt)=>{
        if(!ligado)return
        
        if(display.innerHTML==='0'){
            display.innerHTML=evt.target.innerHTML
        }else{
            display.innerHTML+=evt.target.innerHTML
        }
    })
})

teclasOp.map((el)=>{
    el.addEventListener('click', (evt)=>{
        if(!ligado){
            return
        }
        display.innerHTML+=evt.target.innerHTML
    })
})

tlimpar.addEventListener('click', ()=>{
    if(!ligado){
        return
    }
    display.innerHTML='0'
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