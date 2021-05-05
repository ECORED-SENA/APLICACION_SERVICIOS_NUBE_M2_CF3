<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 6
      .h3 Manejo de errores y excepciones
    p Las excepciones son errores imprevistos que ocurren en la ejecución de un programa; son anormalidades que impiden o perturban el comportamiento o el flujo normal de las instrucciones de un programa.
      br
      br
      |El objetivo principal en el manejo de errores es separar el código de la lógica del programa, del código de manejo de excepciones: 
      b de esta forma, al producirse la anomalía, si ocurre un error y existe un manejador de excepciones, él toma el control de la ejecución del programa.
      br
      br
      |En 
      b JavaScript
      b-none , el control de errores resulta muy necesario tal vez más que en otros lenguajes debido a la dificultad natural de este para testear aplicaciones o los cambios de versión de intérprete en múltiples navegadores.
      br
      br
      |La forma más sencilla de disparar un error es con la palabra reservada 
      b throw, 
      b-none este comando permite enviar al intérprete de 
      b JavaScript 
      b-none el evento de que ha ocurrido un error, generalmente permite enviar cualquier tipo de dato, pero lo más común que envíe un 
      b “Error” 
      b-none como se muestra en la siguiente figura.
    figure.my-5
      img(src='@/assets/curso/img53.svg', alt='Texto que describa la imagen' style="width:500px").m-auto
      figcaption(style="width:500px").m-auto Figura 36/ Lanzar una excepción
    p.mb-5 Existe un tipo de estructura de control en 
      b JavaScript 
      b-none que está pendiente de revisar en el flujo de ejecución de un programa para detectar comportamientos inesperados, la estructura es 
      b try … catch 
      b-none que consta de un bloque que intenta la ejecución de una sesión de código (contexto), a la espera de que pueda ocurrir una posible excepción. Finalizado el contexto existe otro denominado catch que tiene un argumento o variable de contexto, donde se captura el elemento disparado.
    figure.my-5
      img(src='@/assets/curso/img54.jpg', alt='Texto que describa la imagen' style="width:500px").m-auto
      figcaption(style="width:500px").m-auto Figura 37/ Bloque de captura de excepción
    p En la figura 37 se muestra un algoritmo que divide dos números y, como se sabe, en este proceso se debe validar que no exista una división por 0 al no estar definida aritméticamente.
      br
      br
      |Para eso existe el contexto try que va desde la línea 4 a la línea 10, y dentro de él se verifica el caso que el divisor si es igual a 0 debe disparar una excepción. Ella es capturada en la línea 10 por el contexto catch en la variable e, de esta forma, el contexto de catch de la línea 10 a la 13 maneja la excepción, mostrando un mensaje de error y volviendo la variable resultada a nulo. Así, la excepción es lanzada y capturada y el programa no es interrumpido abruptamente, sino que es controlado a pesar de los problemas que se puedan presentar.
    
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
