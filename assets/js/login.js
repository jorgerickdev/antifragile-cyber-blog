/* ==========================================================================
   Antifragile Cyber Labs — Lógica de Autenticación (login.js)
   Descripción: Validación de credenciales del operador en el lado del cliente.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Selección de elementos del DOM por sus IDs
    const formulario = document.getElementById('formularioLogin');
    const campoUsuario = document.getElementById('usuario');
    const campoClave = document.getElementById('clave');
    const mensajeError = document.getElementById('mensajeError');

    // Manejo del evento de envío del formulario
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Evita la recarga automática del navegador

        const usuario = campoUsuario.value.trim();
        const clave = campoClave.value.trim();

        // Limpiar alertas de error previas
        mensajeError.style.display = 'none';
        mensajeError.textContent = '';

        // Validación de credenciales de prueba
        if (usuario === 'rick' && clave === '123456') {
            // Acceso concedido: redirigir al panel de operaciones
            window.location.href = 'dashboard.html';
        } else {
            // Acceso denegado: mostrar alerta de error
            mensajeError.textContent = '⚠️ Credenciales no válidas. Verifica tu usuario y contraseña de operador.';
            mensajeError.style.display = 'block';

            // Limpiar los campos del formulario y regresar el foco al usuario
            formulario.reset();
            campoUsuario.focus();
        }
    });
});
