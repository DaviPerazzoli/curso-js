const resultado = document.getElementById('resultado');
const btn_editar = document.getElementById('btn_editar');
const btn_cancelar_edicao = document.getElementById('btn_cancelar_edicao');
const popUp = document.querySelector('#fundoPopup');
const nome= document.querySelector('#txt_nome');
const celular= document.querySelector('#txt_celular');
const email= document.querySelector('#txt_email');
const dtnasc= document.querySelector('#txt_dtnasc');
let id = null;

const editarContato=(id, nome, email, celular, dtnasc)=>{
    const endpoint = 'http://127.0.0.1:1880/editarcontatos';
    const dados={
        id_contato: id,
        nome_contato:nome,
        email_contato:email,
        celular_contato:celular,
        dtnasc_contato:dtnasc
    }
    
    const cabecalho={
        method:'POST',
        body: JSON.stringify(dados)
    }
    fetch(endpoint,cabecalho)
    .then(res=>{
        if(res.status == 200){
            preencherDGV();
            alert('Contato alterado com sucesso');
        }else{
            alert('Ocorreu um erro')
        }
    })
    .catch(rejected=>{
        alert('Erro de conexão');
    })
}

const deletarContato=(id_contato)=>{
    const endpoint = 'http://127.0.0.1:1880/deletarcontatos';

    const cabecalho={
        method:'POST',
        body: id_contato
    }

    fetch(endpoint, cabecalho)
    .then(res=>{
        if(res.status == 200){
            preencherDGV();
            alert('Contato apagado com sucesso');
        }else{
            alert('Ocorreu um erro');
        }
    })
    .catch(rejected=>{
        alert('Erro de conexão');
    })
}

const preencherDGV=()=>{
    endpoint=`http://127.0.0.1:1880/contatos`;
    
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        if(res.length==0){
            alert('Nenhum dado encontrado');
            return;
        }

        const dados = document.getElementById('dados');
        dados.innerHTML='';
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
                const linhaContato = _evt.target.parentNode.parentNode;
                id=linhaContato.firstElementChild.innerHTML
                nome.value = linhaContato.children[1].innerHTML;
                celular.value = linhaContato.children[2].innerHTML;
                email.value = linhaContato.children[3].innerHTML;
                dtnasc.value = linhaContato.children[4].innerHTML;

                popUp.classList.remove('oculto');

            })
            colFuncoes.appendChild(imgEditar);

            const imgDeletar = document.createElement('img');
            imgDeletar.setAttribute('class', 'imgDeletar');
            imgDeletar.setAttribute('src', './imagens/delete.svg');
            imgDeletar.addEventListener('click',(_evt)=>{
                const id_contato = _evt.target.parentNode.parentNode.firstElementChild.innerHTML;
                deletarContato(id_contato);
            })
            colFuncoes.appendChild(imgDeletar);
        });
    });
}

btn_editar.addEventListener('click',()=>{
    if(nome.value=='' ||email.value=='' || celular.value=='' || dtnasc.value==''){
        alert('Por favor não deixe nenhum campo vazio');
        return;
    }

    editarContato(id,nome.value,email.value,celular.value,dtnasc.value);

    popUp.classList.add('oculto');
})

btn_cancelar_edicao.addEventListener('click',()=>{
    popUp.classList.add('oculto');
})

preencherDGV();