document.addEventListener("DOMContentLoaded", function () {
    var searchLink = document.getElementById("searchLink");
    var searchBarContainer = document.getElementById("searchBarContainer");

    searchLink.addEventListener("click", function (event) {
        event.stopPropagation(); // Evitar que el clic se propague y cierre inmediatamente

        searchBarContainer.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (event.target !== searchLink && !searchLink.contains(event.target) && !searchBarContainer.contains(event.target)) {
            // Cerrar la barra de búsqueda si se hace clic fuera del enlace y la barra de búsqueda
            searchBarContainer.classList.remove("active");
        }
    });
});