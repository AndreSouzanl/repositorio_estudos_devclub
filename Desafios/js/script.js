
const elementos = document.querySelectorAll(
    '.section, .goal-card, .contact'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('mostrar');

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

elementos.forEach((elemento) => {
    elemento.classList.add('revelar');
    observer.observe(elemento);
});



const botaoTopo = document.getElementById('voltarTopo');

window.addEventListener('scroll', () => {

    if (window.scrollY > 300) {
        botaoTopo.classList.add('visivel');
    } else {
        botaoTopo.classList.remove('visivel');
    }

});

botaoTopo.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});



const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {

    const aberto = menu.classList.toggle('ativo');

    menuToggle.setAttribute('aria-expanded', aberto);
    menuToggle.setAttribute(
        'aria-label',
        aberto ? 'Fechar menu' : 'Abrir menu'
    );

});

menu.querySelectorAll('a').forEach((link) => {

    link.addEventListener('click', () => {

        menu.classList.remove('ativo');

        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');

    });

});
