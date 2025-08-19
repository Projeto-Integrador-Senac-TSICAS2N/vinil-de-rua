
      // Defina a duração total do temporizador em segundos (exemplo: 2 dias = 2*24*60*60)
      let duracao = 2 * 24 * 60 * 60; // 2 dias
    
      function atualizarTemporizador() {
        let dias = Math.floor(duracao / (24 * 60 * 60));
        let horas = Math.floor((duracao % (24 * 60 * 60)) / (60 * 60));
        let minutos = Math.floor((duracao % (60 * 60)) / 60);
        let segundos = duracao % 60;
    
        let formatado = 
          (dias < 10 ? '0' : '') + dias + 'd ' +
          (horas < 10 ? '0' : '') + horas + 'h ' +
          (minutos < 10 ? '0' : '') + minutos + 'm ' +
          (segundos < 10 ? '0' : '') + segundos + 's';
    
        document.getElementById('temporizador').textContent = formatado;
    
        if (duracao > 0) {
          duracao--;
        } else {
          document.getElementById('temporizador').textContent = "Oferta Expirada!";
        }
      }
    
      atualizarTemporizador(); // Atualiza imediatamente
      setInterval(atualizarTemporizador, 1000); // Atualiza a cada segundo
