let usuarios = [];
let usuarioLogado = null;

function cadastrar() {
    const nomeInput = document.getElementById("usuarioInput");
    const senhaInput = document.getElementById("senhaInput");
    const msg = document.getElementById("msgLogin");

    const nome = nomeInput.value;
    const senha = senhaInput.value;

    if (nome === "" || senha === "") {
        msg.innerText = "Preencha todos os campos!";
        msg.style.color = "red";
        return;
    }

    const existe = usuarios.find(user => user.nome === nome);

    if (existe) {
        msg.innerText = "Usuário já existe!";
        msg.style.color = "orange";
    } else {
        
        usuarios.push({ nome: nome, senha: senha, saldo: 0.0 });
        
        msg.innerText = "Cadastrado com sucesso! Faça login.";
        msg.style.color = "green";
        
        nomeInput.value = "";
        senhaInput.value = "";
    }
}

function entrar() {
    const nomeInput = document.getElementById("usuarioInput").value;
    const senhaInput = document.getElementById("senhaInput").value;
    const msg = document.getElementById("msgLogin");

    const usuarioEncontrado = usuarios.find(user => user.nome === nomeInput && user.senha === senhaInput);

    if (usuarioEncontrado) {
        // SUCESSO!
        usuarioLogado = usuarioEncontrado; 
        abrirBanco(); 
    } else {
        msg.innerText = "Usuário ou senha incorretos!";
        msg.style.color = "red";
    }
}
function abrirBanco() {
   
    document.getElementById("telaLogin").style.display = "none";
 
    document.getElementById("telaBanco").style.display = "block";
    
    document.getElementById("nomeUsuario").innerText = usuarioLogado.nome;
    mostrarMensagem("Bem-vindo de volta!");
}

function logout() {
    usuarioLogado = null;
    
  
    document.getElementById("telaBanco").style.display = "none";
    document.getElementById("telaLogin").style.display = "block";
    
    document.getElementById("usuarioInput").value = "";
    document.getElementById("senhaInput").value = "";
    document.getElementById("msgLogin").innerText = "Entre ou cadastre-se";
    document.getElementById("msgLogin").style.color = "#555";
}

function mostrarMensagem(texto, cor = "black") {
    const visor = document.getElementById("mensagem");
    visor.style.color = cor;
    visor.innerText = texto;
}

function lerValor() {
    const input = document.getElementById("valorInput");
    const valor = parseFloat(input.value);
    if (isNaN(valor)) return 0;
    input.value = ""; 
    return valor;
}

function depositar() {
    const valor = lerValor();
    if (valor <= 0) {
        mostrarMensagem("Valor inválido.", "red");
        return;
    }
   
    usuarioLogado.saldo += valor;
    mostrarMensagem(`Depósito realizado! Saldo atual: R$ ${usuarioLogado.saldo.toFixed(2)}`, "green");
}

function sacar() {
    const valor = lerValor();
    if (valor <= 0) {
        mostrarMensagem("Valor inválido.", "red");
        return;
    }
    if (valor > usuarioLogado.saldo) {
        mostrarMensagem("Saldo insuficiente.", "red");
        return;
    }
    usuarioLogado.saldo -= valor;
    mostrarMensagem(`Saque realizado! Saldo atual: R$ ${usuarioLogado.saldo.toFixed(2)}`, "orange");
}

function verSaldo() {
    mostrarMensagem(`Seu saldo: R$ ${usuarioLogado.saldo.toFixed(2)}`, "blue");
}