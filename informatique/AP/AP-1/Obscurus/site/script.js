document.addEventListener('DOMContentLoaded', () => {

    // Fonction pour animer les éléments au chargement de la page
    const animateOnLoad = () => {
        const elementsToFadeIn = document.querySelectorAll('.fade-in');

        elementsToFadeIn.forEach((element, index) => {
            // Applique un délai basé sur l'attribut 'delay' ou l'index
            const delay = element.classList.contains('delay-1') ? 400 : 0;
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 200 + delay); // Délai initial pour que la page se charge
        });
    };

    // Ajoute le style initial pour l'animation
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    animateOnLoad();

    // --- Animation au scroll pour les widgets ---
    const scrollObserverOptions = {
        threshold: 0.15 // Se déclenche quand 15% du widget est visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Décommenter la ligne ci-dessous si on veut que l'animation ne joue qu'une seule fois
                // observer.unobserve(entry.target); 
            }
        });
    }, scrollObserverOptions);

    document.querySelectorAll('.widget').forEach(widget => {
        scrollObserver.observe(widget);
    });

    // --- Logique pour l'accordéon des services ---
    const accordionItems = document.querySelectorAll('.details-widget');

    accordionItems.forEach(item => {
        const header = item.querySelector('.details-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // On ferme tous les accordéons
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Si l'élément cliqué n'était pas déjà actif, on l'ouvre
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Intercepter les clics sur les liens de service pour ouvrir le bon accordéon
    document.querySelectorAll('.service-link').forEach(link => {
        link.addEventListener('click', (e) => {
            // On empêche le saut d'ancre par défaut pour gérer nous-même le scroll
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetWidget = document.getElementById(targetId);
            
            if (targetWidget && targetWidget.classList.contains('details-widget')) {
                // On ferme tous les autres et on ouvre la cible
                accordionItems.forEach(w => w.classList.remove('active'));
                targetWidget.classList.add('active'); // Ouvre l'accordéon

                // On fait défiler la vue jusqu'à l'accordéon qui vient de s'ouvrir
                targetWidget.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });
});