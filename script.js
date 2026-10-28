const launchButton = document.getElementById('launch-game');
const gameDialog = document.getElementById('game-dialog');
const closeButton = document.getElementById('close-game');
const gameMount = document.getElementById('game-mount');
const originalGamePanel = gameMount.innerHTML;

launchButton.addEventListener('click', () => {
  gameMount.innerHTML = '<iframe title="Craque: Rumo ao Estrelato" src="game/index.html" style="display:block;width:100%;height:min(70vh,760px);min-height:520px;border:0;background:#09130e;border-radius:8px" allow="fullscreen"></iframe>';
  if (typeof gameDialog.showModal === 'function') gameDialog.showModal();
  else gameDialog.setAttribute('open', '');
});

closeButton.addEventListener('click', () => gameDialog.close());
gameDialog.addEventListener('click', (event) => {
  if (event.target === gameDialog) gameDialog.close();
});
gameDialog.addEventListener('close', () => {
  gameMount.innerHTML = originalGamePanel;
});

document.getElementById('empty-feedback').addEventListener('click', () => gameDialog.close());
document.getElementById('year').textContent = new Date().getFullYear();

const feedbackForm = document.getElementById('feedback-form');
const feedbackResult = document.getElementById('form-result');
feedbackForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(feedbackForm);
  const name = (formData.get('name') || '').toString().trim() || 'Não informado';
  const type = formData.get('type').toString();
  const message = formData.get('message').toString().trim();
  if (!message) {
    feedbackResult.textContent = 'Escreva uma mensagem antes de enviar.';
    return;
  }
  const output = `Feedback — Craque: Rumo ao Estrelato\nNome: ${name}\nTipo: ${type}\nMensagem:\n${message}`;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(output);
      feedbackResult.textContent = 'Feedback copiado! Agora cole e envie para o desenvolvedor pelo canal que ele disponibilizar.';
    } else {
      const area = document.createElement('textarea');
      area.value = output;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      const copied = document.execCommand('copy');
      area.remove();
      feedbackResult.textContent = copied
        ? 'Feedback copiado! Agora cole e envie para o desenvolvedor pelo canal que ele disponibilizar.'
        : 'Seu feedback está pronto. Copie esta mensagem manualmente: ' + output;
    }
  } catch {
    feedbackResult.textContent = 'Seu feedback está pronto para copiar:\n' + output;
  }
});
