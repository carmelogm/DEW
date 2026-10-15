/* =====================================================================
   Prueba UD2 · Versión A · Ejercicio 2 · Completa el código
   Tiempo de descarga de un fichero
   ---------------------------------------------------------------------
   Nombre y apellidos: Carmelo García Montesdeoca

   Sustituye cada hueco (comentarios ① a ⑧) por el código que falta.
   No cambies nada más. El programa debe ejecutar sin errores.

   Qué hace:
     a) Pide el tamaño de un fichero en MB (número).
     b) Pide la velocidad de la conexión en Mbps. Si el usuario cancela,
        se usa 100 por defecto (operador ??).
     c) Si el tamaño o la velocidad no son números positivos, muestra
        un error y NO calcula nada (cláusula de guarda).
     d) Calcula los segundos de descarga: tamaño × 8 / velocidad.
     e) Muestra el tiempo como m:ss (Math.trunc, %, padStart) y el
        tamaño en GB con dos decimales (1 GB = 1024 MB).

   Comprobación: 1500 MB a 100 Mbps -> 2:00 · 1,46 GB
                 700 MB a 50 Mbps   -> 1:52 · 0,68 GB
   ===================================================================== */
'use strict';
if (typeof prompt === 'undefined') { require('./_node-prompt.js'); } // solo actúa en Node

const BITS_POR_BYTE = 8;
const MB_POR_GB = 1024;
const SEGUNDOS_POR_MINUTO = 60;

// ----- a) y b) ENTRADA ----------------------------------------------------
const tamanoMb = parseInt(prompt('Tamaño (Mbps): '));        // número de MB
const velocidadTexto = prompt('Velocidad (Mbps): ') ?? 100;  // '100' si cancela
const velocidadMbps = parseInt(velocidadTexto);              // texto -> número

// ----- c) CLÁUSULA DE GUARDA ----------------------------------------------
if ( tamanoMb < 0 || velocidadMbps < 0 ) {
  console.error('Error: el tamaño y la velocidad deben ser números positivos.');
} else {
  // ----- d) CÁLCULO --------------------------------------------------------
  const segundosTotales = Math.round((tamanoMb * BITS_POR_BYTE) / velocidadMbps);
  const minutos = Math.trunc(segundosTotales / SEGUNDOS_POR_MINUTO) ;            // minutos completos
  const segundos = Math.round(minutos % SEGUNDOS_POR_MINUTO) ;                   // segundos que sobran
  const segundosTexto = String(segundos).padStart(2, '0') ;                      // siempre dos cifras: '05', '52'
  const tamanoGb = tamanoMb / MB_POR_GB ;                                        // GB con dos decimales (texto)

  // ----- e) SALIDA ---------------------------------------------------------
  console.log(`Fichero de ${tamanoMb} MB (${tamanoGb} GB)`);
  console.log(`A ${velocidadMbps} Mbps tarda ${minutos}:${segundosTexto}`);
}
