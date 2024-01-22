import CaixaMensagem from './caixaMensagem.js';
const config={
    cor:'#48f'
};

const btn_caixa_mensagem1 = document.getElementById('btn_caixa_mensagem1');
const btn_caixa_mensagem2 = document.getElementById('btn_caixa_mensagem2');
const btn_caixa_mensagem3 = document.getElementById('btn_caixa_mensagem3');

btn_caixa_mensagem1.addEventListener('click', ()=>{
    CaixaMensagem.config(config);
    CaixaMensagem.mostrar('teste', 'CFBCursos');
    caixa.mostrar('teste', 'CFBCursos');
})

btn_caixa_mensagem2.addEventListener('click', ()=>{
    CaixaMensagem.config({cor: '#ee0'});
    CaixaMensagem.mostrar('olá', 'mundo');
})

btn_caixa_mensagem3.addEventListener('click', ()=>{
    CaixaMensagem.config({cor: '#000'})
    CaixaMensagem.mostrar('davi', 'perazzoli');
})