const btn_pesquisar = document.getElementById('btn_pesquisar');
const f_txt_pesquisa = document.getElementById('f_txt_pesquisa');
const resultado = document.getElementById('resultado');

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
        if(res.length==0){
            alert('Nenhum dado encontrado');
            return;
        }

        f_txt_pesquisa.value='';
        resultado.innerHTML='';
        resultado.style.border='1px solid #aaa';
        resultado.innerHTML='<div id="titulos" class="titulos">'+
            '<div class="linhaTitulos">'+
                '<div class="titulo c1">ID</div>'+
                '<div class="titulo c2">Nome</div>'+
                '<div class="titulo c3">Telefone</div>'+
                '<div class="titulo c4">Email</div>'+
                '<div class="titulo c5">Data de Nascimento</div>'+
            '</div>'+
        '</div>'+
        '<div id="dados" class="dados">'+
        '</div>';
        const dados = document.getElementById('dados');
        res.forEach(el => {
            const linha = document.createElement('div');
            linha.setAttribute('class', 'linhaDados');
            dados.appendChild(linha);

            const colID = document.createElement('div');
            colID.classList.add('coluna');
            colID.classList.add('c1');
            colID.innerHTML=el.n_contato_contato;
            linha.appendChild(colID);

            const colNome = document.createElement('div');
            colNome.classList.add('coluna');
            colNome.classList.add('c2');
            colNome.innerHTML=el.s_nome_contato;
            linha.appendChild(colNome);

            const colTelefone = document.createElement('div');
            colTelefone.classList.add('coluna');
            colTelefone.classList.add('c3');
            colTelefone.innerHTML=el.s_celular_contato;
            linha.appendChild(colTelefone);

            const colEmail = document.createElement('div');
            colEmail.classList.add('coluna');
            colEmail.classList.add('c4');
            colEmail.innerHTML=el.s_email_contato;
            linha.appendChild(colEmail);

            const colData = document.createElement('div');
            colData.classList.add('coluna');
            colData.classList.add('c5');
            let array_data=el.dt_dtnasc_contato.split('T')[0].split('-');
            
            colData.innerHTML=`${array_data[2]}/${array_data[1]}/${array_data[0]}`;
            linha.appendChild(colData);
        });
    });
})