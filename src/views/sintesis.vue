<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 <em>Merchandising</em> en los servicios farmacéuticos implica el uso de estrategias comerciales para promover y comercializar los productos y servicios. El <em>merchandising</em> busca atraer y retener clientes, mejorar su experiencia y aumentar las ventas, ubicando los productos de manera atractiva en la tienda, generando interés, emociones y motivando a los clientes a realizar compras.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Imagen que muestra la síntesis del merchandising en los servicios farmacéutico donde define: mercado, mercadeo, ventas, manual de identidad y publicidad; con el objetivo de reducir los costos de comercialización, almacenamiento y distribución, permitiendo a las empresas investigar sobre preferencias de los consumidores.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
