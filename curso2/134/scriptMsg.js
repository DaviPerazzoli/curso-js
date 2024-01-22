import CaixaMensagem from './caixaMensagem.js';
const config={
    cor:'#48f',
    tipo:'sn', //* Tipos: ok, sn
    comando_sn:()=>{
        alert('Nossa, você aceitou mesmo');
    }
};

const btn_caixa_mensagem1 = document.getElementById('btn_caixa_mensagem1');
const btn_caixa_mensagem2 = document.getElementById('btn_caixa_mensagem2');
const btn_caixa_mensagem3 = document.getElementById('btn_caixa_mensagem3');

btn_caixa_mensagem1.addEventListener('click', ()=>{
    config.tipo='sn';
    CaixaMensagem.mostrar('Oi', 'Quer ser meu amigo?', config);
})

btn_caixa_mensagem2.addEventListener('click', ()=>{
    config.tipo='ok';
    CaixaMensagem.mostrar('olá', 'mundo', config);
})

btn_caixa_mensagem3.addEventListener('click', ()=>{
    config.tipo='sn';
    CaixaMensagem.mostrar('davi', 'perazzoli', config);
})