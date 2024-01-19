const p_texto = document.getElementById('p_texto');
const btn_texto = document.getElementById('btn_texto');


p_texto.innerHTML='Esperando';

const obterDados=()=>{
    const endpoint = 'http://127.0.0.1:1880/davi';
    fetch(endpoint)
    .then((res)=>res.json())
    .then(dados=>{
        p_texto.innerHTML='Temperatura: '+dados.temperatura+'<br>'+'Nível: ' + dados.nivel+'<br>'+'Pressão: '+dados.pressao
    })
    .catch(retorno=>console.log(retorno));

    p_texto.innerHTML='Procurando conselho...';
}

const gravarDados=()=>{
    const endpoint='http://127.0.0.1:1880/gravar';
    fetch(endpoint,cabecalho)
    .then(res=>res.json())
    .then(ret=>{console.log(ret)});
}

let intervalo=setInterval(obterDados, 5000);

btn_texto.addEventListener('click',gravarDados);

let dados={
    nome: 'Bruno',
    canal: 'CFB',
    curso: 'JS'
};

let cabecalho={
    method:'POST',
    body:JSON.stringify(dados)
};

