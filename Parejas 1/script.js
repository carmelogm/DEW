function mostrarCartas(cartas){

    const caja = document.getElementById("caja")
    cartas = prompt("Introduce el número de parejas (4-12): ")

    if(cartas < 4 || cartas > 12){
        return alert("El numero de parejas esta fuera del rango")
    } else {
        const cartastotales = cartas * 2;
        const ncolumnas = Math.round(Math.sqrt(cartastotales));

        caja.style.gridTemplateColumns = `repeat(${ncolumnas}, 100px)`;
        caja.innerHTML = "";

        let numerocajas = [];

        for(let i = 0; i < cartas; i++){
                numerocajas.push(i+1);
                numerocajas.push(i+1);
        }

        for(let i = 0; i < numerocajas.length; i++){
            const divCarta = document.createElement("div");
            divCarta.classList.add("divCarta")
            divCarta.textContent = numerocajas[i];

            caja.appendChild(divCarta);
        }
    }
}

mostrarCartas();