
const formularioLogin = document.querySelector("#form-login");
const campoUsuario = document.querySelector("#usuario");
const campoSenha = document.querySelector("#senha");
const avisoLogin = document.querySelector("#aviso");


const contasValidas = [
  { usuario: "aluno", senha: "bootcamp2026", nome: "Aluno Convidado" },
  { usuario: "nobru", senha: "jonas2026", nome: "Jonas Romeiro" }
];


function validarUsuario(usuario) {
  if (usuario === "") {
    return "Digite o seu usuário de acesso.";
  } else if (usuario.length < 3) {
    return "O usuário deve conter pelo menos 3 caracteres.";
  } else if (usuario.includes(" ")) {
    return "O usuário não pode conter espaços.";
  } else {
    return "";
  }
}

function validarSenha(senha) {
  if (senha === "") {
    return "Digite a sua senha.";
  } else if (senha.length < 6) {
    return "A senha deve possuir pelo menos 6 caracteres.";
  } else {
    return "";
  }
}

function procurarConta(usuario, senha) {
  for (let i = 0; i < contasValidas.length; i++) {
    const conta = contasValidas[i];
    if (conta.usuario === usuario && conta.senha === senha) {
      return conta;
    }
  }
  return null;
}

// x ou s

function mostrarAviso(texto, tipo) {
  if (!avisoLogin) return;

  avisoLogin.classList.remove("erro");
  avisoLogin.classList.remove("certo");

  if (tipo === "erro") {
    avisoLogin.textContent = `✕ ${texto}`;
    avisoLogin.classList.add("erro");
    console.log(`[ERRO LOGIN]: ${texto}`);
  } else if (tipo === "certo") {
    avisoLogin.textContent = `✓ ${texto}`;
    avisoLogin.classList.add("certo");
    console.log(`[SUCESSO LOGIN]: ${texto}`);
  }
}

// envio
function processarLogin(evento) {
  evento.preventDefault();

  const usuario = campoUsuario ? campoUsuario.value.trim() : "";
  const senha = campoSenha ? campoSenha.value : "";

  console.log("Tentativa de login:", { usuario });

  const erroUsuario = validarUsuario(usuario);
  const erroSenha = validarSenha(senha);


  if (erroUsuario !== "") {
    mostrarAviso(erroUsuario, "erro");
    if (campoUsuario) campoUsuario.focus();
  } else if (erroSenha !== "") {
    mostrarAviso(erroSenha, "erro");
    if (campoSenha) campoSenha.focus();
  } else {
    const contaEncontrada = procurarConta(usuario, senha);

    if (contaEncontrada !== null) {
      mostrarAviso(`Login realizado com sucesso! Bem-vindo(a), ${contaEncontrada.nome}. Redirecionando...`, "certo");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1200);
    } else {
      mostrarAviso("Usuário ou senha incorretos. Verifique os dados digitados.", "erro");
    }
  }
}

if (formularioLogin) {
  formularioLogin.addEventListener("submit", processarLogin);
}