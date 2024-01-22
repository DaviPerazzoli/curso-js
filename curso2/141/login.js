export default class Login{
    static logado=false;
    static matLogado=null;
    static nomeLogado=null;
    static acessoLogado=null;
    static endpoint='http://localhost:8080/';
//* http://localhost:8080/?matricula=123&senha=321

    static login=(mat, pas)=>{
        this.endpoint+=`?matricula=${mat}&senha=${pas}`;
        fetch(this.endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado=true;
                this.matLogado=mat;
                this.nomeLogado=res.nome;
                this.acessoLogado=res.acesso;
                console.log(res)
            }else{
                console.log('Usuário não encontrado');
            }
        })
        .catch(res=>{
            console.log('Falha na conexão');
        });
    }
}