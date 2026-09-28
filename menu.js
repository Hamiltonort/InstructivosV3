document.addEventListener("DOMContentLoaded", () => {

    const usuarioGuardado =
        sessionStorage.getItem("usuario");

    const userName =
        document.getElementById("userName");

    const logoutButton =
        document.getElementById("logout");

    const machineCards =
        document.querySelectorAll(".machine-card");


    /* ===================================
       MOSTRAR USUARIO
    =================================== */

    if (usuarioGuardado) {

        try {

            const usuario =
                JSON.parse(usuarioGuardado);

            userName.textContent =
                `Operario: ${usuario.documento}`;

        } catch (error) {

            console.error(
                "Error leyendo usuario:",
                error
            );

        }

    }


    /* ===================================
       SELECCIONAR MÁQUINA
    =================================== */

    machineCards.forEach((card) => {

        card.addEventListener("click", () => {

            const machine =
                card.dataset.machine;

            window.location.href =
                `capacitacion.html?machine=${encodeURIComponent(machine)}`;

        });

    });


    /* ===================================
       CERRAR SESIÓN
    =================================== */

    logoutButton.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            sessionStorage.clear();

            window.location.href =
                "login.html";

        }
    );

});