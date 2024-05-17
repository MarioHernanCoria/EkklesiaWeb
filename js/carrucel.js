document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".new-articles__track");
    const items = Array.from(track.children);
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;

    // Evento mouse down
    track.addEventListener('mousedown', e => {
        isDragging = true;
        startPosition = e.pageX - track.offsetLeft;
        currentTranslate = track.style.transform ? parseInt(track.style.transform.replace('translateX(', '').replace('px)', '')) : 0;
    });

    // Evento mouse move
    track.addEventListener('mousemove', e => {
        if (isDragging) {
            const currentPosition = e.pageX - track.offsetLeft;
            const delta = currentPosition - startPosition;
            track.style.transform = `translateX(${currentTranslate + delta}px)`;
        }
    });

    // Evento mouse up
    track.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Evento mouse leave
    track.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    // Evento click en cada artículo
    items.forEach(item => {
        item.addEventListener('click', function() {
            // Resaltar la carta seleccionada
            items.forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');

            // Obtener información de la carta seleccionada
            const title = item.querySelector('.new-articles__title').textContent;

            // Redirigir a otra página con la información
            window.location.href = 'otra_pagina.html?carta=' + encodeURIComponent(title);
        });
    });
});