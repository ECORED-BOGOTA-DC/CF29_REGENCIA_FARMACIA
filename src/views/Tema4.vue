<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Manual de identidad corporativa
    p.mb-5 Es un documento que recopila los elementos más importantes de una marca en particular y explica cómo se deben aplicar a nivel visual ya sea en línea (online) o fuera de línea (offline).

    .mb-5.p-4.py-lg-5(style="background-color: #E4F2F8")
      .col-xl-11.d-flex.flex-wrap.mx-auto
        img.col-lg-5.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema4/img-1.svg" style="max-width: 472px;")
        .col-lg-6.mx-auto
          p En tal sentido, los elementos mínimos que debe llevar el manual de identidad corporativa son:
          ul.lista-ul--color.mb-2
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 15px")
              p.mb-0.ps-2 El logotipo.
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 15px")
              p.mb-0.ps-2 Los colores corporativos.
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 15px")
              p.mb-0.ps-2 Las tipografías.
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 15px")
              p.mb-0.ps-2 Los patrones, iconos y otros elementos gráficos.
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 15px")
              p.mb-0.ps-2 Los extras opcionales.
    
    .tarjeta.color-secundario.p-3.mb-5.col-xl-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema4/img-2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.texto-blanco.mb-1 Manual de identidad de la red RENATA
              p.texto-blanco.text-small Como ejemplo de un manual de identidad corporativa se invita al aprendiz a revisar el siguiente documento que enseñará el manual de identidad de la red RENATA.
            .col-sm-auto
              a.boton.color-acento-bottones(:href="obtenerLink('downloads/Anexo1_CF029_Manual_Identidad_Corporativa_RENATA.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
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

<style lang="sass"></style>
