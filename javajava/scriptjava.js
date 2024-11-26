// script.js

document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector('.input-submit'); // Selecciona el botón
    const userInput = document.getElementById('user');
    const passInput = document.getElementById('pass');
    const rememberCheckbox = document.getElementById('remember');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // Previene cualquier comportamiento por defecto

        const username = userInput.value.trim();
        const password = passInput.value.trim();

        // Validación: verifica que ambos campos estén llenos
        if (username === "" || password === "") {
            alert("Por favor, completa todos los campos.");
            return; // Detener si falta algún campo
        }

        // Simulación de inicio de sesión exitoso
        alert(`Inicio de sesión exitoso. Bienvenido, ${username}!`);
        
        // Redirigir a la página principal
        window.location.href = "pagina_principal.html";

        // Guardar el estado de "Recordar más tarde"
        if (rememberCheckbox.checked) {
            localStorage.setItem('rememberMe', username);
        } else {
            localStorage.removeItem('rememberMe');
        }
    });

    // Cargar el nombre de usuario si "Recordar más tarde" está activado
    if (localStorage.getItem('rememberMe')) {
        userInput.value = localStorage.getItem('rememberMe');
        rememberCheckbox.checked = true;
    }
});
