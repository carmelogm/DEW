let lista = [1,2,3,4,5,6,7,8,9]

// for(let i = 0; i <= lista.length; i++){
//     console.log(lista)
// }

// console.log(lista)

// ---------------------------------------------

let cadena = "1, 2, 3, 4, 5, 6, 7, 8, 9"

// cadena.split(",")

// let resultado = cadena.split(", ")

// let subcadena = cadena.substring()

// console.log(subcadena)

// for(let i = 0; i <= cadena.length; i++){

//     console.log("Introduce un número por teclado")

//     let numero = prompt

//     if (cadena.includes(numero)){
//         console.log("Encontrado")
//     }
// }

let resultado = cadena.split(",")

let resultado2 = []

for(let i = 0; i < resultado.length; i++){
    let parcial = resultado[i].split(";")
    for(let j = 0; j < parcial.length; j++){
        resultado2.push(parcial[j])
    }
}

console.log(resultado2)