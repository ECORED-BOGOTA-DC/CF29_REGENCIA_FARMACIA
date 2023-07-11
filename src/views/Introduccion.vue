<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .d-flex.flex-wrap.align-items-end.mb-5
      .col-lg-6.pe-lg-4.order-2.order-lg-1
        p El desarrollo del mercado y todos los temas relacionados con la distribución de productos, provocan que las empresas se interesen por investigar los deseos y preferencias de los consumidores, con el objetivo de reducir los costos de comercialización, almacenamiento y distribución, asegurándose de obtener mayores ganancias.

        p En este componente formativo, se abordarán diferentes temas relacionados con el <em>merchandising</em> como: mercado, mercadeo, ventas, entre otros, que permitirán dar claridad a estos conceptos y así mismo cargar al aprendiz de herramientas y conocimientos para que tenga como enfrentar la demanda y exigencias de los consumidores. 

      .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-auto.mx-auto
        img(src="@/assets/curso/temas/img-1.svg" style="max-width: 610px;")
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
