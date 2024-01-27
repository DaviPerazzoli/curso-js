const btn_gravar=document.getElementById('btn_gravar');
const btn_cancelar=document.getElementById('btn_cancelar');
const f_nome=document.getElementById('f_nome');
const f_telefone=document.getElementById('f_telefone');
const f_email=document.getElementById('f_email');
const f_dtnasc=document.getElementById('f_dtnasc');

const resetCampos=()=>{
    f_nome.value='';
    f_dtnasc.value='';
    f_email.value='';
    f_telefone.value='';
    f_nome.focus();
}

btn_gravar.addEventListener('click',(evt)=>{
    const dados={
    "f_nome":f_nome.value,
    "f_telefone":f_telefone.value,
    "f_email":f_email.value,
    "f_dtnasc":f_dtnasc.value
    }

    const cabecalho={
        method:'POST',
        body:JSON.stringify(dados)
    }
    
    const endpoint='http://127.0.0.1:1880/addcontatos';
    fetch(endpoint,cabecalho)
    .then(res=>{
        if(res.status==200){
            console.log('ok');
            resetCampos();
        }else{
            alert('Erro ao gravar dados');
        }
    });
});

btn_cancelar.addEventListener('click',()=>{
    resetCampos();
});