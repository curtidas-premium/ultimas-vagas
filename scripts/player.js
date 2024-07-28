  // Variáveis para o player de vídeo do YouTube
  let player;
  const targetTime = 448; // Tempo em segundos que você deseja verificar
  const btn = document.getElementById("btnGateway");

  // Função chamada quando a API do YouTube está pronta
  function onYouTubeIframeAPIReady() {
      player = new YT.Player("player", {
          height: "180",
          width: "320",
          videoId: "wVdtY5f_boM", // Substitua pelo ID do seu vídeo do YouTube
          playerVars: {
              autoplay: 1, // Reproduz automaticamente
              controls: 0, // Oculta os controles do player
              fs: 0, // Oculta o botão de tela cheia
              rel: 0, // Impede que vídeos relacionados sejam exibidos ao término
              modestbranding: 1, // Modo de branding modesto (logo reduzido)
              disablekb: 1, // Desabilita os controles do teclado
          },
          events: {
              onReady: onPlayerReady,
              onStateChange: onPlayerStateChange,
          },
      });
  }

  // Função chamada quando o player está pronto
  function onPlayerReady(event) {
      checkTime(); // Começa a verificar o tempo de reprodução
      console.log("Player pronto!");
      // Mostra as divs que estavam ocultas
      document.getElementById("divsOcultas").style.display = "block";
  }

  // Função chamada quando o estado do player muda
  function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING) {
          checkTime(); // Verifica o tempo de reprodução quando o vídeo está tocando
      }
  }

  // Função para verificar o tempo de reprodução do vídeo
  function checkTime() {
      const currentTime = player.getCurrentTime();
      if (currentTime >= targetTime && !buttonShown) {
          btn.style.display = "block"; // Mostra o botão
          buttonShown = true; // Atualiza o estado do botão
      }
      setTimeout(checkTime, 1000); // Verifica novamente em 1 segundo
  }

  // Função de gateway
  function gateway() {
      alert("Gateway function triggered!");
      window.location.href = "https://redirect.urusoficial.com.br/MP8GHQGRSJ8U2?a=3hKEsX7o";
  }

  // Variável para controlar se o botão já foi mostrado
  var buttonShown = false;