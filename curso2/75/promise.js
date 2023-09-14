const numero=document.getElementById('numero')

let promise=new Promise((resolve, rejected)=>{
    let resultado=false
    let tempo = 3000

    setTimeout(()=>{
        resultado=true
        if(resultado){
            resolve("Deu tudo certo")
        }else{
            rejected("Deu tudo errado")
        }
    }, tempo)
})

//* Se der tudo ok:
promise.then((retorno)=>{ //* Coloca o resolve no retorno
    numero.innerHTML=retorno
    numero.classList.remove('erro')
    numero.classList.add('ok')
})

//* Se der algum erro:
promise.catch((retorno)=>{ //* Coloca o rejected no retorno
    numero.innerHTML=retorno
    numero.classList.add('erro')
    numero.classList.remove('ok')
})

numero.innerHTML="Processando..."