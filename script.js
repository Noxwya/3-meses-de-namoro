// Memórias
const memories = [
    {
      image: "Imagem do WhatsApp de 2025-04-15 à(s) 20.03.03_84400ca5.jpg",
      text: "Nosso primeiro encontro..."
    },
    {
      image: "Imagem do WhatsApp de 2025-04-15 à(s) 20.35.16_34b9c4f1.jpg",
      text: "Aquele dia especial na place des palmistes..."
    },
    {
      image: "Imagem do WhatsApp de 2025-04-15 à(s) 20.45.34_72b1531e.jpg",
      text: "Eu quero dias infinitos assim com você..."
    }
  ];
  
  let currentMemoryIndex = 0;
  
  // Controle do carrossel
  function updateMemory() {
    const img = document.getElementById('memoryImage');
    const text = document.getElementById('memoryText');
  
    // Remove classe de animação para resetar
    img.classList.remove('memory-image');
    void img.offsetWidth; // força reflow
    img.classList.add('memory-image');
  
    img.src = memories[currentMemoryIndex].image;
    text.textContent = memories[currentMemoryIndex].text;
  }
  
  
  function nextMemory() {
    currentMemoryIndex = (currentMemoryIndex + 1) % memories.length;
    updateMemory();
  }
  
  function prevMemory() {
    currentMemoryIndex = (currentMemoryIndex - 1 + memories.length) % memories.length;
    updateMemory();
  }
  
  // Controle da música
  const musicToggle = document.getElementById('musicToggle');
  const audio = document.getElementById('background-music');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  
  musicToggle.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'inline';
    } else {
      audio.pause();
      playIcon.style.display = 'inline';
      pauseIcon.style.display = 'none';
    }
  });
  
  // Animação de corações
  function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    document.getElementById('hearts-container').appendChild(heart);
    
    heart.addEventListener('animationend', () => {
      heart.remove();
    });
  }
  
  setInterval(createHeart, 3000);

  // Suporte para Swipe no celular
let touchStartX = 0;
let touchEndX = 0;

const memoryContainer = document.querySelector('.memory-container');

memoryContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

memoryContainer.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleGesture();
});

function handleGesture() {
  const threshold = 50; // distância mínima para contar como gesto
  if (touchEndX < touchStartX - threshold) {
    nextMemory(); // deslizou para a esquerda
  }
  if (touchEndX > touchStartX + threshold) {
    prevMemory(); // deslizou para a direita
  }
}
