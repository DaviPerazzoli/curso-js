const p_array = document.querySelector('#array')
const btnReduzir = document.querySelector('#btnReduzir')
const resultado = document.querySelector('#resultado')

const elementosArray=[1,2,3,4,5]
let ant=[]
let atu=[]

p_array.innerHTML= `[${elementosArray}]`

btnReduzir.addEventListener('click', (evt)=>{
    resultado.innerHTML=elementosArray.reduce((anterior, atual, pos, array)=>{
        ant.push(anterior)
        atu.push(atual)
        return atual+anterior
    })
    resultado.innerHTML+="<br> Valor anterior: "+ant
    resultado.innerHTML+="<br> Valor atual: "+atu
})