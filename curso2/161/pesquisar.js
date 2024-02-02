const btn_pesquisar = document.getElementById('btn_pesquisar');
const f_txt_pesquisa = document.getElementById('f_txt_pesquisa');

btn_pesquisar.addEventListener('click', (evt)=>{
    const valorPesq = f_txt_pesquisa.value
    if(valorPesq==""){
        alert('Digite a pesquisa');
        f_txt_pesquisa.focus();
        return;
    }
    let f_pesq = document.querySelector('input[name=f_pesq]:checked').value;
    if(f_pesq=='id'){
        f_pesq='contato';
    }
    let endpoint=`http://127.0.0.1:1880/pesquisarcontatos/${f_pesq}/${valorPesq}`;
    
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        console.log(res);
    });
})