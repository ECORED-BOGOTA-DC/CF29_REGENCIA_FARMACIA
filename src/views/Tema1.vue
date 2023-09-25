<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Mercado
    
    .container-100.mb-5.py-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: center;"
    )
      .d-flex.flex-wrap.justify-content-center.align-items-center.col-lg-10.mx-auto
        .tarjeta.tarjeta-edit-1.p-4.col-lg-5.order-lg-1.order-2(data-aos="fade-right")
          p.mb-2.py-lg-5 Es un proceso que se da cuando hay dos partes en la que una opera como comprador y la otra como vendedor ya sea de bienes o de servicios, originando el intercambio. Ante esto se podría decir que hay mercado cuando:
        .col-lg-7.col-10.mb-4.my-lg-auto.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img.m-auto(src="@/assets/curso/temas/tema1/img-1.jpg" style="max-width: 820px" alt="Imagen decorativa")
    
    .col-lg-6.mx-auto.mb-5
      .titulo-sexto.color-acento-botones.mb-4(data-aos="fade-right")
        h5 Figura 1.
        span Mercado
      figure(data-aos="zoom-in")
        img(src="@/assets/curso/temas/tema1/img-2.svg" alt="Imagen que muestra el mercado donde hay un acuerdo de intercambio con: Intención de Comprar Intención de Vender A un precio acordado")

    p(data-aos="fade-right") El fundamento del mercado es el intercambio, que es una acción que vienen haciendo los seres humanos desde la antigüedad por necesidad.
    p.mb-5(data-aos="fade-right") Existen 2 clases de intercambio:
    
    TabsC.color-secundario.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Intercambio sin dinero (trueque)")
        .container-tabsc-1.col-xl-10.mx-auto
          p.order-2.order-lg-1.col-12.col-xl-10 Consiste en cambiar un bien por otro.
          img.order-1.order-lg-2(src='@/assets/curso/temas/tema1/img-3.svg' style="max-width: 267px; margin-left: -14rem" alt="Imagen decorativa")
      .py-3.py-md-4(titulo="Intercambio con dinero")
        .container-tabsc-1.col-lg-10.mx-auto
          p.order-2.order-lg-1.col-12.col-xl-10 Consiste en cambiar un bien por dinero.
          img.order-1.order-lg-2(src='@/assets/curso/temas/tema1/img-4.svg' style="max-width: 415px; margin-left: -20rem" alt="Imagen decorativa")

    h3.mb-4(data-aos="fade-left") Integrantes del mercado
    p.mb-5(data-aos="fade-right") Para que el mercado se pueda dar, requiere dos clases de participantes, los cuales son:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5(style="background-color: #E6F7FE" data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-5.svg' style="max-width: 173px" alt="Imagen decorativa los compradores")
        h2.text-center Los compradores
        p También conocidos como demandantes, son las personas que desean o necesitan de un bien o de un servicio y lo adquieren, ya sea por intercambio directo o trueque o por intercambio indirecto o con dinero.

      .col-md.tarjeta.color-primario.p-5(style="background-color: #A1EDF7" data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-6.svg' style="max-width: 173px" alt="Imagen decorativa los vendedores")
        h2.text-center Los vendedores
        p También conocidos como oferentes, son las personas interesadas en vender un bien o servicios y lo realizan, ya sea por trueque o por dinero.

    h3.mb-4(data-aos="fade-left") Principales mercados
    p.mb-5(data-aos="fade-right") Y dentro de los principales mercados se encuentran:

    .row.mb-5
      .tarjeta-avatar-b.mb-5.align-items-start.align-items-lg-center
        .tarjeta-avatar-b__img.position-relative(style="z-index: 1" data-aos="fade-right")
          img.mx-auto(src='@/assets/curso/temas/tema1/t-1.svg' style="max-width: 161px" alt="Imagen decorativa Bienes y servicios")
        .tarjeta.tarjeta--azul-edit(style="background-color: #F1EEFC" data-aos="fade-left")
          .p-3
            h4 Bienes y servicios
            p.mb-0 Como su nombre lo dice, son mercados en los cuales se compran diferentes bienes y servicios, donde los compradores son las familias, las personas, las instituciones y las compañías que los requieren.
            br

      .tarjeta-avatar-b.align-items-start.align-items-lg-center
        .tarjeta-avatar-b__img.position-relative(style="z-index: 1" data-aos="fade-right")
          img.mx-auto(src='@/assets/curso/temas/tema1/t-2.svg' style="max-width: 161px" alt="Imagen decorativa Factores de producción")
        .tarjeta.tarjeta--azul-edit(style="background-color: #F1EEFC" data-aos="fade-left")
          .p-3
            h4 Factores de producción
            p.mb-0 En este mercado se intercambian materias primas, capital y trabajo. Los compradores o demandantes son las empresas que requieren de esto para poder elaborar los productos y los vendedores u oferentes son las personas o familias que los venden por dinero.

    h3.mb-4(data-aos="fade-left") Investigación de mercados (IM)
    p(data-aos="fade-right") La investigación de mercados ha sido definida por varios exponentes, coincidiendo todos en un mismo objetivo: <span style="text-decoration: underline">la IM es el apoyo contundente de los directivos para la toma de decisiones.</span>
    p(data-aos="fade-right") <b>American Marketing Association</b> define la investigación de mercados como:

    .container-100.d-flex.flex-wrap.mb-5.align-items-center
      .col-lg-8.pe-lg-4
        .bloque-texto-d.p-4(data-aos="fade-right")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3 Recolección, tabulación y análisis sistemático de información referente a la actividad de mercadotecnia, que se hace con el propósito de ayudar al ejecutivo a tomar decisiones que resuelvan sus propósitos de negocios
            i.fas.fa-quote-right
        p(data-aos="fade-right") Ahora, hacer efectiva la implementación de mercados se da por dos razones:
        ol.order-2.order-lg-1.lista-ol--cuadro
          li.d-flex.mb-0(data-aos="fade-right")
            .lista-ol--cuadro__vineta
              span(style="color: black; font-weight: bold") 1
            p Originar la información de manera que el <em>marketing</em> de un producto o servicio aumente el éxito.
          li.d-flex.mb-0(data-aos="fade-right")
            .lista-ol--cuadro__vineta
              span(style="color: black; font-weight: bold") 2
            p Crear las alertas que sean necesarias para eludir el fracaso al comercializarlo. 
        p(data-aos="fade-right") Ambas razones se pueden resumir en una: <b>aminorar la incertidumbre al momento de tomar decisiones.</b> 
      .col-lg-4.mx-auto(data-aos="fade-left")
        img.mb-4.mb-md-auto.mx-auto.me-lg-0(src="@/assets/curso/temas/tema1/img-7.svg" style="max-width: 400px" alt="Imagen decorativa")

    .col-xl-6.col-lg-10.mx-auto(data-aos="fade-right")
      .cajon.color-secundario.p-4.mb-4(style="background-color: #E4DDFA")
        p.mb-0 La garantía primaria de la investigación de mercados consiste en conocer quién es el cliente, lo que quiere, cómo, dónde, cuándo y por qué lo quiere. Además, permite instaurar la posición individual y la de los competidores en el mercado.
    
    p.mb-5(data-aos="fade-right") El proceso de investigación de mercados se lleva a cabo mediante los siguientes pasos:

    .container-100.mb-4.py-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.svg')})`}"
      style="background-repeat: no-repeat; background-position: center;"
    )
      ImagenInfografica.color-primario.col-lg-10.col-xl-8.mx-auto(data-aos="zoom-in")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/img-8.svg' alt="Pasos del proceso de investigación de mercados")

        .tarjeta.p-3(x="15.5%" y="5.5%" numero="+" style="background-color: #DDD3FF; border-radius: 3px;")
          .h5.mb-2 1. Definir el problema de <em>marketing</em> y los objetivos de la investigación.
          p.mb-0 ¿Para qué se requiere la información? ¿Se cuenta ya con la información?
        .tarjeta.p-3(x="24%" y="20%" numero="+" style="background-color: #DDD3FF; border-radius: 3px;")
          .h5.mb-2 2. Elección y diseño de un método de investigación.
          p.mb-0 Se puede realizar por medio de tres métodos.
        .tarjeta.p-3(x="12%" y="27%" numero="+" style="background-color: #DDD3FF; border-radius: 3px;")
          p.mb-0 <b>Encuesta:</b> se utilizan cuestionarios.
        .tarjeta.p-3(x="42%" y="27%" numero="+" style="background-color: #DDD3FF; border-radius: 3px;")
          p.mb-0 <b>Observación:</b> se basa en observar cómo actúan sin tener interacción directa con ellos.
        .tarjeta.p-3(x="73%" y="27%" numero="+" style="background-color: #DDD3FF; border-radius: 3px;")
          p.mb-0 <b>Experimento:</b> el investigador observa cómo puede afectar a cierta variable los cambios que realice en otras variables que la interfieran.
        .tarjeta.p-3(x="37%" y="43%" numero="+" style="background-color: #DDD3FF; border-radius: 3px;")
          .h5.mb-2 3. Recolección de datos.
          p.mb-0 Se emplean dos tipos de datos.
        .tarjeta.p-3(x="20%" y="50%" numero="+" style="background-color: #DDD3FF; border-radius: 3px;")
          p.mb-0 <b>Datos primarios:</b> se recogen directamente de la fuente original
        .tarjeta.p-3(x="64%" y="50%" numero="+" style="background-color: #DDD3FF; border-radius: 3px;")
          p.mb-0 <b>Datos secundarios:</b> se obtuvieron antes para otra idea o pueden haberse originado de varias fuentes como entidades gubernamentales o investigadores académicos, entre otras.
        .tarjeta.p-3(x="39%" y="66%" numero="+" style="background-color: #DDD3FF; border-radius: 3px;")
          .h5.mb-2 4. Análisis de datos.
          p.mb-0 En este paso se analizan y comprenden cada uno de los datos obtenidos para obtener conclusiones.
        .tarjeta.p-3(x="36%" y="89.3%" numero="+" style="background-color: #DDD3FF; border-radius: 3px;")
          p.mb-0 <b>5.Presentación de datos.</b> Aquí tanto las conclusiones como las recomendaciones se le presentan a las personas encargadas de la toma de decisiones.
    
    p.mb-5(data-aos="fade-right") Como se acaba de estudiar, una encuesta es un método de reunir información, con la cual se interroga a varias personas con el propósito de obtener información real y directa como consumidores, para una investigación. Los pasos por seguir para el diseño de la encuesta son:

    .container-100.d-flex.flex-wrap.justify-content-center.align-items-center.mb-5
      .col-lg-7.pe-lg-4.order-lg-1.order-2
        ol.order-2.order-lg-1.lista-ol--cuadro.lista-ol--separador
          li.d-flex.mb-3(data-aos="fade-right")
            .lista-ol--cuadro__vineta(style="border-radius: 50%; font-size: 11px")
              span(style="color: black; font-weight: bold") 1
            p.mb-0 Establecer los objetivos de la encuesta.
          li.d-flex.mb-3(data-aos="fade-right")
            .lista-ol--cuadro__vineta(style="border-radius: 50%; font-size: 11px")
              span(style="color: black; font-weight: bold") 2
            p.mb-0 Determinar la población que se va a estudiar.
          li.d-flex.mb-3(data-aos="fade-right")
            .lista-ol--cuadro__vineta(style="border-radius: 50%; font-size: 11px")
              span(style="color: black; font-weight: bold") 3
            p.mb-0 Identificar la información que se va a recolectar.
          li.d-flex.mb-3(data-aos="fade-right")
            .lista-ol--cuadro__vineta(style="border-radius: 50%; font-size: 11px")
              span(style="color: black; font-weight: bold") 4
            p.mb-0 Diseñar el cuestionario.
          li.d-flex.mb-3(data-aos="fade-right")
            .lista-ol--cuadro__vineta(style="border-radius: 50%; font-size: 11px")
              span(style="color: black; font-weight: bold") 5
            p.mb-0 Calcular la muestra.
          li.d-flex.mb-3(data-aos="fade-right")
            .lista-ol--cuadro__vineta(style="border-radius: 50%; font-size: 11px")
              span(style="color: black; font-weight: bold") 6
            p.mb-0 Recolectar la información.
          li.d-flex.mb-3(data-aos="fade-right")
            .lista-ol--cuadro__vineta(style="border-radius: 50%; font-size: 11px")
              span(style="color: black; font-weight: bold") 7
            p.mb-0 Contabilizar y procesar la información obtenida.
          li.d-flex.mb-3(data-aos="fade-right")
            .lista-ol--cuadro__vineta(style="border-radius: 50%; font-size: 11px")
              span(style="color: black; font-weight: bold") 8
            p.mb-0 Analizar la información.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4.mx-auto(data-aos="fade-left")
        img.mb-4.mb-md-auto.mx-auto.me-lg-0(src="@/assets/curso/temas/tema1/img-9.svg" style="max-width: 505px" alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") Para la realización de preguntas para una encuesta de investigación de mercados, existen diferentes opciones, las cuales son: 

    .d-flex.flex-wrap.justify-content-center.align-items-center.mb-0
      .col-lg-4.col-8.mb-lg-0.mb-4.mx-auto(data-aos="fade-right")
        img.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-10.png" style="max-width: 400px" alt="Imagen decorativa")
      AcordionA.col-lg-8.ps-lg-4.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="fade-left")
        .row(titulo="Preguntas abiertas")
          .mb-4.mb-md-0
            p En estas se realiza la pregunta y no se dan opciones de respuesta, se deja para que el encuestado responda abiertamente. Cabe aclarar que son poco utilizadas, porque al final las encuestas se deben cerrar y estandarizar.
        .row(titulo="Preguntas cerradas")
          .mb-4.mb-md-0
            p También denominadas dicotómicas. En estas se realiza la pregunta y se dejan dos opciones de respuesta “sí o no”. Aunque en ocasiones se deja una tercera opción de respuesta “no sabe / no responde”, esto en caso tal de que el encuestado no se acomode por cualquier motivo al sí o al no. Solo se utilizan en temas puntuales que admiten solo esas dos opciones de respuesta.
        .row(titulo="Preguntas cerradas con múltiples respuestas")
          .mb-4.mb-md-0
            p En estas se realiza la pregunta y se dan varias opciones de respuesta, dando al encuestado la oportunidad de escoger la que considere más oportuna.
        

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.tarjeta-edit-1
  border-radius: 20px
  border-bottom-right-radius: 0
  background-color: #CDEDFC
  margin-right: -4rem
  margin-left: auto
  position: relative
  @media (max-width: 991px)
    margin-right: auto
    border-radius: 20px
    margin-bottom: 1rem
.container-tabsc-1
  display: flex
  align-items: center
  p
    background-color: #E4F2F8
    padding: 6rem 7rem
    margin-bottom: 0
  img
    position: relative
  @media (max-width: 991px)
    flex-wrap: wrap
    p
      text-align: center
      padding: 4rem 1rem
    img
      margin: auto !important
      margin-bottom: 1rem !important
.tarjeta--azul-edit
  position: relative
  border-radius: 3px
  &::after
    content: ''
    position: absolute
    right: 0
    top: 0
    width: 8px
    height: 90%
    background-color: #7E5EE3
.bloque-texto-d
  border-top: 0
  &::before
    background-color: #EFFAFE
.acordion
  .tarjeta
    background-color: #E4DEF4
  .acordion__activo
    background-color: #CFE3E5
</style>
