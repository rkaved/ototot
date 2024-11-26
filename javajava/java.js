var chat = document.getElementById('chat');
   chat.scrollTop = chat.scrollHeight - chat.clientHeight;

document.addEventListener('DOMContentLoaded', function() {
    const contactoHeader = document.getElementById('contactoHeader');
    const contactoList = document.getElementById('contactoList');
    const arrow = document.getElementById('arrow');

    contactoHeader.addEventListener('click', function() {
        // Alterna la visibilidad de la lista de contactos
        contactoList.style.display = contactoList.style.display === 'block' ? 'none' : 'block';
        
        // Cambia la clase para rotar la flecha
        arrow.classList.toggle('open');
    });
});