<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Publicidad

    .container-100.d-flex.flex-wrap.align-items-center.mb-5.py-4(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: top;"
    )
      .col-lg-7.mb-lg-5.ms-auto
        p La publicidad de productos farmacéuticos está reglamentada normativamente, y en Colombia solo está autorizada para los medicamentos de venta libre (OTC), es decir los que no requieren prescripción médica y para los suplementos dietarios.

        p El ente encargado de la vigilancia y control de la publicidad de los medicamentos es el INVIMA (Instituto Nacional de Vigilancia de Medicamentos y Alimentos) en compañía de la superintendencia de salud y la OMS. Todos velan por el mismo fin, el cual es, el uso racional de los medicamentos, por lo cual sancionan la publicidad engañosa y que induzca de manera irracional al uso de estos.

        p En relación al marco normativo de la publicidad de medicamentos, en Colombia se rige por:
      .col-lg-4.mx-auto.mx-lg-0
        img.mb-4.mb-md-auto.mx-auto.me-lg-0(src="@/assets/curso/temas/tema5/img-1.png" style="max-width: 284px")

    LineaTiempoA.color-acento-contenido.mb-5(:datos="datosLineaTiempoA")

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.col-xl-10.mx-auto.mb-5(style="background-color: #9FCAF2")
      .bloque-texto-g__img(style="background-color: #E8E8E8")
      img.position-relative.mx-auto.ms-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 156px;")
      .bloque-texto-g__texto.p-4.ms-lg-4
        p.mb-0 Los titulares del registro serán responsables de cualquier transgresión en el contenido de los materiales de promoción y publicidad, y de las consecuencias que lo pueda generar en la salud individual o colectiva.  Será función del Invima velar por el cumplimiento de lo aquí previsto, teniendo en cuenta la reglamentación que para el efecto expida el Ministerio de Salud.
    p.mb-5 Precisando en los siguientes parágrafos:

    .d-flex.flex-wrap
      img.mx-auto.col-lg-4.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema5/img-6.svg" style="max-width: 392px")
      .col-lg-8.ps-lg-4
        TabsA.color-acento-contenido.mb-5
          .tarjeta.d-flex.flex-wrap.color-secundario--borde.p-4(titulo="Parágrafo 1°" style="")
            p Los medicamentos sólo podrán anunciarse o promocionarse en publicaciones de carácter científico o técnico, dirigidos al cuerpo médico y odontológico.  Prohíbase la propaganda de medicamentos en la prensa, la radiodifusión, la televisión, y en general, en cualquier otro medio de comunicación y promoción masiva. Esta prohibición no cobijará los medicamentos de venta libre.
          .tarjeta.d-flex.flex-wrap.color-secundario--borde.p-4(titulo="Parágrafo 2°" style="")
            p En la información o propaganda dirigida al cuerpo médico u odontológico, deberán especificarse las acciones, indicaciones, usos terapéuticos, contraindicaciones, efectos colaterales, riesgos de administración, los riesgos de farmacodependencia y las otras precauciones y advertencias, sin omitir ninguna de las que figuren en la literatura científica o fueren conocidas por los fabricantes. Igualmente, deberá siempre citarse la bibliografía sobre la cual se basa la información, e identificarse el principio activo con su nombre genérico, el cual, en el caso de medicamentos esenciales, irá en igualdad de caracteres a los del nombre o marca del medicamento.
          .tarjeta.d-flex.flex-wrap.color-secundario--borde.p-4(titulo="Parágrafo 3°" style="")
            p La publicidad e información sobre medicamentos deberá ceñirse a la verdad y, por consiguiente, no podrán exagerarse las bondades que pueda ofrecer su uso.
          .tarjeta.d-flex.flex-wrap.color-secundario--borde.p-4(titulo="Parágrafo 4°" style="")
            p Prohíbase la publicidad de medicamentos cuando:
            p a) Contraríe las normas generales aplicables en materia de educación sanitaria, nutrición o terapéutica; 
            p b) Exprese verdades parciales que induzcan a engaño o error; 
            p c) Impute, difame, cause perjuicios o comparación peyorativa para otras marcas, productos, servicios, empresas u organismos.
          .tarjeta.d-flex.flex-wrap.color-secundario--borde.p-4(titulo="Parágrafo 5°" style="")
            p Las listas de precios y los almanaques no podrán llevar las indicaciones y los usos de los productos, cuando éstos sean de venta bajo fórmula médica.
          .tarjeta.d-flex.flex-wrap.color-secundario--borde.p-4(titulo="Parágrafo 6°" style="")
            p Los titulares de registros sanitarios que incurran en alguna de las conductas aquí descritas estarán sujetos a las medidas y sanciones previstas en el presente Decreto.

</template>

<script>
import LineaTiempoA from '@/components/LineaTiempoA.vue'
export default {
  name: 'Tema3',
  components: { LineaTiempoA },
  data: () => ({
    datosLineaTiempoA: [
      {
        ano: require('@/assets/curso/temas/tema5/img-3.svg'),
        titulo: 'Resolución 4320 de 2004',
        texto:
          'Se aplica para la publicidad de medicamentos de venta libre y productos fitoterapéuticos (productos elaborados a base de plantas medicinales).',
      },
      {
        ano: require('@/assets/curso/temas/tema5/img-4.svg'),
        titulo: 'Decretos 3554 de 2004 y 1861 de 2006',
        texto:
          'Por el cual se regula el régimen de registro sanitario, vigilancia y control sanitario de los medicamentos homeopáticos para uso humano y se dictan otras disposiciones. En el capítulo XI del presente decreto se encuentra la reglamentación de la publicidad de los medicamentos homeopáticos.',
      },
      {
        ano: require('@/assets/curso/temas/tema5/img-5.svg'),
        titulo: 'Decreto 677 de 1995',
        texto:
          'En el titulo IV, denominado de los envases, etiquetas, rótulos, empaques, nombres y publicidad y puntualmente en el <b>artículo 79</b>, habla de la información y publicidad de los medicamentos. Artículo 79. De la información y publicidad de los medicamentos. Toda información científica, promocional o publicitaria sobre los medicamentos deberá ser realizada con arreglo a las condiciones del registro sanitario y a las normas técnicas y legales previstas en el presente Decreto.',
      },
    ],
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
