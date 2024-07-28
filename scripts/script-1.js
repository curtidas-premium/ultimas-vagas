// Função que será executada quando o usuário tentar retornar à página anterior
function redirecionarQuandoRetornar() {
  //abrir modal
  alert("Temos um \n OFERTA EXCLUSIVA \nPARA VOCẼ!!!");
  // Redireciona para a página desejada
  window.location.href =
    "https://redirect.urusoficial.com.br/MP8GHQGRSJ8U2?a=3hKEsX7o";
}

// Verifica se a página está sendo carregada pelo botão "voltar"
window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    redirecionarQuandoRetornar();
  }
});

// Adiciona uma nova entrada no histórico para capturar o "voltar"
window.history.replaceState({}, "", "");
window.history.pushState({}, "", "");

// Adiciona um ouvinte de evento para o evento 'popstate'
window.addEventListener("popstate", function (event) {
  redirecionarQuandoRetornar();
});

function abrirChrome() {
  console.log("chamou função");

  var url = "https://curtidas-premium.github.io/acesso-exclusivo";
  var chromeUrl = "googlechrome://" + url.replace(/^https?:\/\//, "");

  // Criação de um link temporário para a tentativa de abrir no Chrome
  var link = document.createElement("a");
  link.href = chromeUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Tentativa de fallback para abrir no Safari caso Chrome não esteja instalado
  setTimeout(function () {
    window.location = url;
  }, 500);
}
