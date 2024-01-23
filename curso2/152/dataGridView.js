const configDataGridView={
    endpoint:'produtos.json'
}

const dataGridView=(config)=>{
    fetch(config.endpoint)
    .then(res=>res.json())
    .then(res=>{
        console.log(res);
    })
}

