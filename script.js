// Animaciones al hacer scroll
const elements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

// Función que habla
const btnHablar = document.getElementById('btnHablar');
if(btnHablar){
    const textoSobreMi = document.getElementById('sobre-texto').textContent;

    btnHablar.addEventListener('click', () => {
        const mensaje = new SpeechSynthesisUtterance(textoSobreMi);
        mensaje.lang = 'es-ES';
        mensaje.rate = 1;
        mensaje.pitch = 1;
        window.speechSynthesis.speak(mensaje);
    });
}
