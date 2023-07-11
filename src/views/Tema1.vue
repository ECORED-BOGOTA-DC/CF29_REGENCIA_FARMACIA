<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Mercado
    
    .conatiner-100.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: center;"
    )
      .d-flex.flex-wrap.align-items-center.col-lg-10.mx-auto
        .tarjeta.tarjeta-edit-1.p-4.col-lg-5
          p.mb-2.py-lg-5 Es un proceso que se da cuando hay dos partes en la que una opera como comprador y la otra como vendedor ya sea de bienes o de servicios, originando el intercambio. Ante esto se podría decir que hay mercado cuando:
        .col-lg-7.mb-4.my-lg-auto
          img.m-auto(src="@/assets/curso/temas/tema1/img-1.jpg" style="max-width: 820px")
    
    .col-lg-6.mx-auto.mb-5
      .titulo-sexto.color-acento-botones.mb-4
        h5 Figura 1
        span.d-block Mercado
      
      img(src="@/assets/curso/temas/tema1/img-2.svg")

    p.mb-5 El fundamento del mercado es el intercambio, porque sin lugar a duda es una acción que vienen haciendo los seres humanos desde la antigüedad por necesidad.
      br
      br
      |Existen 2 clases de intercambio:
    
    TabsC.color-secundario.mb-5
      .py-3.py-md-4(titulo="Intercambio sin dinero. Trueque")
        .container-tabsc-1.col-xl-10.mx-auto
          p.order-2.order-lg-1.col-12.col-xl-10 Consiste en cambiar un bien por otro.
          img.order-1.order-lg-2(src='@/assets/curso/temas/tema1/img-3.svg' style="max-width: 267px; margin-left: -14rem")
      .py-3.py-md-4(titulo="Intercambio con dinero")
        .container-tabsc-1.col-lg-10.mx-auto
          p.order-2.order-lg-1.col-12.col-xl-10 Consiste en cambiar un bien por dinero.
          img.order-1.order-lg-2(src='@/assets/curso/temas/tema1/img-4.svg' style="max-width: 415px; margin-left: -20rem")

    h3.mb-4 Integrantes del mercado
    p.mb-5 Para que el mercado se pueda dar, requiere dos clases de participantes, los cuales son:

    ///////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Falta Componente!!!! /////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////

    h3.mb-4 Principales mercados
    p.mb-5 Y dentro de los principales mercados se encuentran:

    ///////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Falta Componente!!!! /////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////

    h3.mb-4 Investigación de mercados (IM)
    p La investigación de mercados ha sido definida por varios exponentes, coincidiendo todos en un mismo objetivo: <span style="text-decoration: underline">la IM es el apoyo contundente de los directivos para la toma de decisiones.</span>
    p <b><em>American Marketing Association</em></b> define la investigación de mercados como:


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
    margin-left: auto
    border-radius: 20px
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
</style>
