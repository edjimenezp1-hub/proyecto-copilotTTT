// script.js - Blog Técnico
// Autor: Edgar Duvan Jimenez Palechor

document.addEventListener('DOMContentLoaded', function() {
    // Navegación suave entre posts
    document.querySelectorAll('nav a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').replace('#', '');
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
