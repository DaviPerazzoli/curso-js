const numero=document.getElementById('numero')
const btn_promessa = document.getElementById('btn_promessa')

btn_promessa.addEventListener('click', ()=>{
    promessa()
        .then((retorno)=>{ 
            numero.innerHTML=retorno
            numero.classList.remove('erro')
            numero.classList.add('ok')
        })
        

        .catch((retorno)=>{ 
            numero.innerHTML=retorno
            numero.classList.add('erro')
            numero.classList.remove('ok')
        })
    numero.innerHTML="processando..."
})

const promessa=()=>{
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
    return promise
}

numero.innerHTML="esperando"