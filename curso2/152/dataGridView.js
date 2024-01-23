const configDataGridView={
    endpoint:'produtos.json',
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
            c1.innerHTML=el.id;
            linha.appendChild(c1);

            const c2=document.createElement('div');
            c2.setAttribute('class', 'c2');
            c2.innerHTML=el.produto;
            linha.appendChild(c2);

            const c3=document.createElement('div');
            c3.setAttribute('class', 'c3');
            c3.innerHTML=el.marca;
            linha.appendChild(c3);

            const c4=document.createElement('div');
            c4.setAttribute('class', 'c4');
            c4.innerHTML=el.modelo;
            linha.appendChild(c4);

            const c5=document.createElement('div');
            c5.setAttribute('class', 'c5');

            linha.appendChild(c5);

            const imgDelete = document.createElement('img');
            imgDelete.setAttribute('class', 'icone');
            imgDelete.setAttribute('src', 'delete.svg');
            c5.appendChild(imgDelete);

            const imgEdit = document.createElement('img');
            imgEdit.setAttribute('class', 'icone');
            imgEdit.setAttribute('src', 'edit.svg');
            c5.appendChild(imgEdit);

            const imgView = document.createElement('img');
            imgView.setAttribute('class', 'icone');
            imgView.setAttribute('src', 'view.svg');
            c5.appendChild(imgView);

            dataGridViewDados.appendChild(linha);

        });
    })
}

dataGridView(configDataGridView);