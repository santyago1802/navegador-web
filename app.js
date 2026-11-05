const textoContador = document.getElementById("contador");
const botonLike = document.getElementById("getElementById" in document ? document.getElementById : null) || document.getElementById("btn-like"); // O la forma normal:
const botonDislike = document.getElementById("btn-dislike"); // ¡Nuevo botón capturado!
const tablaCuerpo = document.getElementById("tabla-cuerpo");

let likes = 0;


document.getElementById("btn-like").addEventListener("click", () => {
    likes++;
    textoContador.textContent = likes;

    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    const horaActual = `${horas}:${minutos}:${segundos}`;

    const nuevaFila = document.createElement("tr");

    const celdaNumero = document.createElement("td");
    celdaNumero.textContent = likes;

    const celdaHora = document.createElement("td");
    celdaHora.textContent = horaActual;

    nuevaFila.appendChild(celdaNumero);
    nuevaFila.appendChild(celdaHora);

    tablaCuerpo.insertBefore(nuevaFila, tablaCuerpo.firstChild);
});

document.getElementById("btn-dislike").addEventListener("click", () => {
    if (likes > 0) {
        likes--;
        textoContador.textContent = likes;
        
        const ahora = new Date();
        const horaActual = `${String(ahora.getHours()).padStart(2, '0')}:${String(ahora.getMinutes()).padStart(2, '0')}:${String(ahora.getSeconds()).padStart(2, '0')}`;
        
        const nuevaFila = document.createElement("tr");
        const celdaNumero = document.createElement("td");
        celdaNumero.textContent = `-${likes + 1}`;
        const celdaHora = document.createElement("td");
        celdaHora.textContent = `Retirado a las ${horaActual}`;

        nuevaFila.appendChild(celdaNumero);
        nuevaFila.appendChild(celdaHora);
        tablaCuerpo.insertBefore(nuevaFila, tablaCuerpo.firstChild);
    }
});