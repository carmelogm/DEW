function mostrarCartas(cartas){

    const caja = document.getElementById("caja")

    let datosGuardados = localStorage.getItem("partidaActual");
    let numerocajas = [];
    
    if(datosGuardados){

        numerocajas = JSON.parse(datosGuardados);
        cartas = numerocajas.length / 2;

    } else {  

        cartas = prompt("Introduce el número de parejas (4-12): ")

        if(cartas < 4 || cartas > 12){

            return alert("El número de parejas esta fuera del rango.")

        } else {

            for(let i = 0; i < cartas; i++){
                    numerocajas.push({datos: i+1, ocultas: true});
                    numerocajas.push({datos: i+1, ocultas: true});
            }

            for (let i = numerocajas.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [numerocajas[i], numerocajas[j]] = [numerocajas[j], numerocajas[i]];
            }

            localStorage.setItem("partidaActual", JSON.stringify(numerocajas));
        } 
    }

    const cartastotales = cartas * 2;
    const ncolumnas = Math.round(Math.sqrt(cartastotales));

    caja.style.gridTemplateColumns = `repeat(${ncolumnas}, 100px)`;
    caja.innerHTML = "";

    for(let i = 0; i < numerocajas.length; i++){
        const divCarta = document.createElement("div");
        divCarta.classList.add("divCarta")

        if (numerocajas[i].ocultas === true){
            divCarta.textContent = "x";
        } else {
            divCarta.textContent = numerocajas[i].datos;
        }
        divCarta.onclick = function(){
            numerocajas[i].ocultas = !numerocajas[i].ocultas;
            localStorage.setItem("partidaActual", JSON.stringify(numerocajas));
            mostrarCartas();
        }
        
        caja.appendChild(divCarta);
    }

    var secuencia = [];
        for(let i = 0; i < numerocajas.length; i++){
            secuencia.push(numerocajas[i].datos)
        }

    console.log("Número de parejas: " + cartas);
    console.log("Número de cartas: " + cartas * 2);
    console.log("Secuencia actual: " + secuencia);
}

    function fin(){ 
    localStorage.removeItem("partidaActual");
    return mostrarCartas(); 
}

mostrarCartas();