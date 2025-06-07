// Saudação dinâmica
document.addEventListener('DOMContentLoaded', () => {
    const saudacao = document.querySelector('.top-header p');
    const hora = new Date().getHours();
  
    let mensagem = 'Olá, seja bem-vindo(a)!';
    if (hora >= 5 && hora < 12) {
      mensagem = 'Bom dia!';
    } else if (hora >= 12 && hora < 18) {
      mensagem = 'Boa tarde!';
    } else {
      mensagem = 'Boa noite!';
    }
  
    saudacao.textContent = mensagem;
  });
  
  // Clique em categoria (simulação de filtro)
  const categorias = document.querySelectorAll('.categoria');
  categorias.forEach(cat => {
    cat.addEventListener('click', () => {
      alert(`Você clicou na categoria: ${cat.textContent.trim().split('\n')[0]}`);
    });
  });
  
  // Atualizar estoque (simulado)
  const atualizarBtn = document.querySelector('button:nth-of-type(2)');
  if (atualizarBtn) {
    atualizarBtn.addEventListener('click', () => {
      alert('Estoque atualizado com sucesso!');
    });
  }
  