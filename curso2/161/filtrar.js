import {formatarData} from './funcoesAgenda.js';

const resultado = document.getElementById('resultado');
const f_filtro_nome = document.getElementById('f_filtro_nome');
const f_filtro_celular = document.getElementById('f_filtro_celular');
const f_filtro_email = document.getElementById('f_filtro_email');
const f_filtro_dtnasc = document.getElementById('f_filtro_dtnasc');
const f_filtro_id = document.getElementById('f_filtro_id');


let atributo = null;

const preencherDGV=(endpoint)=>{
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        const dados = document.getElementById('dados');
        if(res.length==0){
            dados.innerHTML='';
            return;
        }
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
            let dataCortada=el.dt_dtnasc_contato.split('T')[0];
            colData.innerHTML=formatarData(dataCortada, '/');
            linha.appendChild(colData);
        });
    });
}

const limparInputs=()=>{
    f_filtro_nome.value='';
    f_filtro_id.value='';
    f_filtro_celular.value='';
    f_filtro_email.value='';
    f_filtro_dtnasc.value='';
}

const realizarFiltragem=(atributo,valor)=>{
    let endpoint;
    if(valor==''){
        endpoint='http://127.0.0.1:1880/contatos';
    }else{
        endpoint=`http://127.0.0.1:1880/pesquisarcontatos/${atributo}/${valor}`;
    }
    preencherDGV(endpoint);
}

f_filtro_nome.addEventListener('input',(_evt)=>{
    atributo = 'nome';
    let valor = _evt.target.value;
    limparInputs(_evt.target)
    _evt.target.value = valor;
    realizarFiltragem(atributo,valor);
})

f_filtro_id.addEventListener('input',(_evt)=>{
    atributo = 'contato';
    let valor = _evt.target.value;
    limparInputs(_evt.target)
    _evt.target.value = valor;
    realizarFiltragem(atributo,valor);
})

f_filtro_celular.addEventListener('input',(_evt)=>{
    atributo = 'celular';
    let valor = _evt.target.value;
    limparInputs(_evt.target)
    _evt.target.value = valor;
    realizarFiltragem(atributo,valor);
})

f_filtro_email.addEventListener('input',(_evt)=>{
    atributo = 'email';
    let valor = _evt.target.value;
    limparInputs(_evt.target)
    _evt.target.value = valor;
    realizarFiltragem(atributo,valor);
})

f_filtro_dtnasc.addEventListener('input',(_evt)=>{
    atributo = 'dtnasc';
    let valor = _evt.target.value;
    limparInputs(_evt.target)
    _evt.target.value = valor;
    realizarFiltragem(atributo,valor);
})

preencherDGV('http://127.0.0.1:1880/contatos');