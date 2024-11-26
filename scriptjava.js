// script.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('loginForm');
    const userInput = document.getElementById('user');
    const passInput = document.getElementById('pass');
    const rememberCheckbox = document.getElementById('remember');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        const username = userInput.value.trim();
        const password = passInput.value.trim();

        // Validación simple
        if (username === "" || password === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Simulación de inicio de sesión
        if (username === "usuario" && password === "contraseña") {
            alert("Inicio de sesión exitoso!");
            // Redirigir al usuario a otra página local
            window.location.href = "pagina_principal.html"; // Ruta a la subcarpeta
        } else {
            alert("Nombre de usuario o contraseña incorrectos.");
        }

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