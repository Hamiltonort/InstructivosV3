const formulario = document.getElementById("loginForm");
const error = document.getElementById("error");

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    const documento =
        document.getElementById("documento").value.trim();

    const password =
        document.getElementById("password").value.trim();

    // Usuario temporal para la primera versión
    if (documento === "1234" && password === "1234") {

        sessionStorage.setItem(
            "usuario",
            JSON.stringify({
                documento: documento
            })
        );

        window.location.href = "menu.html";

    } else {

        error.textContent =
            "Documento o contraseña incorrectos.";

    }

});