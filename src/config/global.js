export default {
  global: {
    componenteFormativo: 'Codificación de algoritmos',
    descripcionCurso:
      'La realización de programas informáticos es una de las industrias de mayor crecimiento en los últimos años considerando que el producto final de un programa informático es un conjunto de instrucciones que el computador puede interpretar. En este componente aprenderá de las instrucciones para crear y realizar programas informáticos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos básicos de programación.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Entornos de codificación e instalación JavaScript',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sintaxis del lenguaje JavaScript',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Funciones y operaciones matemáticas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de datos, operadores y orden de evaluación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Expresiones y comentarios.',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Estructuras de selección ',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Estructuras de repetición ',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Estructuras de datos',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Estructuras de salto',
            hash: 't_3_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.8',
            titulo: 'Métodos de ordenamiento y búsqueda',
            hash: 't_3_8',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Depuración y fallas de sintaxis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Fallas de lógica  ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Manejo de errores y excepciones',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro industrial del diseño y la manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: [
          'Henry Eduardo Bastidas Paruma',
          'Jonathan Guerrero Astaiza',
          'Peter Emerson Pinchao Solis',
          'Zulema Yidney León Escobar',
        ],
        cargo: 'Expertos temáticos',
        centro: 'Centro de teleinformática y producción industrial',
        regional: 'Regional Cauca',
      },
      {
        nombre: ['Alix Cecilia Chinchilla Rueda', 'Oscar Absalón Guevara'],
        cargo: 'Diseñadores instruccionales',
        centro: 'Centro de gestión industrial',
        regional: 'Regional Bogotá',
      },
      {
        nombre: ['José Gabriel Ortiz Abella', 'Julia Isabel Roberto'],
        cargo: 'Evaluadores instruccionales',
        centro: 'Centro para la industria y la comunicación gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisión metodológica y pedagógica',
        centro: 'Centro para la industria de la comunicación gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: [
          'Camilo Andrés Villamizar Lizcano',
          'José Jaime Luis Tang Pinzón',
          'Juan Daniel Polanco Muñoz',
          'Nelson Iván Vera Briceño',
          'Wilson Andres Arenales Cáceres',
          'Yuly Andrea Rey Quiñonez',
        ],
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro Industrial Del Diseño Y La Manufactura ',
        regional: 'Regional Santander',
      },
      {
        nombre: [
          'Jenny Paola Montillo',
          'Jhana Johana Bustillo',
          'María Isabel Román Rueda',
          'Rafael Augusto Mantilla',
          'Veimar Celis Meléndez',
          'Yuli Marcela Gómez',
        ],
        cargo: 'Revisores de contenido',
        centro: 'Centro Industrial Del Diseño Y La Manufactura ',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: ['Milady Tatiana Villamil Castellanos'],
        cargo: ['Validación de recursos'],
        centro: 'CENTRO DE COMERCIO Y SERVICIOS ',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Autodidacta, F. (11 de mayo de 2017). Depurar o hacer debug a JavaScript con Google Chrome. [Video] ',
      link: 'https://www.youtube.com/watch?v=I388w3wDkjc&t=192s  ',
    },
    {
      referencia:
        'Choque, R. C. (10 de mayo de 2020). Cómo usar la consola de Google Chrome para JavaScript. [Video] ',
      link: 'https://www.youtube.com/watch?v=Hf3n-p3VYx4',
    },
    {
      referencia:
        'Framebits. (19 de enero de 2020). Descargar e instalar Node Js en Windows 10. [Video].',
      link: 'https://youtu.be/v0x1Ku5Tgac ',
    },
    {
      referencia:
        'López, J. (2009). Algoritmos y programación (guía para docentes).',
      link: 'https://eduteka.icesi.edu.co/',
    },
    {
      referencia: 'MDN. (2021). Array – JavaScript.',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array#  ',
    },
    {
      referencia: 'MDN. (2021a). Expresiones y operadores – JavaScript.',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators ',
    },
    {
      referencia: 'MDN. (2021b). Math – JavaScript. ',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math  ',
    },
    {
      referencia: 'MDN. (2021c). Array.prototype.find() – JavaScript. ',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find  ',
    },
    {
      referencia: 'MDN. (2021d). Funciones – JavaScript',
      link:
        ' https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions',
    },
    {
      referencia:
        'MDN. (2021e). Tipos de datos y estructuras en JavaScript – JavaScript. ',
      link: 'https://developer.mozilla.org/es/docs/Web/ ',
    },
    {
      referencia:
        'Rojas A., V. y Ñacato C., J. (1980). Técnica de flujogramas I. Editora Andina.',
    },
    {
      referencia: 'Vedia, M. (2018). Cuándo usar Return en JavaScript. ',
      link:
        'https://medium.com/@mvtercero85/cuando-usar-return-en-javascript-7b80e025eb7f ',
    },
  ],
  glosario: [
    {
      termino: 'Código fuente',
      significado:
        'compuesto por la línea de texto de un programa en determinado lenguaje de programación.',
    },
    {
      termino: 'Código máquina',
      significado:
        'Código de instrucciones que directamente interpreta el circuito microprogramable microprocesador de una computadora.',
    },
    {
      termino: 'Compilador',
      significado:
        'Programa de computador encargado de traducir el código fuente de otro programa escrito en un lenguaje de programación a otro lenguaje de programación.',
    },
  ],
  complementario: [
    {
      texto:
        'Framebits. (19 de enero de 2020). Descargar e instalar Node Js en Windows 10. [Video].',
      tipo: 'Video',
      link: 'https://youtu.be/v0x1Ku5Tgac',
    },
    {
      texto:
        'Code Compadre. (30 de junio de 2020). How to Download and Install Visual Studio Code for Windows 10. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/KpzkPlh_HsU',
    },
    {
      texto:
        'VideoMarketingViral. (11 de enero de 2020). Descargar Google Chrome para PC 2021 (WINDOWS 7/8/10). [Video] YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/V-M2rMBhgKc',
    },
    {
      texto: 'MDN. (2021). Array – JavaScript. ',
      tipo: 'Documentación técnica',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math ',
    },
    {
      texto: 'MDN. (2021). Expresiones y operadores – JavaScript. ',
      tipo: 'Documentación técnica',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators ',
    },
    {
      texto: 'MDN. (2021). Funciones – JavaScript. ',
      tipo: 'Documentación técnica',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions ',
    },
    {
      texto: 'MDN. (2021). Array.prototype.find() – JavaScript.',
      tipo: 'Documentación técnica',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find ',
    },
    {
      texto:
        'Choque, R. C. (10 de mayo de 2020). Cómo usar la consola de Google Chrome para JavaScript. [Video] YouTube',
      tipo: 'Video',
      link: 'https://youtu.be/Hf3n-p3VYx4 ',
    },
    {
      texto:
        'Autodidacta, F. (11 de mayo de 2017). Depurar o hacer debug a JavaScript con Google Chrome. [Video] YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/I388w3wDkjc ',
    },
  ],
}
