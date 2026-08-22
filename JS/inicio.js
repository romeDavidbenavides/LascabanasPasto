// Animaciones y comportamiento de la página de inicio.
if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll('.titulo-caida').forEach((titulo) => {
        const textoOriginal = titulo.textContent.trim();
        titulo.replaceChildren();

        // Cada palabra se conserva unida para evitar cortes como "Habitaci / ón".
        textoOriginal.split(/(\s+)/).forEach((fragmento) => {
            if (/^\s+$/.test(fragmento)) {
                titulo.appendChild(document.createTextNode(' '));
                return;
            }

            const palabra = document.createElement('span');
            palabra.className = 'palabra';
            fragmento.split('').forEach((caracter) => {
                const letra = document.createElement('span');
                letra.className = 'letra';
                letra.textContent = caracter;
                palabra.appendChild(letra);
            });
            titulo.appendChild(palabra);
        });

        gsap.from(titulo.querySelectorAll('.letra'), {
            y: -60,
            opacity: 0,
            rotationX: -45,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.04,
            scrollTrigger: {
                trigger: titulo,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    gsap.from('.brand-main .slide-left', { x: -80, opacity: 0, duration: 1, ease: 'power3.out' });
    gsap.from('.brand-main .slide-right', { x: 80, opacity: 0, duration: 1, ease: 'power3.out' });
    gsap.from('.brand-sub', { y: 25, opacity: 0, duration: 0.8, delay: 0.4 });
    // Entrada de la imagen principal y de cada imagen al recorrer la página.
    gsap.from('.hero-image', { scale: 1.15, duration: 2.2, ease: 'power2.out' });
    gsap.from('.hero-content', { y: 30, opacity: 0, duration: 0.8, delay: 0.5, ease: 'power2.out' });

    document.querySelectorAll('.room-section').forEach((seccion) => {
        const imagen = seccion.querySelector('.room-image-container');
        const texto = seccion.querySelector('.room-info');
        const desdeLaDerecha = seccion.classList.contains('reverse');

        if (imagen) {
            gsap.from(imagen, {
                x: desdeLaDerecha ? 90 : -90,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: { trigger: seccion, start: 'top 78%' }
            });
        }
        if (texto) {
            gsap.from(texto.querySelector('p'), {
                y: 35,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                ease: 'power2.out',
                scrollTrigger: { trigger: seccion, start: 'top 78%' }
            });
        }
    });

    gsap.from('.comida-img.c-uno', {
        x: 70, y: -35, opacity: 0, rotation: 5, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.section-comida', start: 'top 78%' }
    });
    gsap.from('.comida-img.c-dos', {
        x: -70, y: 35, opacity: 0, rotation: -5, duration: 0.9, delay: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.section-comida', start: 'top 78%' }
    });

    gsap.from('.card-carrusel', {
        y: 45, opacity: 0, duration: 0.65, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.carrusel-seccion', start: 'top 80%' }
    });
    gsap.from('.beneficio-item', {
        y: 25, opacity: 0, duration: 0.45, stagger: 0.06, ease: 'power2.out',
        scrollTrigger: { trigger: '.beneficios-seccion', start: 'top 78%' }
    });
}

// Carrusel manual: se controla con rueda, touch o arrastre.
const carrusel = document.getElementById('carruselContenedor');

if (carrusel) {
    let arrastrando = false;
    let inicioX = 0;
    let inicioScroll = 0;

    carrusel.addEventListener('pointerdown', (evento) => {
        arrastrando = true;
        inicioX = evento.clientX;
        inicioScroll = carrusel.scrollLeft;
        carrusel.setPointerCapture(evento.pointerId);
    });

    carrusel.addEventListener('pointermove', (evento) => {
        if (!arrastrando) return;
        carrusel.scrollLeft = inicioScroll - (evento.clientX - inicioX);
    });

    const terminarArrastre = () => { arrastrando = false; };
    carrusel.addEventListener('pointerup', terminarArrastre);
    carrusel.addEventListener('pointercancel', terminarArrastre);
}
// Efecto sutil en los botones destacados.
document.querySelectorAll('.btn-magnetic').forEach((boton) => {
    boton.addEventListener('mousemove', (evento) => {
        const rect = boton.getBoundingClientRect();
        const x = (evento.clientX - rect.left - rect.width / 2) * 0.12;
        const y = (evento.clientY - rect.top - rect.height / 2) * 0.12;
        boton.style.transform = `translate(${x}px, ${y}px)`;
    });
    boton.addEventListener('mouseleave', () => { boton.style.transform = ''; });
});