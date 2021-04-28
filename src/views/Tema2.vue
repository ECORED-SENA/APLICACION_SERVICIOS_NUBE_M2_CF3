<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Entornos de codificación e instalación JavaScript
    figure
          img(src='@/assets/curso/img2.jpg', alt='Texto que describa la imagen')
    .row.my-5
      .col-lg-7
        p En su mayoría los navegadores (Chrome, Mozilla, Edge) tienen intérprete de 
          b JavaScript 
          b-none y adicional se puede instalar el intérprete para el sistema operativo de preferencia (Framebits, 2020).
          br
          br
          |Dado lo anterior, existen herramientas, manuales o videos que se emplean para el desarrollo de programas en 
          b JavaScript 
          b-none en y a continuación se comparten recursos de acceso y material audiovisual de apoyo de cada herramienta, tal como se indica en la siguiente tabla.
      .col-lg-5
        figure
          img(src='@/assets/curso/img3.svg', alt='Texto que describa la imagen')
    .tabla-a.my-5 
      table
        caption Tabla 2 - Entornos de codificación.
        thead.header1
          tr
            th Herramienta
            th Recurso Web
            th Uso y/o instalación
        tbody
          tr
            td.text-center Editor y compilador en línea PlayCode
            td.text-center 
              a.link(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                | https://playcode.io/
            td Woodrow, J (2018) How to use playcode.io. 
              a.link(href="https://www.youtube.com/watch?v=9rtsvbc4KZI " target="_blank")
                | https://www.youtube.com/watch?v=9rtsvbc4KZI 
          tr
            td.text-center Intérprete de JavaScript: Node js
            td.text-center.header2 
              a.link(href="https://nodejs.org/es/" target="_blank")
                | https://nodejs.org/es/
            td Framebits. (19 de enero. 2020). Descargar e instalar Node Js en Windows 10. 
              a.link(href="https://youtu.be/v0x1Ku5Tgac" target="_blank")
                | https://youtu.be/v0x1Ku5Tgac 
          tr
            td.text-center Editor de código Visual Studio Code
            td.text-center
              a.link(href="https://code.visualstudio.com/" target="_blank")
                | https://code.visualstudio.com/
            td Code Compadre. (30 de junio. 2020). How to Download and Install Visual Studio Code for Windows 10. 
              a.link(href="https://youtu.be/KpzkPlh_HsU" target="_blank")
                | https://youtu.be/KpzkPlh_HsU
              
          tr
            td.text-center El navegador: Google Chrome
            td.text-center
              a.link(href="https://www.google.com/chrome/" target="_blank")
                | https://www.google.com/chrome/
            td Choque, R. C. (2020, May 10). Cómo usar la consola de google chrome para Javascript. Youtube. Retrieved from 
              a.link(href="https://www.youtube.com/watch?v=Hf3n-p3VYx4 " target="_blank")
                | https://www.youtube.com/watch?v=Hf3n-p3VYx4 
              
    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
