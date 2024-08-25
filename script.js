const textArea = document.querySelector("text-area");
const mensaje = document.querySelector("mensaje");

// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function btnEncriptar() {
    const textArea = document.querySelector("#input-text");
    const mensaje = document.querySelector("#output-text");
    const botonCopiar = document.querySelector(".copiar");

    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = ""; // Limpia el textarea de entrada después de encriptar
    mensaje.style.backgroundImage = "none"; // Quita la imagen de fondo al encriptar

    // Mostrar el botón "Copiar" solo si hay texto encriptado
    if (textoEncriptado.trim() !== "") {
        botonCopiar.classList.remove("hidden");
    }
}

function encriptar(texto) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    texto = texto.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return texto;
}

function btnDesencriptar() {
    const textArea = document.querySelector("#input-text");
    const mensaje = document.querySelector("#output-text");
    const botonCopiar = document.querySelector(".copiar");

    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = ""; // Limpia el textarea de entrada después de desencriptar
    mensaje.style.backgroundImage = "none"; // Asegura que la imagen de fondo desaparezca

    // Mostrar el botón "Copiar" solo si hay texto desencriptado
    if (textoDesencriptado.trim() !== "") {
        botonCopiar.classList.remove("hidden");
    }
}

function desencriptar(texto) {
    let matrizCodigo = [
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"]
    ];
    texto = texto.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return texto;
}

function copiarTexto() {
    const mensaje = document.querySelector("#output-text");
    const botonCopiar = document.querySelector(".copiar");

    if(botonCopiar.classList.contains("hidden")) return;

    mensaje.select();    
    document.execCommand("copy");


    // Ocultar el botón "Copiar" después de copiar el texto
    botonCopiar.classList.add("hidden");
}