// Animazione GSAP all'avvio della pagina
window.addEventListener('load', () => {
    gsap.from('.product', {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });
});

// Animazione sui pulsanti al click
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        gsap.to(button, {
            duration: 0.2,
            scale: 1.1,
            yoyo: true,
            repeat: 1
        });
    });
});

// Animazione al passaggio del mouse sopra un prodotto
document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('mouseenter', () => {
        gsap.to(product, {
            duration: 0.3,
            scale: 1.05,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)"
        });
    });

    product.addEventListener('mouseleave', () => {
        gsap.to(product, {
            duration: 0.3,
            scale: 1,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
        });
    });
});
