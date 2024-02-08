const btn_novo = document.querySelector('#btn_novo');
const btn_pesquisar = document.querySelector('#btn_pesquisar');
const btn_gestao = document.querySelector('#btn_gestao');
const btn_filtrar = document.getElementById('btn_filtrar');
const menu = document.querySelector('#menu');
const principal = document.querySelector('#principal');

const selecionarAba=(aba)=>{
    const abas = [...document.getElementsByClassName('aba')];
    abas.map((el)=>{
        el.classList.remove('abaSelecionada');
    });
    aba.classList.add('abaSelecionada');
}

const abrirJanelaIframePrincipal=(url)=>{
    window.open(url, 'if_principal');
}

btn_novo.addEventListener('click', (_evt)=>{
    abrirJanelaIframePrincipal('./novo.html');
    selecionarAba(_evt.target);
});

btn_pesquisar.addEventListener('click', (_evt)=>{
    abrirJanelaIframePrincipal('./pesquisar.html');
    selecionarAba(_evt.target);
});

btn_gestao.addEventListener('click', (_evt)=>{
    abrirJanelaIframePrincipal('./gestao.html');
    selecionarAba(_evt.target);
});

btn_filtrar.addEventListener('click', (_evt)=>{
    abrirJanelaIframePrincipal('./filtrar.html');
    selecionarAba(_evt.target);
})