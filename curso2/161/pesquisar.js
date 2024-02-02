const btn_pesquisar = document.getElementById('btn_pesquisar');
const f_txt_pesquisa = document.getElementById('f_txt_pesquisa');

btn_pesquisar.addEventListener('click', (evt)=>{
    if(f_txt_pesquisa.value==""){
        alert('Digite a pesquisa');
        f_txt_pesquisa.focus();
        return;
    }
    console.log(document.getElementsByName('f_pesq').value);
})