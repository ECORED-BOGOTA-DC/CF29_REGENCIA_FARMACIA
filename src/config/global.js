export default {
  global: {
    componenteFormativo:
      '<em>Merchandising</em> en los servicios farmacéuticos',
    descripcionCurso:
      'En este componente formativo se abordan los conocimientos relacionados con el lanzamiento comercial, con el propósito de que los aprendices reconozcan las estrategias de mercadeo para la promoción y venta de productos farmacéuticos, teniendo presente la normatividad legal vigente, las políticas institucionales y las tecnologías disponibles.',

    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Mercado',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Mercadeo o <em>marketing</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ventas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Manual de identidad corporativa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Publicidad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/331502_CF29_DU.zip',
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
  complementario: [
    {
      tema: 'Mercado',
      referencia:
        'Doral, F. [Escuela de Negocios y Dirección - ENyD]. (2013, 5 de abril). <em>Investigación de mercados: videoconferencia</em> [vídeo]. Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=8-8tJS65JjY&ab_channel=EscueladeNegociosyDirecci%C3%B3n',
    },
    {
      tema: 'Mercado',
      referencia:
        'Arango, D. [Diego Arango]. (2012, 8 de julio). La importancia de la Investigación de Mercado [vídeo]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FgVp3w35GXI',
    },
    {
      tema: 'Mercadeo',
      referencia:
        'Marketing Digital y Redes Sociales. [Marketing Digital y Redes Sociales].(2016, 25 de agosto). <em>Como Es el Consumidor Actual // Consumidor 2.0</em> [vídeo]. Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=_lt7Iq6HCSE&ab_channel=MarketingDigitalyRedesSociales',
    },
    {
      tema: 'Ventas',
      referencia:
        'Arturo, K. (2015). Cómo hacer una encuesta paso a paso. Crece Negocios.',
      tipo: 'Página Web',
      link: 'http://www.crecenegocios.com/como-hacer-una-encuesta-paso-a-paso/',
    },
    {
      tema: 'Manual de identidad corporativa',
      referencia:
        'Marco creativo. [Marco Creativo]. (2017, 16 de febrero). El manual de identidad corporativa con Alejandra Pez // Marco Creativo [vídeo]. Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=YPtSbdLy8RM&ab_channel=MarcoCreativo',
    },
    {
      tema: 'Publicidad',
      referencia: 'Invima. (s.f). 6 pasos publicidad productos farmacéuticos.',
      tipo: 'PDF',
      descarga:
        '/downloads/Anexo3_CF029_6_Pasos_para_solicitar_la_autorizacion_previa_de_publicidad_de_productos_farmaceuticos_de_venta_libre.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Análisis sistemático',
      significado:
        'es una manera de abordar y formular problemas con vistas a una mayor eficacia en la acción, que se caracteriza por concebir a todo objeto (material o inmaterial) como un sistema o componente de un sistema.',
    },
    {
      termino: 'Aminorar',
      significado:
        'disminuir la cantidad, el tamaño, el valor o la intensidad de una cosa.',
    },
    {
      termino: 'Clientes prospectos',
      significado:
        'es un cliente potencial que encaja con las características de tu cliente ideal. Dispone de los medios para comprar (dinero). Está autorizado a tomar decisiones de compra.',
    },
    {
      termino: 'Dicotómica',
      significado:
        'división de un concepto o una materia teórica en dos aspectos, especialmente cuando son opuestos o están muy diferenciados entre sí.',
    },
    {
      termino: 'Empatía',
      significado:
        'es la habilidad que pueden tener las personas para ponerse en el lugar de otros.',
    },
    {
      termino: 'Estandarizar',
      significado:
        'es el proceso de ajustar o adaptar características en un producto, servicio o procedimiento; con el objetivo de que éstos se asemejan a un tipo, modelo o norma en común.',
    },
    {
      termino: 'Ética profesional',
      significado:
        'conjunto de normas y valores morales que los profesionales de un determinado sector deben respetar durante el ejercicio de su profesión.',
    },
    {
      termino: 'Experticia',
      significado:
        'es la habilidad experta en un determinado conocimiento. Es decir que el término experticia denomina a la persona que tiene la cualidad de concentrar tanto conocimiento y pericia en un determinado campo como experiencia por la práctica habitual. La experticia es una cualidad que suma experiencia y habilidad en un área determinada.',
    },
    {
      termino: 'Exuberancia',
      significado: 'abundancia o desarrollo extraordinario.',
    },
    {
      termino: 'Intercambio',
      significado: 'abundancia o desarrollo extraordinario.',
    },
    {
      termino: 'INVIMA',
      significado:
        ' Instituto Nacional de Vigilancia de Medicamentos y Alimentos.',
    },
    {
      termino: 'Mercadotecnia',
      significado:
        'conjunto de técnicas y estudios que tienen como objeto mejorar la comercialización de un producto.',
    },
    {
      termino: 'OMS',
      significado: ' Organización Mundial de la Salud.',
    },
    {
      termino: 'OTC',
      significado: ' Over The Counter (sobre el mostrador).',
    },
    {
      termino: 'Tabulación',
      significado:
        'consiste en elaborar tablas simples, fáciles de leer y que de manera general ofrezcan una acertada visión de las características más importantes de la distribución estadística estudiada.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alejos, D. y Chico J. (1987). <em>Merchandising, papel que desempeña en la compra por impulso.</em> Facultad de ciencias Económicas de la universidad Rafael Landívar. Guatemala.',
      link: '',
    },
    {
      referencia:
        'GestioPolis.com Experto. (2021, mayo 11). Investigación de mercados. Qué es, importancia, tipos, beneficios.',
      link: 'https://www.gestiopolis.com/que-es-la-investigacion-de-mercados/',
    },
    {
      referencia:
        'Palomares, R., (2011). <em>Merchandising</em> -Teoría, práctica y estrategia.',
    },
    {
      referencia: 'Prieto, J.E., (2009). Investigación de mercados.',
      link:
        'http://biblioteca.esucomex.cl/RCA/Investigaci%C3%B3n%20de%20mercados.pdf',
    },
    {
      referencia: 'Quiroa, M (04 de noviembre, 2019). <em>Mercado</em>.',
      link: 'https://economipedia.com/definiciones/mercado.html',
    },
    {
      referencia: 'Navarro, M., (2012). Técnica de ventas. Red tercer milenio.',
      link: 'https://fliphtml5.com/edscb/jdmm/basic',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable de equipo',
          centro: 'Dirección general',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lina Marcela Ayala Pardo',
          cargo: 'Experta Temática',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación instruccional',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmín Rocío Figueroa Pacheco',
          cargo: 'Diseño web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollo fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
