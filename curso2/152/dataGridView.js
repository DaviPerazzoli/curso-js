const configDataGridView={
    endpoint:'http://127.0.0.1:1880/produtos',
    idDestino: 'dataGridViewDados'
}

const dataGridView=(config)=>{
    const dataGridViewDados = document.getElementById('dataGridViewDados');
    dataGridViewDados.innerHTML='';
    fetch(config.endpoint)
    .then(res=>res.json())
    .then(res=>{
        res.forEach(el => {
            const linha = document.createElement('div');
            linha.setAttribute('class', 'linha');

            const c1=document.createElement('div');
            c1.setAttribute('class', 'c1');
            c1.innerHTML=el.n_id_produto;
            linha.appendChild(c1);

            const c2=document.createElement('div');
            c2.setAttribute('class', 'c2');
            c2.innerHTML=el.s_nome_produto;
            linha.appendChild(c2);

            const c3=document.createElement('div');
            c3.setAttribute('class', 'c3');
            c3.innerHTML=el.s_marca_produto;
            linha.appendChild(c3);

            const c4=document.createElement('div');
            c4.setAttribute('class', 'c4');
            c4.innerHTML=el.s_modelo_produto;
            linha.appendChild(c4);

            const c5=document.createElement('div');
            c5.setAttribute('class', 'c5');

            linha.appendChild(c5);

            const imgDelete = document.createElement('img');
            imgDelete.setAttribute('class', 'icone');
            imgDelete.setAttribute('src', 'delete.svg');
            imgDelete.addEventListener('click', (evt)=>{
                const id_produto = evt.target.parentNode.parentNode.firstElementChild.innerHTML;
                const linha = evt.target.parentNode.parentNode;
                
                const endpoint='http://127.0.0.1:1880/removeproduto/'+id_produto;
                fetch(endpoint)
                .then(res=>{
                    if(res.status==200){
                        linha.remove();
                    }
                });
            })
            c5.appendChild(imgDelete);

            const imgEdit = document.createElement('img');
            imgEdit.setAttribute('class', 'icone');
            imgEdit.setAttribute('src', 'edit.svg');
            imgEdit.addEventListener('click', (evt)=>{
                const janelaEditar = document.getElementById('janelaEditar');
                janelaEditar.classList.remove('ocultar');
                
                const id_produto = evt.target.parentNode.parentNode.firstElementChild.innerHTML;
                const endpoint='http://127.0.0.1:1880/produto/'+id_produto;

                fetch(endpoint)
                .then(res=>res.json())
                .then(res=>{
                    console.log(res)
                    document.querySelector('#f_id_editar').value=res[0].n_id_produto;
                    document.querySelector('#f_produto_editar').value=res[0].s_nome_produto;
                    document.querySelector('#f_marca_editar').value=res[0].s_marca_produto;
                    document.querySelector('#f_modelo_editar').value=res[0].s_modelo_produto;
                });


            })
            c5.appendChild(imgEdit);

            const imgView = document.createElement('img');
            imgView.setAttribute('class', 'icone');
            imgView.setAttribute('src', 'view.svg');
            imgView.addEventListener('click', (evt)=>{
                const janelaView = document.getElementById('janelaView');
                janelaView.classList.remove('ocultar');


                const id_produto = evt.target.parentNode.parentNode.firstElementChild.innerHTML;
                const endpoint='http://127.0.0.1:1880/produto/'+id_produto;

                fetch(endpoint)
                .then(res=>res.json())
                .then(res=>{
                    console.log(res)
                    document.querySelector('#f_id').value=res[0].n_id_produto;
                    document.querySelector('#f_produto').value=res[0].s_nome_produto;
                    document.querySelector('#f_marca').value=res[0].s_marca_produto;
                    document.querySelector('#f_modelo').value=res[0].s_modelo_produto;
                });
            })
            c5.appendChild(imgView);

            dataGridViewDados.appendChild(linha);

        });
    });
}

const btn_ok = document.getElementById('btn_ok');
btn_ok.addEventListener('click', ()=>{
    document.querySelector('#janelaView').classList.add('ocultar');
});

const btn_cancelar = document.getElementById('btn_cancelar');
btn_cancelar.addEventListener('click', ()=>{
    document.querySelector('#janelaEditar').classList.add('ocultar');
});

const btn_gravar = document.getElementById('btn_gravar');
btn_gravar.addEventListener('click', ()=>{
    
    const id = document.querySelector('#f_id_editar').value
    const produto = document.querySelector('#f_produto_editar').value
    const marca = document.querySelector('#f_marca_editar').value
    const modelo = document.querySelector('#f_modelo_editar').value
    const endpoint=`http://127.0.0.1:1880/updateproduto/${id}/${produto}/${marca}/${modelo}`;

    fetch(endpoint)
    .then(res=>{
        if(res.status==200){
            document.querySelector('#janelaEditar').classList.add('ocultar');
            dataGridView(configDataGridView);
        }
    })
    
});



dataGridView(configDataGridView);