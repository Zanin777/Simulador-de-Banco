# 🏦 Banco Digital (Simulação)

Um projeto simples de **Banco Digital em JavaScript puro**, com sistema de cadastro, login e operações bancárias básicas (depósito, saque e consulta de saldo), totalmente no navegador.

Ideal para praticar:
- Manipulação de DOM
- Eventos com `onclick`
- Arrays e objetos
- Lógica de programação
- Organização de projeto web (HTML + CSS + JS)

---

## 🚀 Funcionalidades

### 🔐 Sistema de Login
- Criar conta
- Validar usuário existente
- Impedir cadastro duplicado
- Login com verificação de senha
- Logout

### 💰 Operações Bancárias
- Depositar valores
- Sacar valores (com verificação de saldo)
- Visualizar saldo atualizado
- Mensagens dinâmicas de feedback

---

## 🛠 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**

Não utiliza backend nem banco de dados.  
Os dados ficam armazenados em memória (array no JavaScript).

---

## 📂 Estrutura do Projeto

```
📁 banco-digital
│-- sintex.html
│-- style.css
│-- script.js
```

### 📄 sintex.html
Responsável pela estrutura da aplicação:
- Tela de login
- Tela do banco
- Inputs e botões

### 🎨 style.css
- Estilização moderna
- Layout centralizado
- Grid para botões
- Animação suave (fadeIn)

### ⚙ script.js
Contém toda a lógica do sistema:
- Cadastro de usuários
- Login
- Controle de saldo
- Depósito
- Saque
- Logout
- Manipulação do DOM

---

## 📌 Como Executar o Projeto

1. Baixe os arquivos
2. Coloque todos na mesma pasta
3. Abra o arquivo `sintex.html` no navegador

Pronto ✅

---

## 📖 Como Funciona Internamente

Os usuários são armazenados em um array:

```javascript
let usuarios = [];
```

Cada usuário é um objeto no formato:

```javascript
{
  nome: "usuario",
  senha: "123",
  saldo: 0.0
}
```

O sistema controla o usuário logado com:

```javascript
let usuarioLogado = null;
```

Todas as operações (depósito, saque, saldo) utilizam esse objeto ativo.

---

## ⚠ Limitações do Projeto

- ❌ Não salva dados ao atualizar a página
- ❌ Não possui criptografia de senha
- ❌ Não possui banco de dados
- ❌ Não é seguro para uso real

Este projeto é apenas para fins educacionais.

---

## 💡 Melhorias Futuras (Ideias)

- Salvar dados no `localStorage`
- Adicionar histórico de transações
- Implementar validação mais robusta
- Criptografar senhas
- Criar versão com backend (Node.js + banco de dados)
- Responsividade para mobile

---

## 👨‍💻 Autor

Projeto desenvolvido para prática de JavaScript e lógica de programação.
