<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Ventas
    p.mb-5 Las ventas, en términos económicos, son la acción de entregar a un comprador un bien o un servicio ya sea por convenio o por un valor estipulado.  
      br
      br
      |Los aspectos básicos de las ventas son: el producto, el cliente o consumidor, el proceso de administración de venta, como se muestra a continuación:

    TabsC.color-secundario.mb-5
      .py-3.py-md-4.d-flex.flex-wrap(titulo="Producto")
        .col-lg-6.order-2.order-lg-1.pe-lg-4
          p.mb-4 Un producto es una mezcla de características tangibles, como el color del empaque, e intangibles, como los beneficios que le pueda dar el producto o servicio que el cliente o consumidor considera puede complacer su necesidad. 
            br
            br
            |Los productos tienen un ciclo de vida que se divide en cuatro fases:
          ol.order-2.order-lg-1.lista-ol--cuadro.lista-ol--separador
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta(style="border-radius: 50%; font-size: 11px")
                span(style="color: black; font-weight: bold") 1
              p.mb-0 <b>Lanzamiento:</b> es el momento en el que se entra el producto al mercado.
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta(style="border-radius: 50%; font-size: 11px")
                span(style="color: black; font-weight: bold") 2
              p.mb-0 <b>Crecimiento:</b> es cuando el producto es vendido de forma creciente, por lo cual requiere de mejoras.
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta(style="border-radius: 50%; font-size: 11px")
                span(style="color: black; font-weight: bold") 3
              p.mb-0 <b>Madurez:</b> aquí las ventas ya están estables, se minimizan los costos de producción y hay poco crecimiento en ventas. Esta a su vez se subdivide en madurez cíclica, que es cuando la venta de los productos es estacional (toallas higiénicas) y de madurez perpetua cuando la venta de los productos es constante y por mucho tiempo (analgésicos).
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta(style="border-radius: 50%; font-size: 11px")
                span(style="color: black; font-weight: bold") 5
              p.mb-0 <b>Declive:</b> en esta etapa el producto pierde fuerza, por lo cual la rentabilidad baja y obliga a la empresa a tomar la decisión de continuar o no con la venta del producto.
        img.mx-auto.col-lg-6.order-1.order-lg-2.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema3/img-1.svg" style="max-width: 561px")
      .py-3.py-md-4.d-flex.flex-wrap(titulo="Consumidor")
        .col-lg-6.order-2.order-lg-1.pe-lg-4
          p El consumidor es eje fundamental de la empresa, ya que todas las actividades de ésta están direccionadas a satisfacer las carencias del cliente. Se puede definir al consumidor como la o las personas que satisfacen una carencia primaria o secundaria por medio de la adquisición en el mercado de bienes o servicios.
          p Las necesidades o carencias de las personas según Abraham Maslow se dividen como se muestra en la pirámide.
          p.mb-4 La necesidad de salud esta dentro de la categoría de seguridad, por lo cual al consumidor o cliente de una farmacia o farmacia-droguería se le debe cumplir con los estándares de seguridad obligatorios, de manera que no solo se obedezca a la ética profesional del farmacéutico, sino que también el cliente se sienta motivado a comprar sus productos farmacéuticos en nuestro establecimiento.
          ol.order-2.order-lg-1.lista-ol--cuadro.lista-ol--separador
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta(style="border-radius: 50%; font-size: 11px")
                span(style="color: black; font-weight: bold") 1
              p.mb-0 <b>Autorrealización:</b> Moralidad, creatividad, espontaneidad, falta de prejuicios, aceptación de hechos, resolución de problemas.
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta(style="border-radius: 50%; font-size: 11px")
                span(style="color: black; font-weight: bold") 2
              p.mb-0 <b>Reconocimiento:</b> Autorreconocimiento, confianza, respeto, éxito.
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta(style="border-radius: 50%; font-size: 11px")
                span(style="color: black; font-weight: bold") 3
              p.mb-0 <b>Afiliación:</b> Amistad, afecto, intimidad sexual.
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta(style="border-radius: 50%; font-size: 11px")
                span(style="color: black; font-weight: bold") 5
              p.mb-0 <b>Seguridad:</b> Seguridad física, de empleo, de recursos, moral, familiar, de salud, de propiedad privada.
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta(style="border-radius: 50%; font-size: 11px")
                span(style="color: black; font-weight: bold") 5
              p.mb-0 <b>Fisiología:</b> Respiración, alimentación, descanso, sexo, homeostasis.
        img.mx-auto.col-lg-6.order-1.order-lg-2.mb-4.my-lg-auto(src="@/assets/curso/temas/tema3/img-2.svg" style="max-width: 561px")
      .py-3.py-md-4.d-flex.flex-wrap(titulo="Factores")
        .col-lg-6.pe-lg-4
          p.mb-4 Es importante tener en cuenta que hay diferentes factores externos e internos que intervienen en el comportamiento de compra de un cliente, como son:
        img.mx-auto.col-lg-6.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema3/img-3.svg" style="max-width: 561px")
      .py-3.py-md-4.d-flex.flex-wrap(titulo="Proceso de administración")
        .col-lg-6.order-2.order-lg-1.pe-lg-4
          p.mb-4 El fin de este proceso es establecer cada uno de los pasos que se deben seguir en un programa de ventas, los cuales son:
          ul.lista-ul--color.mb-2
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 15px")
              p.mb-0.ps-2 <b>Formulación:</b> en este paso se tienen presente los factores del entorno que intervienen de manera positiva o negativa en la empresa y que permiten pronosticar los factibles resultados. En este paso es vital tener clara la planeación.
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 15px")
              p.mb-0.ps-2 <b>Aplicación:</b> en esta fase se plantean las políticas y acciones que se ejecutaran para lograr los objetivos. Además, se escoge el personal de ventas competente teniendo presente los productos que se van a manejar y a las estrategias de mercadotecnia definidas.
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 15px")
              p.mb-0.ps-2 <b>Evaluación y control:</b> en este punto se diseña la metodología por medio de la cual se medirá el desempeño de la fuerza de ventas.
        img.mx-auto.col-lg-6.order-1.order-lg-2.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema3/img-4.svg" style="max-width: 561px")

    p.mb-5 Ahora bien, los factores que afectan las ventas son de carácter externo e interno:

    .tarjeta.p-4.mb-5(style="background-color: #E8EEFA")
      SlyderA.col-xl-11.mx-auto.py-4(tipo="b")
        .d-flex.flex-wrap
          .col-lg-6.pe-lg-4
            h3 Ambiente externo
            p.mb-4 Se sale de las manos de la empresa, ya que como su nombre lo dice son factores y situaciones que se dan fuera de esta. Este ambiente está integrado por: 
          img.mx-auto.col-lg-6.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema3/img-5.svg" style="max-width: 551px")

        .d-flex.flex-wrap
          .col-lg-6.pe-lg-4
            h3 Ambiente interno
            p.mb-4 Está completamente relacionado con factores y situaciones que se dan dentro de la empresa. Este ambiente está integrado por:
          img.mx-auto.col-lg-6.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema3/img-6.svg" style="max-width: 551px")
    p.mb-5 Y hacen parte de las técnicas de venta, los métodos de ventas y las fases de la venta, como observaremos a continuación.

    h3 Métodos de venta

    p.mb-5 Tienen como propósito llegar al consumidor y dentro de estos se cuenta con:

    ImagenInfografica.color-primario.mx-auto.col-lg-10.col-xl-6
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema3/img-7.svg')

      .tarjeta.p-3(x="35%" y="23.5%" numero="+" style="background-color: #DDD3FF; border-radius: 3px;")
        p.mb-0 En esta clase de venta no hay contacto físico entre el cliente y el vendedor. Algunos ejemplos son las ventas por teléfono, electrónicas ya sea por página web o WhatsApp, entre otras. Un ejemplo claro de estas ventas a nivel farmacéutico son las realizadas a domicilio.
      .tarjeta.p-3(x="78%" y="23.5%" numero="+" style="background-color: #DDD3FF; border-radius: 3px;")
        p.mb-0 En esta clase de venta hay contacto físico entre el cliente y el vendedor.
      .tarjeta.p-3(x="56%" y="41.5%" numero="+" style="background-color: #DDD3FF; border-radius: 3px;")
        p.mb-0 Dentro del establecimiento.
      .tarjeta.p-3(x="100%" y="41.5%" numero="+" style="background-color: #DDD3FF; border-radius: 3px;")
        p.mb-0 Fuera del establecimiento.
      .tarjeta.p-3(x="66%" y="58%" numero="+" style="background-color: #DDD3FF; border-radius: 3px;")
        p.mb-0 Es aquella en la cual el cliente ingresa al establecimiento farmacéutico y no tiene a su alcance los productos, por lo cual los obtiene a través del vendedor.
      .tarjeta.p-3(x="66%" y="76%" numero="+" style="background-color: #DDD3FF; border-radius: 3px;")
        p.mb-0 Los productos están colocados en estanterías, vitrinas dentro del salón, colgadores, etc., con libre acceso para los clientes, quienes solicitan la atención del vendedor una vez que seleccionan los productos.
      .tarjeta.p-3(x="66%" y="95%" numero="+" style="background-color: #DDD3FF; border-radius: 3px;")
        p.mb-0 Es similar al anterior, pero en este caso el cliente tiene mayor libertad, pues personalmente lleva los productos a la caja para que se los cobren.

    .container-100.mb-5.py-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.svg')})`}"
      style="background-repeat: no-repeat; background-position: top;"
    )
      h3 Fases de la venta
      p.mb-5 Para la realización de una buena venta se requiere del siguiente orden secuencial:
      img.d-none.d-lg-flex(src="@/assets/curso/temas/tema3/img-8.svg")
      img.d-none.d-sm-flex.d-lg-none(src="@/assets/curso/temas/tema3/img-8-md.svg")
      img.mx-auto.d-flex.d-sm-none(src="@/assets/curso/temas/tema3/img-8-sm.svg" style="max-width: 255px")

    h3 Los vendedores
    p.mb-5 Un vendedor es quien tiene la experticia en la gestión comercial de la empresa para la que labora. Es quien se acerca al usuario y muy posiblemente lo convierte en cliente.

    .d-flex.flex-wrap.flex-md-nowrap.align-items-center.mb-5.p-4(style="background-color: #B6E5EB")
      .col-lg-8.mb-4.my-lg-auto
        img.m-auto(src="@/assets/curso/temas/tema3/img-9.jpg" style="max-width: 715px")
      .tarjeta.tarjeta-edit-5__1.p-4.col-lg-6
        p.mb-2 Algunas de las características que debe tener un buen vendedor son:
        ul.lista-ul--color.mb-2
          li.d-flex.align-items-start.mb-1
            img.pt-1(src="@/assets/curso/temas/tema3/img-10.svg" style="max-width: 15px")
            p.mb-0.ps-2 Capacidad para relacionarse.
          li.d-flex.align-items-start.mb-1
            img.pt-1(src="@/assets/curso/temas/tema3/img-10.svg" style="max-width: 15px")
            p.mb-0.ps-2 Perseverancia.
          li.d-flex.align-items-start.mb-1
            img.pt-1(src="@/assets/curso/temas/tema3/img-10.svg" style="max-width: 15px")
            p.mb-0.ps-2 Autoconfianza.
          li.d-flex.align-items-start.mb-1
            img.pt-1(src="@/assets/curso/temas/tema3/img-10.svg" style="max-width: 15px")
            p.mb-0.ps-2 Observación.
          li.d-flex.align-items-start.mb-1
            img.pt-1(src="@/assets/curso/temas/tema3/img-10.svg" style="max-width: 15px")
            p.mb-0.ps-2 Capacidad de negociar.
          li.d-flex.align-items-start.mb-1
            img.pt-1(src="@/assets/curso/temas/tema3/img-10.svg" style="max-width: 15px")
            p.mb-0.ps-2 Paciencia.
          li.d-flex.align-items-start.mb-1
            img.pt-1(src="@/assets/curso/temas/tema3/img-10.svg" style="max-width: 15px")
            p.mb-0.ps-2 Empatía.
          li.d-flex.align-items-start.mb-1
            img.pt-1(src="@/assets/curso/temas/tema3/img-10.svg" style="max-width: 15px")
            p.mb-0.ps-2 Excelente presentación personal.
          li.d-flex.align-items-start.mb-1
            img.pt-1(src="@/assets/curso/temas/tema3/img-10.svg" style="max-width: 15px")
            p.mb-0.ps-2 Tolerancia a la frustración.
          

</template>

<script>
export default {
  name: 'Tema3',
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
.slyder-a
  .slyder-a__tipo-b
    .slyder-a__bullets
      .slyder-a__bullets__item
        background-color: #F9D7A0
        border: none
      .slyder-a__bullets__item--active
        background-color: #FF9D00
.tarjeta-edit-5__1
  border-bottom-left-radius: 0
  background-color: #FFFFFF
  margin-left: -10.5rem
  margin-right: auto
  box-shadow: 2px 2px 3px 3px #00000020
  @media (max-width: 991px)
    margin-left: auto
    border-radius: 20px
</style>
