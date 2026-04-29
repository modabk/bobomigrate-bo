/* Bobo the Bear - Clone Script */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Bobo the Bear site loaded');

    const boboHand = document.getElementById('bobo-hand');
    const migrateBtn = document.getElementById('migrate-btn');

    // Parallax effect for the bobo hand on mouse move
    document.addEventListener('mousemove', (e) => {
        if (!boboHand) return;

        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const moveX = (clientX - centerX) / 50;
        const moveY = (clientY - centerY) / 50;

        boboHand.style.transform = `translate3d(${moveX}px, ${17 + moveY}px, 0px)`;
    });

    // Scroll effect for the bobo hand
    window.addEventListener('scroll', () => {
        if (!boboHand) return;
        
        const scrollValue = window.scrollY;
        const translateY = 17 + (scrollValue * 0.1);
        boboHand.style.transform = `translate3d(0px, ${translateY}px, 0px)`;
    });

    // Button click redirect to dapp wallet
    if (migrateBtn) {
        migrateBtn.addEventListener('click', () => {
            window.location.href = 'Grah/';
        });
    }

    // Scroll reveal/fade effect for containers
    const containers = document.querySelectorAll('.container');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    containers.forEach(container => {
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        container.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(container);
    });
});
