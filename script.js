// script.js

// Referencias a elementos del DOM
const card        = document.getElementById('card');
const modal       = document.getElementById('modal');
const openBtn     = document.getElementById('openBtn');
const closeBtn    = document.getElementById('closeBtn');
const form        = document.getElementById('rsvpForm');
const lightbox    = document.getElementById('lightbox');
const mainImg     = document.getElementById('mainImg');
const mapBtn      = document.getElementById('mapBtn');
const mapModal    = document.getElementById('mapModal');
const closeMapBtn = document.getElementById('closeMapBtn');
const phone       = '+5491150577860';  // número de WhatsApp

/* —————————————————————————————
   Animación de entrada de la tarjeta
   ————————————————————————————— */
window.addEventListener('load', () => {
  setTimeout(() => {
    card.classList.remove('opacity-0', 'scale-90');
  }, 100);
});

/* —————————————————————————————
   Apertura y cierre del modal de formulario
   ————————————————————————————— */
openBtn.addEventListener('click',   () => modal.classList.remove('hidden'));
closeBtn.addEventListener('click',  () => modal.classList.add('hidden'));
modal.addEventListener('click',     e => {
  if (e.target === modal) modal.classList.add('hidden');
});

/* —————————————————————————————
   Apertura y cierre del modal de mapa
   ————————————————————————————— */
mapBtn.addEventListener('click',    () => mapModal.classList.remove('hidden'));
closeMapBtn.addEventListener('click',() => mapModal.classList.add('hidden'));
mapModal.addEventListener('click',  e => {
  if (e.target === mapModal) mapModal.classList.add('hidden');
});

/* —————————————————————————————
   Envío de datos a WhatsApp con confetti
   ————————————————————————————— */
form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);

  // Dispara confetti
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#d6b48a', '#c48d8f', '#f2e6d8']
  });

  // Construye el mensaje incluyendo acompañantes
  const text =
    `🎉 *Confirmación – XV Geraldine*\n\n` +
    `*Nombre:* ${data.get('nombre')}\n` +
    `*Asistencia:* ${data.get('asistencia')}\n` +
    `*Acompañantes:* ${data.get('acompanantes') || '0'}\n` +
    `*Menú especial:* ${data.get('menu') || '—'}\n` +
    `*Mensaje:* ${data.get('mensaje') || '—'}\n` +
    `*Contacto:* ${data.get('contacto') || '—'}`;

  // Espera un momento para que se vea el confetti
  setTimeout(() => {
    window.open(
      `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`,
      '_blank'
    );
    modal.classList.add('hidden');
    form.reset();
  }, 1100);
});

/* —————————————————————————————
   Lightbox (zoom) de la imagen de la invitación
   ————————————————————————————— */
mainImg.addEventListener('click',   () => lightbox.classList.remove('hidden'));
lightbox.addEventListener('click',  () => lightbox.classList.add('hidden'));

/* —————————————————————————————
   Cierre de todos los modales con la tecla Escape
   ————————————————————————————— */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    modal.classList.add('hidden');
    mapModal.classList.add('hidden');
    lightbox.classList.add('hidden');
  }
});
