const primera = "a, b, c ,d";

const partes = primera.split(",");

const salida = document.getElementById("a1");

let textoSalida = "";
textoSalida += "<ul>"

for(let i = 0; i < primera.length; i++){
    textoSalida += "<li>" + partes[i] + "</li>"
}

textoSalida += "</ul>";
