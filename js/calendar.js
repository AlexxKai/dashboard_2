document.addEventListener("DOMContentLoaded", function () {
    updateCalendar();

    // Actualiza el calendario cada segundo
    setInterval(updateCalendar, 1000);
});

function updateCalendar() {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    const calendarElement = document.getElementById("calendar");
    calendarElement.innerHTML = "";

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const totalWeeks = Math.ceil((daysInMonth + firstDayOfMonth) / 7);

    // Crear la cabecera del calendario con el mes y el año
    const headerRow = document.createElement("tr");
    const headerCell = document.createElement("th");
    headerCell.colSpan = 7;
    headerCell.textContent = new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric" }).format(today);
    headerRow.appendChild(headerCell);
    calendarElement.appendChild(headerRow);

    // Crear la fila para los nombres de los días
    const dayNamesRow = document.createElement("tr");
    const dayNames = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
    for (const day of dayNames) {
        const th = document.createElement("th");
        th.textContent = day;
        dayNamesRow.appendChild(th);
    }
    calendarElement.appendChild(dayNamesRow);

    // Crear las filas del calendario
    let dayCounter = 2 - firstDayOfMonth; // Ajustado para iniciar desde el lunes

    for (let i = 0; i < totalWeeks; i++) {
        const tr = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            const td = document.createElement("td");
            td.textContent = "";

            if (dayCounter > 0 && dayCounter <= daysInMonth) {
                // Marcar el día actual con un círculo
                if (dayCounter === today.getDate()) {
                    td.classList.add("today");
                    const dayLabel = document.createElement("div");
                    dayLabel.classList.add("day-label");
                    dayLabel.textContent = dayCounter;
                    td.appendChild(dayLabel);
                }

                // Añadir un círculo a la celda actual
                if (dayCounter === today.getDate()) {
                    td.classList.add("circle");
                }
                // Utilizar una función de clic con una variable local para almacenar el valor de dayCounter
                const dayValue = dayCounter;
                td.addEventListener("click", function () {
                    alert("Has hecho clic en el día " + dayValue + "/" + (currentMonth + 1) + "/" + currentYear);
                });

                td.textContent = dayCounter;
            }

            tr.appendChild(td);
            dayCounter++;
        }
        calendarElement.appendChild(tr);
    }
}
