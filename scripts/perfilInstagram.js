document.addEventListener("DOMContentLoaded", () => {
  let pg1 = document.getElementById("pg1").style.display;
  let pg2 = document.getElementById("pg2");
  let pg3 = document.getElementById("pg3");
  let pg4 = document.getElementById("pg4");

  let pgR2 = document.getElementById("pgR2");
  let pgR3 = document.getElementById("pgR3");
  let pgR4 = document.getElementById("pgR4");

  let modalCredito = document.getElementById("modalCredito");
  // Adicionar evento de clique à div
  clickableDiv.addEventListener("click", () => {
    clickSound.play();
  });
});

function post() {
  modalCredito.style.display = "none";
  pg1.style.display = "none";
  pg2.style.display = "flex";
}

function reels() {
  modalCredito.style.display = "none";

  pg1.style.display = "none";
  pgR2.style.display = "flex";
}

function showPg3() {
  clickSound.play();
  valor.innerText = "R$37,56";
  showNotification();
  pg2.style.display = "none";
  pg3.style.display = "flex";
}

function showPg4() {
  clickSound.play();
  let valor = document.getElementById("valor");
  valor.innerText = "R$75,12";
  showNotification();
  pg3.style.display = "none";
  pg4.style.display = "flex";
}

function showPg5() {
  clickSound.play();
  showNotification();
  valor.innerText = "R$112,68";

  pg4.style.display = "none";
  pg5.style.display = "flex";
}

function showPgR2() {
  let video1 = document.getElementById("v1");
  video1.muted = false;
  video1.load();

  clickSound.play();
  valor.innerText = "R$00,00";

  video1.play();
  video1.style.display = "block";

  showNotification();
  pgR2.style.display = "none";
  pgR3.style.display = "flex";
}

function showPgR3() {
  let video1 = document.getElementById("v1");
  let video2 = document.getElementById("v2");
  video1.pause();
  video2.muted = false;
  video2.load();

  clickSound.play();
  valor.innerText = "R$37,56";

  video2.play();
  video2.style.display = "block";

  showNotification();
  pgR2.style.display = "none";
  pgR3.style.display = "flex";
}

function showPgR4() {
  let video2 = document.getElementById("v2");
  let video3 = document.getElementById("v3");
  video2.pause();
  video3.muted = false;
  video3.load();

  clickSound.play();

  video3.play();
  video3.style.display = "block";

  valor.innerText = "R$ 75,12";
  showNotification();
  pgR3.style.display = "none";
  pgR4.style.display = "flex";
}

function showPgR5() {
  let video4 = document.getElementById("v4");
  let video3 = document.getElementById("v3");
  video3.pause();
  video4.muted = false;
  video4.load();
  clickSound.play();

  video4.play();
  video4.style.display = "block";

  valor.innerText = "R$112,68";
  showNotification();
  pgR4.style.display = "none";
  pgR5.style.display = "flex";
  video4.muted = false;
}

function showModalFinal() {
  let modalFinal = document.getElementById("modalFinal");

  clickSound.play();
  modalFinal.style.display = "block";  
}


function vsl() {
  clickSound.play();
  window.location.href = "vsl.html"; // Substitua pela URL desejada
}

// Função para exibir a notificação com efeito de fade in e fade out
function showNotification() {
  let mensagem = document.getElementById("msgRecompensa");
  mensagem.innerText = `Você avaliou essa publicação e recebeu R$37,56 por isso`;
  const modalCredito = document.getElementById("modalCredito");
  modalCredito.style.display = "block";

  // Adiciona um pequeno delay para garantir que a transição ocorra
  setTimeout(() => {
    modalCredito.style.opacity = 1; // Fade in
  }, 10);

  // Define um tempo para o fade out
  setTimeout(() => {
    modalCredito.style.opacity = 0; // Fade out
    setTimeout(() => {
      modalCredito.style.display = "none";
    }, 1000); // Correspondente ao tempo de transição definido no CSS
  }, 2000); // Tempo total que o modal ficará visível
}

function gateway() {
  //window.location.href = '/vsl.html'; // Substitua pela URL desejada
  window.location.href =
    "https://redirect.urusoficial.com.br/MP8GHQGRSJ8U2?a=3hKEsX7o";
}
