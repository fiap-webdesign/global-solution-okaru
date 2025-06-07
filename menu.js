document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
      alert(`Você clicou em ${item.textContent.trim()}`);
    });
  });
  