export default class Login{
    static logado=false;
    static matLogado=null;
    static nomeLogado=null;
    static acessoLogado=null;
    static endpoint='';
//* http://localhost:8080/?matricula=123&senha=321

    static login=(mat, pas)=>{
        this.endpoint=`http://localhost:8080/?matricula=${mat}&senha=${pas}`;
        fetch(this.endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado=true;
                this.matLogado=mat;
                this.nomeLogado=res.nome;
                this.acessoLogado=res.acesso;
                console.log(res);
                this.ocultarLogin();
                alert(`Olá ${this.nomeLogado}, seu número de acesso é ${this.acessoLogado}.`);
            }else{
                alert('Usuário não encontrado');
            }
        })
        .catch(res=>{
            console.log('Falha na conexão');
        });
    }

    static mostrarLogin=()=>{
        this.fundoLogin=document.createElement('div');
        this.fundoLogin.setAttribute('id', 'fundoLogin');
        this.fundoLogin.setAttribute('class', 'fundoLogin');
        document.body.prepend(this.fundoLogin);

            const baseLogin=document.createElement('div');
            baseLogin.setAttribute('id', 'baseLogin');
            baseLogin.setAttribute('class', 'baseLogin');
            this.fundoLogin.appendChild(baseLogin);

                const elementosLogin=document.createElement('div');
                elementosLogin.setAttribute('id', 'elementosLogin');
                elementosLogin.setAttribute('class', 'elementosLogin');
                baseLogin.appendChild(elementosLogin);

                    const campoLoginUser=document.createElement('div');
                    campoLoginUser.setAttribute('class', 'campoLogin');
                    elementosLogin.appendChild(campoLoginUser);
                    
                        const label_f_username=document.createElement('label');
                        label_f_username.setAttribute('for', 'f_username');
                        label_f_username.innerHTML='Username ';
                        campoLoginUser.appendChild(label_f_username);
                        
                        const f_username=document.createElement('input');
                        f_username.setAttribute('type', 'text');
                        f_username.setAttribute('name', 'f_username');
                        f_username.setAttribute('id', 'f_username');
                        
                        campoLoginUser.appendChild(f_username);

                    const campoLoginPass=document.createElement('div');
                    campoLoginPass.setAttribute('class', 'campoLogin');
                    elementosLogin.appendChild(campoLoginPass);

                        const label_f_password=document.createElement('label');
                        label_f_password.setAttribute('for', 'f_password');
                        label_f_password.innerHTML='Password ';
                        campoLoginPass.appendChild(label_f_password);
                        
                        const f_password=document.createElement('input');
                        f_password.setAttribute('type', 'password');
                        f_password.setAttribute('name', 'f_password');
                        f_password.setAttribute('id', 'f_password');
                        campoLoginPass.appendChild(f_password);

                    const botoesLogin=document.createElement('div');
                    botoesLogin.setAttribute('class', 'botoesLogin');
                    elementosLogin.appendChild(botoesLogin);

                        const btn_login=document.createElement('button');
                        btn_login.setAttribute('id', 'btn_login');
                        btn_login.innerHTML='Login';
                        btn_login.addEventListener('click', ()=>{
                            const usuario = f_username.value;
                            const senha = f_password.value;

                            if (usuario=='' || senha=='') {
                                alert('Preencha ambos os campos para fazer login.');
                            }else{
                                this.login(usuario, senha);
                            }
                        })
                        botoesLogin.appendChild(btn_login);

                        const btn_cancelar=document.createElement('button');
                        btn_cancelar.setAttribute('id', 'btn_cancelar');
                        btn_cancelar.innerHTML='Cancelar';
                        btn_cancelar.addEventListener('click', ()=>{
                            this.ocultarLogin();
                        })
                        botoesLogin.appendChild(btn_cancelar);

                const logoLogin=document.createElement('div');
                logoLogin.setAttribute('id', 'logoLogin');
                logoLogin.setAttribute('class', 'logoLogin');
                baseLogin.appendChild(logoLogin);

                    const imgGremio=document.createElement('img');
                    imgGremio.setAttribute('src', 'gremio.png');
                    imgGremio.setAttribute('alt', 'Grêmio');
                    logoLogin.appendChild(imgGremio);
    }

    static ocultarLogin=()=>{
        this.fundoLogin.remove()
    }
}