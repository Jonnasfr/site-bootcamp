
const tagHtml = document.querySelector("html");
const botaoAlternarTema = document.querySelector(".botao-tema");
const botaoMenuMobile = document.querySelector(".botao-menu");
const menuNavegacao = document.querySelector(".topo nav");

function alternarTema() {
  tagHtml.classList.toggle("modo-claro");

  if (tagHtml.classList.contains("modo-claro") === true) {
    if (botaoAlternarTema) {
      botaoAlternarTema.textContent = "🌙";
      botaoAlternarTema.setAttribute("aria-label", "Ativar modo escuro");
    }
  } else {
    if (botaoAlternarTema) {
      botaoAlternarTema.textContent = "☀️";
      botaoAlternarTema.setAttribute("aria-label", "Ativar modo claro");
    }
  }
}


function alternarMenu() {
  if (menuNavegacao && botaoMenuMobile) {
    const estaAberto = menuNavegacao.classList.toggle("aberto");
    botaoMenuMobile.textContent = estaAberto ? "✕" : "☰";
    botaoMenuMobile.setAttribute("aria-expanded", String(estaAberto));
    botaoMenuMobile.setAttribute("aria-label", estaAberto ? "Fechar menu de navegação" : "Abrir menu de navegação");
  }
}

function fecharMenu() {
  if (menuNavegacao && menuNavegacao.classList.contains("aberto")) {
    menuNavegacao.classList.remove("aberto");
    if (botaoMenuMobile) {
      botaoMenuMobile.textContent = "☰";
      botaoMenuMobile.setAttribute("aria-expanded", "false");
      botaoMenuMobile.setAttribute("aria-label", "Abrir menu de navegação");
    }
  }
}


if (menuNavegacao) {
  const linksNav = menuNavegacao.querySelectorAll("a");
  linksNav.forEach(function (link) {
    link.addEventListener("click", fecharMenu);
  });
}


document.addEventListener("click", function (evento) {
  const topo = document.querySelector(".topo");
  if (topo && !topo.contains(evento.target)) {
    fecharMenu();
  }
});


window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    fecharMenu();
  }
});


if (botaoAlternarTema) {
  botaoAlternarTema.addEventListener("click", alternarTema);
}

if (botaoMenuMobile) {
  botaoMenuMobile.addEventListener("click", alternarMenu);
}
