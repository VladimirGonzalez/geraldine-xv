// script.js
const card      = document.getElementById('card');
const modal     = document.getElementById('modal');
const openBtn   = document.getElementById('openBtn');
const closeBtn  = document.getElementById('closeBtn');
const form      = document.getElementById('rsvpForm');
const lightbox  = document.getElementById('lightbox');
const mainImg   = document.getElementById('mainImg');
const phone     = '+5493329627578';

/* Intro */
window.addEventListener('load', () =>
  setTimeout(() => card.classList.remove('opacity-0', 'scale-90'), 100)
);

/* Modal */
openBtn.onclick   = () => modal.classList.remove('hidden');
closeBtn.onclick  = () => modal.classList.add('hidden');
modal.onclick     = e => e.target === modal && modal.classList.add('hidden');

/* Enviar */
form.onsubmit = e => {
  e.preventDefault();
  const d = new FormData(form);

  /* 🎉 Confetti pastel */
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#d6b48a', '#c48d8f', '#f2e6d8']
  });

  const text =
    `🎉 *Confirmación – XV Geraldine*\n\n` +
    `*Nombre:* ${d.get('nombre')}\n` +
    `*Asistencia:* ${d.get('asistencia')}\n` +
    `*Acompañantes:* ${d.get('acompanantes') || '0'}\n` +
    `*Menú especial:* ${d.get('menu') || '—'}\n` +
    `*Mensaje:* ${d.get('mensaje') || '—'}\n` +
    `*Contacto:* ${d.get('contacto') || '—'}`;

  setTimeout(() => {
    window.open(
      `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`,
      '_blank'
    );
    modal.classList.add('hidden');
    form.reset();
  }, 1100);
};

/* Zoom */
mainImg.onclick  = () => lightbox.classList.remove('hidden');
lightbox.onclick = () => lightbox.classList.add('hidden');
document.addEventListener('keydown', e =>
  e.key === 'Escape' && lightbox.classList.add('hidden')
);
