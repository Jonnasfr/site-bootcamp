
const formularioContato = document.querySelector("#form-contato");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoAssunto = document.querySelector("#assunto");
const campoMensagem = document.querySelector("#mensagem");
const elementoAviso = document.querySelector("#aviso");


function validarNome(nome) {
  if (nome === "") {
    return "Digite o seu nome completo.";
  } else if (nome.length < 3) {
    return "O nome precisa ter pelo menos 3 letras.";
  } else {
    return "";
  }
}

function validarEmail(email) {
  if (email === "") {
    return "Digite o seu e-mail de contato.";
  } else if (email.includes("@") === false) {
    return "O e-mail precisa conter o caractere @.";
  } else if (email.includes(".") === false) {
    return "O e-mail precisa conter um ponto, como em .com.";
  } else {
    return "";
  }
}

function validarAssunto(assunto) {
  if (assunto === "") {
    return "Descreva o assunto da sua mensagem.";
  } else if (assunto.length < 3) {
    return "O assunto precisa ter pelo menos 3 caracteres.";
  } else {
    return "";
  }
}

function validarMensagem(mensagem) {
  if (mensagem === "") {
    return "Escreva a sua mensagem.";
  } else if (mensagem.length < 10) {
    return "A mensagem precisa ter pelo menos 10 letras.";
  } else {
    return "";
  }
}


function mostrarAviso(texto, tipo) {
  if (!elementoAviso) return;

  elementoAviso.classList.remove("erro");
  elementoAviso.classList.remove("certo");

  if (tipo === "erro") {
    elementoAviso.textContent = `✕ ${texto}`;
    elementoAviso.classList.add("erro");
    console.log(`[ERRO]: ${texto}`);
  } else if (tipo === "certo") {
    elementoAviso.textContent = `✓ ${texto}`;
    elementoAviso.classList.add("certo");
    console.log(`[SUCESSO]: ${texto}`);
  }
}

function enviarMensagem(evento) {
  evento.preventDefault();
  const nome = campoNome ? campoNome.value.trim() : "";
  const email = campoEmail ? campoEmail.value.trim() : "";
  const assunto = campoAssunto ? campoAssunto.value.trim() : "";
  const mensagem = campoMensagem ? campoMensagem.value.trim() : "";

  console.log("Dados capturados do formulário de contato:", { nome, email, assunto, mensagem });


  const erroNome = validarNome(nome);
  const erroEmail = validarEmail(email);
  const erroAssunto = validarAssunto(assunto);
  const erroMensagem = validarMensagem(mensagem);

  if (erroNome !== "") {
    mostrarAviso(erroNome, "erro");
    if (campoNome) campoNome.focus();
  } else if (erroEmail !== "") {
    mostrarAviso(erroEmail, "erro");
    if (campoEmail) campoEmail.focus();
  } else if (erroAssunto !== "") {
    mostrarAviso(erroAssunto, "erro");
    if (campoAssunto) campoAssunto.focus();
  } else if (erroMensagem !== "") {
    mostrarAviso(erroMensagem, "erro");
    if (campoMensagem) campoMensagem.focus();
  } else {

    mostrarAviso(`Mensagem enviada com sucesso! Obrigado pelo contato, ${nome}.`, "certo");
    if (formularioContato) formularioContato.reset();
  }
}


if (formularioContato) {
  formularioContato.addEventListener("submit", enviarMensagem);
}