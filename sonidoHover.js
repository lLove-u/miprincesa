document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audioPrincipal');
  audio.play().catch(e => {
    console.log('El navegador bloqueó la reproducción automática.');
  });
});

