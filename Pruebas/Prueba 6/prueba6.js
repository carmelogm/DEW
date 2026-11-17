class Libro {
  constructor(titulo, precio, stock = 0) {
    this.titulo = titulo;
    this.precio = precio;
    this.stock = stock;
  }

  precioConIgic() {
    return Math.round(this.precio * 1.07 * 100) / 100;
  }

  hayStock() {
    return this.stock > 0;
  }

  mostrar(){
    return "Titulo: " + this.titulo;
  }

  get Titulo(){
    return this.titulo;
  }

  get Precio(){
    return this.precio;
  }

  get Stock(){
    return this.stock;
  }

  set Titulo(valor){
    this.titulo = valor;
  }

  set Precio(valor){
    this.precio = valor
  }

  set Stock(valor){
    if(Number.isInteger(valor) || valor < 0){
        this.stock = valor
    } else {
        console.log("Los datos son invalidos, asegurate de ajustarte a las normas")
    }
  }
  
}

const l1 = new Libro('Mararía', 12.5, 4);
const l2 = new Libro('Poemas de la isla', 9);


// === COMPROBACIONES ===

console.log(l1.Titulo)
console.log(l1.Precio)
console.log(l1.Stock)

console.log("=========================")

l1.Stock = 8;
console.log(l1.Stock);

l1.precio = 50;
console.log(l1.Precio);

l1.Titulo = "CosasCososas"
console.log(l1.Titulo)