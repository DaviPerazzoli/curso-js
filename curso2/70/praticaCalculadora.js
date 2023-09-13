const teclasNum=[...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes=document.querySelector('.res')
const display = document.querySelector('#display')
const tcpy=document.getElementById('tcpy')
const tlimpar=document.getElementById('tlimpar')
const tseparador=document.getElementById('tseparador')
const tigual = document.getElementById('tigual')
const teste = document.getElementById('teste')

let sinal=false
let virgula=false

teclasNum.map((el)=>{
    el.addEventListener('click', (evt)=>{
        
        if(display.innerHTML==='0'){
            display.innerHTML=''
        }

        if(evt.target.innerHTML==','){
            if(sinal){
                return
            }
            if(virgula==false){
                virgula=true
                display.innerHTML+='.'
            }
        }else{
            display.innerHTML+=evt.target.innerHTML
            sinal=false
        }
    })
})

teclasOp.map((el)=>{
    el.addEventListener('click', (evt)=>{
        if(sinal){
            return
        }

        if(evt.target.innerHTML=='x'){
            display.innerHTML+='*'
        }else{
            display.innerHTML+=evt.target.innerHTML
        }

        sinal=true
        virgula=false
    })
})

tlimpar.addEventListener('click', ()=>{
    display.innerHTML='0'
    virgula=false
})

tcpy.addEventListener('click', (evt)=>{
    // teste.select()
    // teste.setSelectionRange(0, teste.value.length) //* MOBILE
    navigator.clipboard.writeText(display.innerHTML)
})