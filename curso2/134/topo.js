// const head = document.head;
const body = document.body;
// const estilo='<link rel="stylesheet" href="topo.css">';
// head.innerHTML+=estilo;

const estiloTopo='display: flex;'+
    'justify-content: space-between;'+
    'align-items: center;'+
    'background-color: blue;';

const topo=document.createElement('div');
topo.setAttribute('id', 'topo');
topo.setAttribute('class', 'topo');
topo.setAttribute('style', estiloTopo);

body.prepend(topo);

const logo = '<div id="logo" class="logo">'+
                '<img src="logo.jpg" title="CFBCursos">'+
                '</div>';

topo.innerHTML+=logo;

const login = '<div id="login" class="login">'+
                '<p id="matricula">Matrícula:<span></span></p>'+
                '<p id="nome">Nome:<span></span></p>'+
                '</div>';

topo.innerHTML+=login;