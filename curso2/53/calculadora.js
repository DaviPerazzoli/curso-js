const resultado=document.getElementById('resultado')
const btnAdicao=document.getElementById('adicao')
const btnSubtracao=document.getElementById('subtracao')
const btnMultiplicacao=document.getElementById('multiplicacao')
const btnDivisao=document.getElementById('divisao')


const operacoes=[
    (val1,val2)=>{
        return val1+val2
    },
    (val1,val2)=>{
        return val1-val2
    },
    (val1,val2)=>{
        return val1*val2
    },
    (val1,val2)=>{
        return val1/val2
    }
]

btnAdicao.addEventListener('click', ()=>{
    let valor1=document.getElementById('valor1')
    let valor2=document.getElementById('valor2')
    resultado.innerHTML=operacoes[0](Number(valor1.value), Number(valor2.value))
    valor1.value=null
    valor2.value=null
})

btnSubtracao.addEventListener('click', ()=>{
    let valor1=document.getElementById('valor1')
    let valor2=document.getElementById('valor2')
    resultado.innerHTML=operacoes[1](Number(valor1.value), Number(valor2.value))
    valor1.value=null
    valor2.value=null
})

btnMultiplicacao.addEventListener('click', ()=>{
    let valor1=document.getElementById('valor1')
    let valor2=document.getElementById('valor2')
    resultado.innerHTML=operacoes[2](Number(valor1.value), Number(valor2.value))
    valor1.value=null
    valor2.value=null
})

btnDivisao.addEventListener('click', ()=>{
    let valor1=document.getElementById('valor1')
    let valor2=document.getElementById('valor2')
    resultado.innerHTML=operacoes[3](Number(valor1.value), Number(valor2.value))
    valor1.value=null
    valor2.value=null
})