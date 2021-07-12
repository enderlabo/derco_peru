<template>
  <div class="elevated">
    <b-container>
      <Title v-model="title" />
      <main id="main" class="clearfix pb-2">
        <div class="fusion-row" style="">
          <section id="content" style="width: 100%">
            <div
              id="post-72163"
              class="post-72163 page type-page status-publish hentry"
            >
              <div class="post-content">
                <p><em>&nbsp;</em></p>
                <p>
                  <em>DERCO PERÚ S.A. (en adelante, “DERCO”)</em
                  ><em
                    >, ubicada en avenida Manuel Holguín No. 325, Piso 11,
                    Santiago de Surco, Lima, informa al usuario que, de acuerdo
                    con la normativa vigente en materia de protección de datos
                    personales, usted otorga expresamente autorización a Derco
                    para tratar y hacer uso de los datos personales.</em
                  >
                </p>
                <p><em>&nbsp;</em></p>
                <p>
                  <strong
                    ><em
                      >Finalidad, datos personales obligatorios y consecuencias
                      de no proporcionar información</em
                    ></strong
                  >
                </p>
                <p>
                  <em
                    >Asimismo, DERCO pone a conocimiento del usuario que la
                    captación y tratamiento de los datos personales que brinde,
                    se da con la finalidad de tramitar cualquier reclamo
                    interpuesto por parte del USUARIO del algún producto o
                    servicio comercializado por DERCO.
                  </em>
                </p>
                <p>
                  <em
                    >Los datos necesarios para poder cumplir con la anterior
                    finalidad son los siguientes: nombres y apellidos, DNI,
                    correo electrónico, teléfono y la dirección. De no
                    proporcionar dicha información, Derco no podrá brindar la
                    anterior finalidad.</em
                  >
                </p>
                <p><em>&nbsp;</em></p>
                <p>
                  <strong
                    ><em
                      >Transferencias a Terceros y Encargados del
                      tratamiento</em
                    ></strong
                  >
                </p>
                <p>
                  <em
                    >DERCO le informa al usuario que los datos personales que
                    brinde serán transferidos a terceras empresas y a diversos
                    encargados, a nivel nacional e internacional, cuya
                    identidad, ubicación y finalidad se encuentran en la página
                    web de DERCO </em
                  ><a href="https://derco.com.pe/terceros-y-encargados/"
                    ><em>https://derco.com.pe/terceros-y-encargados/</em></a
                  ><em>.</em>
                </p>
                <p>
                  <em
                    >Para estos efectos, el usuario acepta haber tenido a su
                    disposición y revisado la lista de Terceros y Encargados de
                    DERCO.</em
                  >
                </p>
                <p>
                  <em
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </em>
                </p>
                <p>
                  <strong><em>Banco de Datos</em></strong>
                </p>
                <p>
                  <em
                    >Los datos personales que el usuario brinde serán
                    almacenados en el banco de datos de </em
                  ><em>“Clientes de la empresa y reclamantes”</em
                  ><em
                    >, que se encuentra registrado ante el Registro Nacional de
                    Protección de Datos Personales con el código RNPDP-PJP No. </em
                  ><em>6898</em><em>.</em>
                </p>
                <p><em>&nbsp;</em></p>
                <p>
                  <strong><em>Plazo de conservación</em></strong>
                </p>
                <p>
                  <em>DERCO podrá utilizar la Información de EL USUARIO </em
                  ><em
                    >hasta diez (10) años después de que finalice el
                    procedimiento de reclamo ante DERCO.</em
                  >
                </p>
                <p><em>&nbsp;</em></p>
                <p>
                  <strong><em>Derechos ARCO</em></strong>
                </p>
                <p>
                  <em>EL USUARIO puede ejercer los derechos de </em
                  ><em>acceso, rectificación, cancelación y oposición</em
                  ><em>, deberá </em
                  ><em
                    >remitir una comunicación a la siguiente dirección
                    electrónica: </em
                  ><a href="mailto:derechosarco@derco.pe"
                    ><em>derechosarco@derco.pe</em></a
                  ><em>
                    o ingresar a la sección denominada derechos ARCO en nuestra
                    página web </em
                  ><a href="https://www.derco.com.pe"
                    ><em>https://www.derco.com.pe</em></a
                  ><em>.</em>
                </p>
                <p>
                  <em
                    >De considerar que no ha sido atendido en el ejercicio de
                    sus derechos puede presentar un reclamo ante la Autoridad
                    Nacional de Protección de Datos Personales, dirigiéndose a
                    la Mesa de Partes del Ministerio de Justicia y Derechos
                    Humanos: Calle Scipion Llona 350, Miraflores, Lima, Perú
                    llenando el formulario publicado en el siguiente enlace </em
                  ><a
                    href="https://www.minjus.gob.pe/wp-content/uploads/2018/12/FORMULARIO-DEPROCEDIMIENTO-TRILATERAL-DE-TUTELA.pdf"
                    ><em
                      >https://www.minjus.gob.pe/wp-content/uploads/2018/12/FORMULARIO-DEPROCEDIMIENTO-TRILATERAL-DE-TUTELA.pdf</em
                    ></a
                  >
                </p>
                <p><strong>&nbsp;</strong></p>
              </div>
            </div>
          </section>
        </div>
        <!-- fusion-row -->
      </main>
    </b-container>
  </div>
</template>

<script>
import SeoData from '@/mixins/SeoData'
import Title from '@/components/common/Title'

export default {
  name: 'Index',
  components: { Title },
  mixins: [SeoData],
  data() {
    return {
      title: 'Cláusula Informativa'
    }
  }
}
</script>

<style scoped>
p,
a,
li {
  font-weight: normal !important;
  font-size: 16px !important;
  color: #4d4d4d !important;
}
h5 {
  color: #4d4d4d !important;
  font-weight: bold;
  font-size: 18px;
}
</style>
