<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5(data-aos="flip-up")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Mercadeo o <em>marketing</em>
    
    .container-100.d-flex.flex-wrap.mb-5.justify-content-center.align-items-end
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        .bloque-texto-d.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3 El mercadeo estudia la forma en que las relaciones de intercambio son creadas, estimuladas, facilitadas, valoradas y gobernadas. La esencia del mercadeo está en la relación de intercambio, definida como conexión de recursos, personas, actividades orientadas hacia la creación e intercambio de valor para el mercado
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h6.mb-0 Miguel Hernández Espallardo (2001).
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img.mb-4.mb-md-auto.mx-auto.me-lg-0(src="@/assets/curso/temas/tema2/img-1.png" style="max-width: 400px" alt="Imagen decorativa")
    
    p.mb-5(data-aos="fade-right") El núcleo del <em>marketing</em> es el consumidor, por ende, todo el empeño debe estar enfocado en este con:

    .d-flex.flex-wrap.mb-5
      .col-lg-4.mx-auto.mb-5.mb-lg-auto(data-aos="fade-right")
        img.mb-4.mb-md-auto.mx-auto.me-lg-0(src="@/assets/curso/temas/tema2/img-2.svg" style="max-width: 389px" alt="Imagen decorativa")
      .col-12.col-lg-8.ps-lg-4.d-flex.flex-wrap.align-content-center(data-aos="fade-left")
        .col-12.col-md-6
          .tarjeta-edit-5_1
            span 1
            p.mb-0.text-center La marca
        .col-12.col-md-6
          .tarjeta-edit-5_1
            span 2
            p.mb-0.text-center El <em>merchandising</em>
        .col-12.col-md-6
          .tarjeta-edit-5_1
            span 3
            p.mb-0.text-center El producto
        .col-12.col-md-6
          .tarjeta-edit-5_1
            span 4
            p.mb-0.text-center El servicio
    
    p.mb-5(data-aos="fade-right") La siguiente imagen nos muestra el concepto de mercadeo.

    .col-lg-10.col-xl-6.mx-auto.mb-5
      .titulo-sexto.color-acento-botones.mb-4(data-aos="fade-right")
        h5 Figura 2.
        span Mercadeo
      figure(data-aos="zoom-in")
        img(src="@/assets/curso/temas/tema2/img-3.svg" alt="Imagen que muestra en 2 columnas los componentes del mercadeo que son: producto y/o servicio y cliente y/o consumidor con sus acciones como son medio, relato, servicio y objetivo para producto y planeación, información, comunicación y producto para cliente.")
    
    p(data-aos="fade-right") Dentro del mercadeo encontramos lo que se llama ambientes del mercadeo, que son el conjunto de fortalezas macro y micro que se localizan en el exterior de la empresa y que intervienen en la gestión gerencial al momento de fidelizar los clientes.
    p.mb-5(data-aos="fade-right") La siguiente tabla presenta cuáles son esas fortalezas.

    .col-lg-10.col-xl-8.mx-auto.mb-5
      .titulo-sexto.color-acento-botones.mb-4(data-aos="fade-right")
        h5 Tabla 1.
        span Fortalezas para fidelizar los clientes
      
      .tabla-b.color-acento-contenido.mb-5
        .tabla-b__header.d-flex
          h4.col-6.mb-0 Macroambiente
          h4.col-6.mb-0 Microambiente
        table
          tr
          tr(data-aos="fade-right")
            td(style="border-right: 1px solid #AFAFAF") Demográficas: sexo, edad, etc.
            td(rowspan="2" style="background-color: white;") Proveedores: empresas que surten a las otras empresas de bienes y servicios. Para que puedan ofrecer sus productos al mercado.
          tr(data-aos="fade-right")
            td(style="border-right: 1px solid #AFAFAF") Económicas: situación económica del mercado.
          tr(data-aos="fade-right")
            td(style="border-right: 1px solid #AFAFAF") Tecnológicas: avances científicos.
            td(rowspan="2") Competidores: Organizaciones que ofrecen lo mismo.
          tr(data-aos="fade-right")
            td(style="border-right: 1px solid #AFAFAF") Naturales: clima, desastres, etc.
          tr(data-aos="fade-right")
            td(style="border-right: 1px solid #AFAFAF") Políticas gubernamentales.
            td(rowspan="2" style="background-color: white;") Intermediarios: facilitadores del conocimiento con los consumidores y que estos puedan adquirir sus productos en los diferentes canales de distribución.
          tr(data-aos="fade-right")
            td(style="border-right: 1px solid #AFAFAF") Culturales: conducta de la población.
    
    h3.mb-5(data-aos="fade-left") <em>Merchadising</em>
    p.mb-5(data-aos="fade-right") El <em>merchandising</em> hace parte del mercadeo o <em>marketing</em> y engloba las técnicas comerciales por medio de las cuales se hace posible presentar al comprador el bien o el servicio en las condiciones materiales y psicológicas apropiadas.

    .d-flex.flex-wrap.align-items-center.mb-5
      .col-lg-7.mb-4.my-lg-auto(data-aos="fade-right")
        img.m-auto(src="@/assets/curso/temas/tema2/img-4.jpg" style="max-width: 715px" alt="Imagen decorativa")
      .tarjeta.tarjeta-edit-5.p-4.col-lg-5(data-aos="fade-left")
        p.mb-2 Esta técnica busca:
        ul.lista-ul--color.mb-2
          li.d-flex.align-items-start
            img.pt-1(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 15px")
            p.mb-0.ps-2 Mejorar la exhibición de los productos y la identificación apropiada de la marca.
          li.d-flex.align-items-start
            img.pt-1(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 15px")
            p.mb-0.ps-2 Intensificar el prestigio de la marca y la colaboración del detallista.
          li.d-flex.align-items-start
            img.pt-1(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 15px")
            p.mb-0.ps-2 Destacar las ventajas del producto.
          li.d-flex.align-items-start
            img.pt-1(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 15px")
            p.mb-0.ps-2 Favorecer las intervenciones de los representantes como vendedores, mercaderistas o impulsadoras.
    
    .col-lg-10.mx-auto(data-aos="flip-up")
      .cajon.color-secundario.p-4.mb-4(style="background-color: #E4DDFA")
        p.mb-0 A nivel farmacéutico, el <em>merchandising</em> no solo es contar con productos de buena calidad, también se trata de ofrecer al cliente/usuario buena presentación personal, un lugar aseado y organizado y con avisos atractivos visualmente y que hablen bien del establecimiento.
    
    p.mb-5(data-aos="fade-right") A continuación, se presentan unos ejemplos, por medio de imágenes, con el fin de que se reflexione ante lo mencionado:
    
    .mb-5.py-4(style="background-color: #D5F1FE" data-aos="zoom-in")
      SlyderF(columnas="col-12")
        .tarjeta.p-4
          img.mb-3(src="@/assets/curso/temas/tema2/img-6.jpg" alt="Imagen que muestra aviso de ingreso a una farmacia de un hospital.")
          h3.fw-bold Avisos
        .tarjeta.p-4
          img.mb-3(src="@/assets/curso/temas/tema2/img-7.jpg" alt="Imagen que muestra una mujer con dotación adecuada para atención en una farmacia como lo es tapabocas, bata blanca, entre otros aspectos.")
          h3.fw-bold Presentación personal
        .tarjeta.p-4
          img.mb-3(src="@/assets/curso/temas/tema2/img-8.jpg" alt="Imagen que muestra un estante organizado con una persona identificando productos de farmacia en una tablet.")
          h3.fw-bold Organización y limpieza

    p(data-aos="fade-right") La frase de Philip Kotler: <b>“la mejor publicidad es la que hacen los clientes satisfechos”</b> es más que cierta, porque una manera exitosa de vender productos y servicios es por el voz a voz de los clientes satisfechos.
    p(data-aos="fade-right") Es así como el propósito final de las técnicas de <em>merchandising</em> es argumentar e influenciar al público en todo momento, sin necesidad que esté presente el vendedor u otra persona llamando la atención de los consumidores.
    p.mb-5(data-aos="fade-right") Conozcamos cuáles son los principios del <em>merchandising</em>:

    PasosA.color-secundario.col-lg-10.col-xl-8.mx-auto.mb-5(tipo="n")
      .row(data-aos="fade-left")
        .col-12.col-md.order-2.order-md-1
          h4 Rentabilidad
          p En este principio no solo se mide la ganancia en dinero, sino también aspectos como cantidad de clientes nuevos, impacto en la comunidad, entre otros.
        img.mb-4.mb-md-auto.order-1.order-md-2.mx-auto(src="@/assets/curso/temas/tema2/p-1.svg" style="max-width: 131px" alt="Imagen decorativa")

      .row(data-aos="fade-right")
        img.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema2/p-2.svg" style="max-width: 131px" alt="Imagen decorativa")
        .col-12.col-md
          h4 Ubicación
          p.text-md-right Este principio consiste en buscar la mejor ubicación del local de manera que se logre un gran número de ventas.
      
      .row(data-aos="fade-left")
        .col-12.col-md.order-2.order-md-1
          h4 Impacto
          p Se trata de impactar la mente del cliente con productos atractivos y de excelente calidad.
        img.mb-4.mb-md-auto.order-1.order-md-2.mx-auto(src="@/assets/curso/temas/tema2/p-3.svg" style="max-width: 131px" alt="Imagen decorativa")

      .row(data-aos="fade-right")
        img.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema2/p-4.svg" style="max-width: 131px" alt="Imagen decorativa")
        .col-12.col-md
          h4 Disponibilidad
          p.text-md-right Se trata de tener en todo momento disponibilidad de los productos.
      
      .row(data-aos="fade-left")
        .col-12.col-md.order-2.order-md-1
          h4 Precio
          p Los precios de los productos son fundamentales para inducir a la decisión de la compra.
        img.mb-4.mb-md-auto.order-1.order-md-2.mx-auto(src="@/assets/curso/temas/tema2/p-5.svg" style="max-width: 131px" alt="Imagen decorativa")

      .row(data-aos="fade-right")
        img.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema2/p-6.svg" style="max-width: 131px" alt="Imagen decorativa")
        .col-12.col-md
          h4 Exhibición
          p.text-md-right Los productos deben exhibirse de manera que llamen la atención pero que en ningún momento represente un peligro para el cliente.

    p.mb-5(data-aos="fade-right") Ahora, un buen plan estratégico de <em>merchandising</em> permite el crecimiento comercial del establecimiento, debido a que permite la presentación propia del producto ante el cliente. El <em>merchandising</em> se sustenta en varias teorías, a continuación, se mencionan algunas de ellas:

    .mb-5.p-4(style="background-color: #D5F1FE")
      .col-lg-10.mx-auto.d-flex.flex-wrap
        .col-lg-7.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
          h4 Psicología del color
          p Los colores tienen la propiedad de afectar psicológicamente y generar diferentes sensaciones. Cada color tiene un significado propio y además tiene la capacidad de comunicar ideas, llamar la atención, provocar emociones y reacciones, entre otras características.
        .col-lg-5.mx-auto.order-1.order-lg-2.mb-4.mb-lg-auto(data-aos="fade-left")
          ImagenInfografica.color-primario.mx-auto
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/img-9.svg' alt="Imagen decorativa psicología  del color")

            .tarjeta.p-3(x="9.5%" y="12%" numero="" style="background-color: #DDD3FF; border-radius: 3px;")
              h4 Azul
              p Confianza, seguridad, serenidad.
            .tarjeta.p-3(x="36.5%" y="12%" numero="" style="background-color: #DDD3FF; border-radius: 3px;")
              h4 Rojo
              p Agresivo, provocativo, captador de atención.
            .tarjeta.p-3(x="63.5%" y="12%" numero="" style="background-color: #DDD3FF; border-radius: 3px;")
              h4 Verde
              p Frescura, salud, serenidad.
            .tarjeta.p-3(x="90.5%" y="12%" numero="" style="background-color: #DDD3FF; border-radius: 3px;")
              h4 Amarillo
              p Optimismo, positivismo, calidez, luz.
            .tarjeta.p-3(x="9.5%" y="48.5%" numero="" style="background-color: #DDD3FF; border-radius: 3px;")
              h4 Púrpura
              p Misterio, sofisticación, espiritualidad.
            .tarjeta.p-3(x="36.5%" y="48.5%" numero="" style="background-color: #DDD3FF; border-radius: 3px;")
              h4 Rosa
              p Energía, juventud, diversión.
            .tarjeta.p-3(x="63.5%" y="48.5%" numero="" style="background-color: #DDD3FF; border-radius: 3px;")
              h4 Naranja
              p Diversión, vitalidad, exuberancia.
            .tarjeta.p-3(x="90.5%" y="48.5%" numero="" style="background-color: #DDD3FF; border-radius: 3px;")
              h4 Marrón
              p Simplicidad, durabilidad, estabilidad.
            .tarjeta.p-3(x="36.5%" y="85%" numero="" style="background-color: #DDD3FF; border-radius: 3px;")
              h4 Negro
              p Serio, valiente, poderoso.
            .tarjeta.p-3(x="63.5%" y="85%" numero="" style="background-color: #DDD3FF; border-radius: 3px;")
              h4 Blanco
              p Simplicidad, limpieza, pureza.

    h3(data-aos="fade-left") Los sentidos

    p(data-aos="fade-right") La aplicación de los cinco sentidos en el <em>merchandising</em> se denomina <em>neuromarketing</em>, concepto nuevo en el mercado que ofrece nuevas maneras de comunicación entre en comprador y el vendedor. 
    p(data-aos="fade-right") El <em>neuromarketing</em> se puede definir como un área de estudio interdisciplinaria en la que se aplican metodologías propiamente dichas de la neurociencia con el fin de identificar ante diferentes estímulos del <em>marketing</em> cual es la reacción del ser humano, permitiendo así mejorar las técnicas publicitarias y ayudando a entender la relación que existe entre la mente y la conducta del comprador.
    p(data-aos="fade-right") Por medio de los cinco sentidos las personas pueden percibir los beneficios del producto trasladándolo a su subconsciente. 
    p.mb-5(data-aos="fade-right") Esto se da de la siguiente forma:

    .container-100.mb-5.py-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.svg')})`}"
      style="background-repeat: no-repeat; background-position: center;"
    )
      figure(data-aos="zoom-in")
        img.col-lg-10.col-xl-6.mx-auto(src="@/assets/curso/temas/tema2/img-10.svg" style="max-width: 627px; filter: drop-shadow(rgba(0, 0, 0, 0.063) 2px 8px 6px);" alt="Imagen que muestra una infografía de los sentidos  con los siguientes textos: Vista. Se recibe el 55 % del 100 % de lo que llega al cerebro. Gusto. Se recibe el 5 % del 100 % que llega al cerebro. Olfato. Se recibe el 12 % del 100 % que llega al cerebro. Tacto. Se recibe el 10 % del 100 % que llega al cerebro. Oído. Se recibe el 18 % del 100 % de lo que llega al cerebro")

    h3(data-aos="fade-left") Los elementos

    .mb-5.p-4.py-lg-5(style="background-color: #F4F1FF")
      .col-xl-11.d-flex.flex-wrap.mx-auto
        img.col-lg-5.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema2/img-11.svg" style="max-width: 472px;" alt="Imagen decorativa" data-aos="fade-right") 
        .col-lg-6.mx-auto(data-aos="fade-left")
          p También es importante tener presente que todos los elementos de un comercio tienen su propio mensaje individual; por ejemplo:
          ul.lista-ul--color.mb-2
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 15px")
              p.mb-0.ps-2 <b>Rojo:</b> fuerza, pasión, calor, etc.
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 15px")
              p.mb-0.ps-2 <b>Líneas horizontales:</b> paz, relajamiento, suavidad, etc.
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 15px")
              p.mb-0.ps-2 <b>Mármoles:</b> dureza, frialdad, etc.
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 15px")
              p.mb-0.ps-2 <b>Madera:</b> hogar, calor, etc.
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 15px")
              p.mb-0.ps-2 <b>Intensidad de luz:</b> confianza, libertad, etc.
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 15px")
              p.mb-0.ps-2 <b>Vocabulario correcto:</b> atención, educación, halago, cortesía, etc.

    p.mb-5(data-aos="fade-right") A continuación se presentan los diferentes tipos de <em>merchandising</em>, los cuales son:

    TabsA.color-acento-contenido.mb-5(data-aos="zoom-in")
      .tarjeta.d-flex.flex-wrap.color-secundario--borde(titulo="Visual" style="")
        .col-lg-8.p-4
          p.fw-bold <em>Merchandising</em> visual
          p Es un conjunto de estrategias que se basa en llamar la atención de los clientes por medio de la vista. Esto se logra por medio de las estanterías, el orden, aseo, iluminación y avisos del establecimiento. Aquí es importante destacar el o los productos que se desean vender. Esta clase de <em>merchandising</em> contribuye al incremento de las ventas y a que la marca cada vez se note más, además a que las personas se motiven a ingresar al establecimiento y de seguro compren.
        img.mx-auto.pe-lg-4.col-lg-4.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema2/img-12.jpg" style="max-width: 288px" alt="Imagen decorativa Merchandising visual")
      
      .tarjeta.d-flex.flex-wrap.color-secundario--borde(titulo="Seducción" style="")
        .col-lg-8.p-4
          p.fw-bold <em>Merchandising</em> de seducción
          p Se trata de llamar la atención del cliente por medio de los impulsos sensoriales, ya sea por tener vitrinas bonitas y llamativas, que el establecimiento tenga un buen olor característico, un personaje famoso, música, muy buena iluminación (las personas suelen ingresar a las zonas con mucha iluminación), entre otras. Cabe aclarar que esta técnica es mas utilizada en centros comerciales o en tiendas grandes.
        img.mx-auto.pe-lg-4.col-lg-4.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema2/img-13.jpg" style="max-width: 288px" alt="Imagen decorativa Merchandising de seducción")
      
      .tarjeta.d-flex.flex-wrap.color-secundario--borde(titulo="Gestión" style="")
        .col-lg-8.p-4
          p.fw-bold <em>Merchandising</em> de gestión
          p Consiste en gestionar de forma correcta el espacio para la exposición y venta de los productos, de manera que se logre mayor rentabilidad y ahorro de espacios. El <em>merchandising</em> de gestión comprende estudiar el mercado, gestionar los espacios, gestionar el surtido, comunicación y la determinación del tamaño lineal de cada sección.
        img.mx-auto.pe-lg-4.col-lg-4.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema2/img-12.jpg" style="max-width: 288px" alt="Imagen decorativa Merchandising de gestión")

    p.mb-5(data-aos="fade-right") También es importante reconocer y tener presente la importancia del empaque:

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.col-xl-10.mx-auto(style="background-color: #9FCAF2")
      .bloque-texto-g__img(style="background-color: #E8E8E8")
      img.position-relative.mx-auto.ms-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema2/img-15.svg" style="max-width: 156px;" alt="Imagen decorativa")
      .bloque-texto-g__texto.p-4.ms-lg-4
        p.mb-0 <b>Relación empaque - <em>merchandising</em></b>
          br
          |El empaque juega un papel muy importante como herramienta del <em>merchandising</em> cuando se quiere llamar la atención del consumidor hacia el producto que se está vendiendo. Ese es uno de sus objetivos, además comprende todas las actividades publicitarias y promocionales realizadas a nivel detallista.

</template>

<script>
export default {
  name: 'Tema2',
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
.tarjeta-edit-5_1
  position: relative
  width: 80%
  display: flex
  justify-content: center
  align-items: center
  min-height: 73px
  background-color: #E6F4FF
  margin: auto
  margin-bottom: 3rem
  &::after
    content: ''
    position: absolute
    border-left: 20px solid #E6F4FF
    border-right: 20px solid transparent
    border-top: 36px solid transparent
    border-bottom: 36px solid transparent
    right: -40px
  &::before
    content: ''
    position: absolute
    border-left: 20px solid transparent
    border-right: 20px solid #90C9F8
    border-top: 36px solid transparent
    border-bottom: 36px solid transparent
    left: -40px
  p
    font-size: 18px
    font-weight: bold
    padding-left: 2rem
    position: relative
    z-index: 1
  span
    position: absolute
    top: -21px
    left: -20px
    width: 57px
    height: 57px
    display: flex
    font-size: 24px
    font-weight: bold
    align-items: center
    justify-content: center
    background-color: #00BCD4
    color: white
.pasos-a
  .pasos-a__item
    .pasos-a__numero
      .pasos-a__circle
        .h2
          color: white
</style>
