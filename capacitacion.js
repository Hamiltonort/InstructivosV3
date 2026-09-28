document.addEventListener("DOMContentLoaded", () => {

    const video =
        document.getElementById("trainingVideo");

    const title =
        document.getElementById("machineTitle");

    const backButton =
        document.getElementById("backButton");

    const logoutButton =
        document.getElementById("logout");

    const progressValue =
        document.getElementById("progressValue");

    const progressText =
        document.getElementById("progressText");


    /* ===================================
       LEER MÁQUINA DESDE LA URL
    =================================== */

    const params =
        new URLSearchParams(window.location.search);

    const machine =
        params.get("machine");


    /* ===================================
       CONFIGURACIÓN
    =================================== */

    const machines = {

        trefiladora: {
            title: "Trefiladora",
            video:
                "../assets/videos/trefiladora/introduccion.mp4"
        },

        cableadora: {
            title: "Cableadora",
            video:
                "../assets/videos/cableadora/introduccion.mp4"
        },

        extrusora: {
            title: "Extrusora",
            video:
                "../assets/videos/extrusora/introduccion.mp4"
        }

    };


    /* ===================================
       VALIDAR MÁQUINA
    =================================== */

    if (!machine || !machines[machine]) {

        alert("La capacitación seleccionada no existe.");

        window.location.href =
            "menu.html";

        return;
    }


    /* ===================================
       CARGAR INFORMACIÓN
    =================================== */

    const currentMachine =
        machines[machine];

    title.textContent =
        `Capacitación: ${currentMachine.title}`;

    video.src =
        currentMachine.video;

    video.load();


    /* ===================================
       PROGRESO
    =================================== */

    video.addEventListener(
        "timeupdate",
        () => {

            if (
                !video.duration ||
                !Number.isFinite(video.duration)
            ) {
                return;
            }

            const percentage =
                Math.min(
                    100,
                    Math.max(
                        0,
                        (video.currentTime /
                            video.duration) * 100
                    )
                );

            progressValue.style.width =
                `${percentage}%`;

            progressText.textContent =
                `${Math.round(percentage)}%`;

        }
    );


    /* ===================================
       VOLVER
    =================================== */

    backButton.addEventListener(
        "click",
        () => {

            video.pause();

            window.location.href =
                "menu.html";

        }
    );


    /* ===================================
       LOGOUT
    =================================== */

    logoutButton.addEventListener(
        "click",
        () => {

            video.pause();

            sessionStorage.clear();

            window.location.href =
                "login.html";

        }
    );

});