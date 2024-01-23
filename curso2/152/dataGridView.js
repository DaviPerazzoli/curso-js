const configDataGridView={
    endpoint:'produtos.json',
    idDestino: 'dataGridViewDados'
}

const dataGridView=(config)=>{
    const dataGridViewDados = document.getElementById('dataGridViewDados');
    fetch(config.endpoint)
    .then(res=>res.json())
    .then(res=>{
        res.forEach(el => {
            const linha = document.createElement('div');
            linha.setAttribute('class', 'linha');

            const c1=document.createElement('div')
            c1.setAttribute('class', 'c1')
            c1.innerHTML=el.id;
            linha.appendChild(c1);
            const c2=document.createElement('div')
            c2.setAttribute('class', 'c2')
            c2.innerHTML=el.produto;
            linha.appendChild(c2);
            const c3=document.createElement('div')
            c3.setAttribute('class', 'c3')
            c3.innerHTML=el.marca;
            linha.appendChild(c3);
            const c4=document.createElement('div')
            c4.setAttribute('class', 'c4')
            c4.innerHTML=el.modelo;
            linha.appendChild(c4);
            const c5=document.createElement('div')
            c5.setAttribute('class', 'c5')
            c5.innerHTML='D E V';
            linha.appendChild(c5);

            dataGridViewDados.appendChild(linha);

        });
    })
}

dataGridView(configDataGridView);