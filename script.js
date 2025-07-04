// script.js
const card      = document.getElementById('card');
const modal     = document.getElementById('modal');
const openBtn   = document.getElementById('openBtn');
const closeBtn  = document.getElementById('closeBtn');
const form      = document.getElementById('rsvpForm');
const lightbox  = document.getElementById('lightbox');
const mainImg   = document.getElementById('mainImg');
const phone     = '+5493329627578';

/* Animación de entrada */
window.addEventListener('load', () => {
  setTimeout(() => card.classList.remove('opacity-0', 'scale-90'), 100);
});

/* Modal formulario */
openBtn.onclick   = () => modal.classList.remove('hidden');
closeBtn.onclick  = () => modal.classList.add('hidden');
modal.onclick     = e => { if (e.target === modal) modal.classList.add('hidden'); };

/* Enviar a WhatsApp */
form.onsubmit = e => {
  e.preventDefault();
  const data = new FormData(form);
  const text =
    `🎉 *Confirmación – XV Geraldine*\n\n` +
    `*Nombre:* ${data.get('nombre')}\n` +
    `*Asistencia:* ${data.get('asistencia')}\n` +
    `*Acompañantes:* ${data.get('acompanantes') || '0'}\n` +
    `*Mensaje:* ${data.get('mensaje') || '—'}\n` +
    `*Contacto:* ${data.get('contacto') || '—'}`;
  window.open(
    `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`,
    '_blank'
  );
  modal.classList.add('hidden');
  form.reset();
};

/* Lightbox zoom */
mainImg.onclick      = () => lightbox.classList.remove('hidden');
lightbox.onclick      = () => lightbox.classList.add('hidden');
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') lightbox.classList.add('hidden');
});
