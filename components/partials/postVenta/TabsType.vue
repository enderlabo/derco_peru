<template>
  <div>
    <b-container>
      <Title v-model="title" :description="description" />
      <b-tabs content-class="mt-3" class="tabsPostventa" fill>
        <b-tab title="Express" active>
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  src="https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-03-26-mantenimiento-express.png"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Express">
                  <b-card-text>
                    Este servicio está diseñado para aquellos clientes que no
                    cuentan con mucho tiempo de espera, ya que solo se realiza
                    en 1 hora y media. Para este servicio solo realizamos
                    mantenimiento periódico/preventivo cada 5000Km. Se
                    recepcionan los vehículos de lunes a viernes de 8:00am a
                    4:00pm y los sábados de 8:00am a 11:00am
                    <p class="legalesSection">Términos legales</p>
                    <li>
                      El servicio aplica para los siguientes kilometrajes
                      expresados en miles: 5, 15, 25, 35, 45, 55, 65, 75, 85,95.
                    </li>
                    <li>Es válido para todas nuestras marcas.</li>
                    <li>
                      Solo aplica para los talleres de Ate, Intisuyo, Surco,
                      Surquillo, Camacho y Javier Prado.
                    </li>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-tab>
        <b-tab title="Diurno">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  src="https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-03-26-mantenimiento-diurno.png"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Diurno">
                  <b-card-text>
                    Te ofrecemos un servicio en horario de oficina donde
                    realizamos mantenimientos periódicos / preventivos y
                    correctivos / reparaciones, de acuerdo a lo que necesite su
                    vehículo. Se evalúa de forma completa la unidad para brindar
                    un diagnóstico del estado en que se encuentra y lo que
                    requiere.
                    <p class="legalesSection">Términos legales</p>
                    <li>Es válido para todas nuestras marcas</li>
                    <li>Se realiza en todos los talleres</li>
                    <li>
                      Los tiempos de diagnóstico y reparación los dará el
                      personal encargado del taller
                    </li>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-tab>
        <b-tab title="Nocturno">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  src="https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-03-26-mantenimiento-nocturno.png"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Nocturno">
                  <b-card-text>
                    Trabajamos tu vehículo mientras descansas. Este servicio es
                    para aquellos que no tienen tiempo en horario de oficina
                    para llevar sus vehículos a nuestros talleres. Los servicios
                    que realizamos son mantenimientos preventivos/periódicos.
                    <p class="legalesSection">Términos legales</p>
                    <li>Es válido para todas nuestras marcas.</li>
                    <li>
                      No aplica para los siguientes modelos: Jac X200, Changan
                      Q20, Jac Sunray, Foton K3.
                    </li>
                    <li>
                      El servicio aplica para los siguientes kilometrajes
                      expresados en miles: 5, 10, 15, 20, 25, 35, 45, 55, 65,
                      75, 85, 95
                    </li>
                    <li>
                      Solo en los talleres de Surquillo y Surco, con recepción
                      de Lunes a Viernes de 7:00pm a 10:30pm.
                    </li>
                    <li>
                      No aplica para plancha y pintura, diagnósticos ni
                      reparaciones.
                    </li>
                    <li>No aplica para unidades con gas instalado.</li>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-tab>
        <b-tab title="Repuestos">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  src="https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-03-26-mantenimiento-repuestos.png"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Repuestos">
                  <b-card-text>
                    Te ofrecemos un servicio en horario de oficina donde
                    realizamos mantenimientos periódicos / preventivos y
                    correctivos / reparaciones, de acuerdo a lo que necesite su
                    vehículo. Se evalúa de forma completa la unidad para brindar
                    un diagnóstico del estado en que se encuentra y lo que
                    requiere.
                    <p class="legalesSection">Términos legales</p>
                    <li>Es válido para todas nuestras marcas</li>
                    <li>Se realiza en todos los talleres</li>
                    <li>
                      Los tiempos de diagnóstico y reparación los dará el
                      personal encargado del taller
                    </li>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-tab>
      </b-tabs>
    </b-container>
  </div>
</template>

<script>
import Title from '@/components/common/Title'

export default {
  name: 'TabsType',
  components: { Title },
  data() {
    return {
      title: 'Post Venta',
      description:
        'Ofrecemos mantenimientos preventivos y correctivos para tu vehículo. Elige el servicio que más te acomode y Agenda una Cita en Taller'
    }
  }
}
</script>

<style scoped>
.tab-content {
  margin-top: 0 !important;
}
</style>
