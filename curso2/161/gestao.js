const resultado = document.getElementById('resultado');

const preencherDGV=()=>{
    endpoint=`http://127.0.0.1:1880/pesquisartodoscontatos`;
    
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        if(res.length==0){
            alert('Nenhum dado encontrado');
            return;
        }

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

            const colFuncoes = document.createElement('div');
            colFuncoes.classList.add('coluna');
            colFuncoes.classList.add('c6');
            linha.appendChild(colFuncoes);

            const imgEditar = document.createElement('img');
            imgEditar.setAttribute('class', 'imgEditar');
            imgEditar.setAttribute('src', './imagens/edit.svg');
            imgEditar.addEventListener('click',(_evt)=>{

            })
            colFuncoes.appendChild(imgEditar);

            const imgDeletar = document.createElement('img');
            imgDeletar.setAttribute('class', 'imgDeletar');
            imgDeletar.setAttribute('src', './imagens/delete.svg');
            imgDeletar.addEventListener('click',(_evt)=>{

            })
            colFuncoes.appendChild(imgDeletar);
        });
    });
}

preencherDGV();