import CaixaMensagem from './caixaMensagem.js';
const config={
    cor:'#48f'
};
const caixa = new CaixaMensagem(config);

const btn_caixa_mensagem1 = document.getElementById('btn_caixa_mensagem1');
const btn_caixa_mensagem2 = document.getElementById('btn_caixa_mensagem2');
const btn_caixa_mensagem3 = document.getElementById('btn_caixa_mensagem3');

btn_caixa_mensagem1.addEventListener('click', ()=>{
    caixa.mostrar('teste', 'CFBCursos');
})

btn_caixa_mensagem2.addEventListener('click', ()=>{
    caixa.mostrar('olá', 'mundo');
})

btn_caixa_mensagem3.addEventListener('click', ()=>{
    caixa.mostrar('davi', 'perazzoli');
})