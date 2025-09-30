window.addEventListener("load", function(){
    const salvar = document.querySelector("#btnSalvar");
    const txtnome = document.querySelector("#txtNome");
    
    salvar.addEventListener("click", function(){
            validarFormulario();
    });
});


function verificarNome(){
    const nome = document.getElementById("txtNome").value;
    //Não pode estar vazio
    // não pode numero
    padrao = new RegExp("\d"); // mesma coisa [0-9]
    if(nome){
         if(padrao.test(nome)) {
            console.log("o Nome contém numeros NÃO PODE")
         }
      }else{
        console.log("O nome esta vazio Não POde")
    }

    // funções test, search, match

}

function verificarCPF(){
    // 11 caracteres 
    //somente numeros
    const cpf = document.getElementById("txtCpf").value;
    // verifica se tem letras ou caracteres especiais
    let padrao = new RegExp("[a-zA-Z]")
    console.log(cpf.length);
    if (cpf.length != 11){
        console.log("numero de caracteres invalido")
    }else{
        if (padrao.test(cpf)){
              console.log("cpf contém  somente numeros")
          }
    
    }
}

function validarSenhas(senha1, senha2){
        if (senha1 === senha2){
            return true;
        }else{
            return false;
        }
}

function verificaSenha(senha){
    // maior que 8
    // menor que 15
    // pelo menos um caracter especial
    // pelo menos um numero
    // pelo menos uma letra maiúscula
    const expMai = /[A-ZÁÉÍÓÚÂÊÎÔÛÃÕÀÇ]/g;
    const expNum = /[0-9]/g; 
    const expEsp = /[\s!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/g; 
   
    let erro = 1;
    let resp = false;
    if (senha){
        if (senha.length < 8 || senha.length > 15){
        console.log("Tamanho da senha incorreta maior que 8 e menor 15");
    
        }else{
           if (!expMai.test(senha)) {
            console.log("A senha deve conter pelo menos uma letra maiúscula!");
            erro = 0;
          }
    

          if (!expNum.test(senha)) {
            console.log("A senha deve conter pelo menos um número (o zero não é permitido)!");
            erro = 0;
           }
           if (!expEsp.test(senha)) {
            console.log("A senha deve conter pelo menos um caractere especial!");
            erro = 0;
          }

          if(erro == 0){
            ret =  true;
          }
        }
    } else{
        console.log("Senha em branco");
    }
    return resp;  
}

function validarFormulario(){
    verificarNome();
    verificarCPF();
    const txtSenha1 = document.getElementById("txtSenha1").value;
    const txtSenha2 = document.getElementById("txtSenha2").value;

    let resp;
    resp = verificaSenha(txtSenha1);
    console.log(resp);

    resp = verificaSenha(txtSenha2);
    console.log(resp);

    resp = validarSenhas(txtSenha1,txtSenha2);
    console.log("Validacao senhas: "+resp)

}