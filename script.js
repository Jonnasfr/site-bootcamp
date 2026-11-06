/* =========================================================
   PORTFÓLIO BOOTCAMP4ALL — SCRIPT.JS
   Autor: Jonas Romeiro
   Página Principal: Renderização dinâmica de projetos e validação.
   Inspiração: Cartões estilizados com chips de tecnologia.
   ========================================================= */

// Constantes
const nomeDesenvolvedor = "Jonas Romeiro";
const anoAtual = 2026;
const githubUrl = "https://github.com/Jonnasfr";

// Lista de projetos
const projetos = [
  {
    titulo: "Comunidade de Música",
    descricao: "Plataforma social e fórum interativo para fãs de música compartilharem resenhas, recomendações de faixas e debaterem lançamentos e gêneros.",
    tecnologias: ["Node.js", "APIs REST", "PostgreSQL", "JavaScript"],
    imagem: "img/comunidade-musica.jpg",
    link: "#"
  },
  {
    titulo: "Primeiro Emprego & Jovem Aprendiz",
    descricao: "Portal dedicado à inclusão profissional de menores e jovens no mercado de trabalho, reunindo vagas de aprendizagem, capacitação e cadastro de currículos.",
    tecnologias: ["Node.js", "Express", "Bancos de Dados", "JavaScript"],
    imagem: "img/primeiro-emprego.jpg",
    link: "#"
  },
  {
    titulo: "Wiki Elden Ring",
    descricao: "Enciclopédia e guia interativo completo para o universo de Elden Ring, catalogando chefes, armas, feitiços, mapas e rotas de progressão nas Terras Intermédias.",
    tecnologias: ["JavaScript ES6", "APIs JSON", "HTML5", "CSS Grid"],
    imagem: "img/elden-ring.jpg",
    link: "#"
  }
];

// Renderiza os cartões de projetos dinamicamente
function montarProjetos(lista) {
  let cardsHtml = "";

  for (let i = 0; i < lista.length; i = i + 1) {
    const projeto = lista[i];

    // Monta as tags de tecnologia em chips estilizados
    let chipsHtml = "";
    const tagsArray = Array.isArray(projeto.tecnologias) ? projeto.tecnologias : projeto.tecnologias.split(",");
    for (let j = 0; j < tagsArray.length; j = j + 1) {
      chipsHtml += `<span class="badge-tag">${tagsArray[j].trim()}</span>`;
    }

    console.log(`[Projeto ${i + 1}] Titulo: ${projeto.titulo} | Link: ${projeto.link}`);

    const targetAttr = projeto.link && projeto.link.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : '';

    cardsHtml += `
      <article class="cartao-projeto pixel-shadow">
        <img src="${projeto.imagem}" alt="Captura de tela do projeto ${projeto.titulo}">
        <div class="conteudo-projeto">
          <h3>${projeto.titulo}</h3>
          <p>${projeto.descricao}</p>
          <div class="tags-tech">
            ${chipsHtml}
          </div>
          <a href="${projeto.link}" ${targetAttr} class="link-projeto">
            Ver projeto &nearr;
          </a>
        </div>
      </article>
    `;
  }

  const containerGaleria = document.querySelector("#lista-projetos");
  if (containerGaleria) {
    containerGaleria.innerHTML = cardsHtml;
  }
}


montarProjetos(projetos);

console.log(`Total de ${projetos.length} projetos renderizados com sucesso.`);



const formularioContato = document.querySelector("#form-contato");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoAssunto = document.querySelector("#assunto");
const campoMensagem = document.querySelector("#mensagem");
const avisoFeedback = document.querySelector("#aviso");


function validarNome(nome) {

  if (nome === "") {
    return "Por favor, digite o seu nome.";
  } else if (nome.length < 3) {
    return "O nome precisa ter pelo menos 3 caracteres.";
  } else {
    return "";
  }
}
//validar email
function validarEmail(email) {
  if (email === "") {
    return "Por favor, informe o seu e-mail.";
  } else if (email.includes("@") === false) {
    return "O e-mail precisa conter o caractere @.";
  } else if (email.includes(".") === false) {
    return "O e-mail precisa conter pelo menos um ponto (ex.: .com).";
  } else {
    return "";
  }
}

function validarAssunto(assunto) {
  if (assunto === "") {
    return "Por favor, descreva o assunto.";
  } else if (assunto.length < 3) {
    return "O assunto precisa ter pelo menos 3 caracteres.";
  } else {
    return "";
  }
}

function validarMensagem(mensagem) {
  if (mensagem === "") {
    return "Por favor, digite a sua mensagem.";
  } else if (mensagem.length < 10) {
    return "A mensagem deve conter pelo menos 10 caracteres.";
  } else {
    return "";
  }
}


function mostrarAviso(texto, tipo) {
  if (!avisoFeedback) return;

  avisoFeedback.classList.remove("erro");
  avisoFeedback.classList.remove("certo");

  if (tipo === "erro") {
    // X vermelho 
    avisoFeedback.textContent = `✕ ${texto}`;
    avisoFeedback.classList.add("erro");
    console.log(`[ERRO DE VALIDAÇÃO]: ${texto}`);
  } else if (tipo === "certo") {
    //  verde 
    avisoFeedback.textContent = `✓ ${texto}`;
    avisoFeedback.classList.add("certo");
    console.log(`[SUCESSO]: ${texto}`);
  }
}


function processarEnvioFormulario(evento) {
  evento.preventDefault();

  const nomeDigitado = campoNome ? campoNome.value.trim() : "";
  const emailDigitado = campoEmail ? campoEmail.value.trim() : "";
  const assuntoEscolhido = campoAssunto ? campoAssunto.value.trim() : "";
  const mensagemDigitada = campoMensagem ? campoMensagem.value.trim() : "";


  console.log("Tentativa de envio recebida:", {
    nome: nomeDigitado,
    email: emailDigitado,
    assunto: assuntoEscolhido,
    mensagem: mensagemDigitada
  });

  const erroNome = validarNome(nomeDigitado);
  const erroEmail = validarEmail(emailDigitado);
  const erroAssunto = validarAssunto(assuntoEscolhido);
  const erroMensagem = validarMensagem(mensagemDigitada);

  // if else
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
    mostrarAviso(`Obrigado pelo contato, ${nomeDigitado}! Sua mensagem foi enviada com sucesso.`, "certo");
    if (formularioContato) formularioContato.reset();
  }
}

if (formularioContato) {
  formularioContato.addEventListener("submit", processarEnvioFormulario);
}