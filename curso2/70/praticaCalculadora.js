const teclasNum=[...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes=document.querySelector('.res')
const display = document.querySelector('#display')
const ton=document.getElementById('ton')
const tlimpar=document.getElementById('tlimpar')

teclasNum.map((el)=>{
    el.addEventListener('click', (evt)=>{
        if(display.innerHTML==='0'){
            display.innerHTML=evt.target.innerHTML
        }else{
            display.innerHTML+=evt.target.innerHTML
        }
    })
})

teclasOp.map((el)=>{
    el.addEventListener('click', (evt)=>{
        display.innerHTML+=evt.target.innerHTML

    })
})

tlimpar.addEventListener('click', ()=>{
    display.innerHTML='0'
})