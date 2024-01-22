export default class CaixaMensagem{
    static cor='#888';
    static destino=null;
    static divMsg=null;
    static tipo=null;
    static comando_sn = null;

    static mostrar=(titulo, texto, config)=>{
        this.cor=config.cor;
        this.tipo=config.tipo;
        this.comando_sn=config.comando_sn;
        this.destino=document.body;
        this.titulo=titulo;
        this.texto=texto;
        this.divMsg = document.createElement('div');
        const estiloDivMsg = 
            'display: flex;'+
            'justify-content: center;'+
            'align-items: center;'+
            'position: absolute;'+
            'top: 0px;'+
            'left: 0px;'+
            'width: 100%;'+
            'height: 100dvh;'+
            'background-color: rgb(0,0,0,0.7);';
        this.divMsg.setAttribute('id', 'divMsg');
        this.divMsg.setAttribute('style', estiloDivMsg);
        this.destino.prepend(this.divMsg);

        const areaCaixaMsg = document.createElement('div');
        const estiloAreaCaixaMsg = 
            'display: flex;'+
            'justify-content: flex-start;'+
            'align-items: center;'+
            'flex-direction: column;'+
            'border-radius: 5px;'+
            'box-shadow: 0px 0px 5px rgba(254, 254, 254, 0.1);'+
            'width: 300px;';
            areaCaixaMsg.setAttribute('id', 'areaCaixaMsg');
            areaCaixaMsg.setAttribute('style', estiloAreaCaixaMsg);
        this.divMsg.appendChild(areaCaixaMsg);

        const tituloCaixa = document.createElement('div');
        const estilotituloCaixa = 
            'display: flex;'+
            'justify-content: flex-start;'+
            'align-items: center;'+
            'background-color: '+this.cor+';'+
            'width: 100%;'+
            'color: #fff;'+
            'padding: 5px;'+
            'border-radius: 5px 5px 0 0;';
        tituloCaixa.setAttribute('id', 'tituloCaixa');
        tituloCaixa.setAttribute('style', estilotituloCaixa);
        tituloCaixa.innerHTML=this.titulo;
        areaCaixaMsg.appendChild(tituloCaixa);

        const corpoCaixa = document.createElement('div');
        const estiloCorpoCaixa = 
            'display: flex;'+
            'justify-content: flex-start;'+
            'align-items: center;'+
            'background-color: #eee;'+
            'width: 100%;'+
            'color: #000;'+
            'padding: 30px 5px;';
        corpoCaixa.setAttribute('id', 'corpoCaixa');
        corpoCaixa.setAttribute('style', estiloCorpoCaixa);
        corpoCaixa.innerHTML=this.texto;
        areaCaixaMsg.appendChild(corpoCaixa);
        
        const rodapeCaixa = document.createElement('div');
        const estiloRodapeCaixa = 
            'display: flex;'+
            'justify-content: space-around;'+
            'align-items: center;'+
            'background-color: #ccc;'+
            'width: 100%;'+
            'color: #fff;'+
            'padding: 5px;'+
            'border-radius: 0 0 5px 5px;';
        rodapeCaixa.setAttribute('id', 'rodapeCaixa');
        rodapeCaixa.setAttribute('style', estiloRodapeCaixa);
        areaCaixaMsg.appendChild(rodapeCaixa);

        const estiloBtn=
            'padding: 10px 50px;'+
            'border-radius: 5px;'+
            'box-shadow: 1px 1px 3px rgba(0,0,0,0.3);'+
            'color: white;'+
            'background-color: '+this.cor+';';

        if(this.tipo=='ok'){
            const btn_ok = document.createElement('button');
            btn_ok.setAttribute('id', 'btn_ok');
            btn_ok.setAttribute('style', estiloBtn);
            btn_ok.innerHTML='OK';
            btn_ok.addEventListener('click', ()=>{
                this.ocultar();
            })
            rodapeCaixa.appendChild(btn_ok);
        }else if(this.tipo=='sn'){
            const btn_sim = document.createElement('button');
            btn_sim.setAttribute('id', 'btn_ok');
            btn_sim.setAttribute('style', estiloBtn);
            btn_sim.innerHTML='SIM';
            btn_sim.addEventListener('click', ()=>{
                this.comando_sn()
                this.ocultar();
            })
            rodapeCaixa.appendChild(btn_sim);

            const btn_nao = document.createElement('button');
            btn_nao.setAttribute('id', 'btn_ok');
            btn_nao.setAttribute('style', estiloBtn);
            btn_nao.innerHTML='NÃO';
            btn_nao.addEventListener('click', ()=>{
                this.ocultar();
            })
            rodapeCaixa.appendChild(btn_nao);
        }
    }

    static ocultar=()=>{
        this.divMsg.remove()
    }
}