# Prueba UD2 · Versión A · Respuestas del ejercicio 1

**Nombre y apellidos:Carmelo García Montesdeoca**

Rellena la tabla con lo que muestra la consola (o el error que da) y una justificación de una línea con el concepto de la unidad (hoisting, zona muerta temporal, ámbito de bloque, sombreado, coerción, *falsy*, `??`…).

| Fragmento | Salida de la consola (o error) | Justificación |
|-----------|--------------------------------|---------------|
| F1 |Por consola salen los dos resultados de console log.|Es porque en Java al declarar un variable con var se queda ya activa en todo el proyecto.|
| F2 |Por consola da el error (precio is not defined).|Esto se debe a que si declaramos una variable con let solo empezara a contar para el resto del proyecto desde el punto donde esta hacia abajo.|
| F3 |Por consola salen los dos resultados de console log.|Esto se debe a que la variable let se declara primero fuera y posteriormente se declara dentro de un if, esto lo que hace es que la variable declarada dentro del if solo existe dentro del mismo por lo tanto los console.log que esten dentro de ese if y que hagan referencia a esa variable responderan a la misma. Por otro lado la que esta declarada por fuera sigue en "contacto" con el console log que tambien esta por fuera y por eso tambien responde.|
| F4 |Por consola se muetra todo sin ninun error.|1. Se muestra 53 ya que al estar el 5 entre comillas y sumarlo con el 3 lo transforma todo en un string. 2. La resta por el contrario transforma todo a int lo que hace que el 5 menos el 3 de 2. 3. Responde true ya que el codigo de los caracteres de 9 es mayor que el de 10. |
| F5 |Por consola devuelve todo sin problema.| |
