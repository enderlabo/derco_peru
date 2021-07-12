<template>
  <section class="py-4">
    <b-container>
      <b-card class="card-limit" body-class="card-body-limit">
        <h2>3. LÍMITE O CADUCIDAD DE LA GARANTIA</h2>
        <p>
          A continuación, se detallan las causas por las cuales queda limitada o
          caduca la garantía del vehículo:
        </p>
        <ul>
          <li>
            No cumplir con el cronograma de mantenimientos establecido en el
            presente manual de garantía, en los Servicios Técnicos Autorizados
            por DERCO con una tolerancia de +/- 500Km como máximo.
          </li>
          <li>Usar piezas que no sean originales.</li>
          <li>
            Participar en carreras de competición, rally u otros similares.
          </li>
          <li>
            Problemas ocasionados por reparaciones efectuadas por terceros.
          </li>
          <li>Choques, accidentes, abuso o negligencia.</li>
          <li>
            Marcador de kilometraje desconectado o que se compruebe modificación
            en el sistema cuenta kilómetros que ocasione una medición errónea.
          </li>
          <li>Catalizador dañado por contaminación o golpes.</li>
          <li>
            Fallas de los sensores del sistema electrónico producidas por agua o
            la instalación de accesorios por terceros, cualquiera sea, que no
            estén autorizados por DERCO
          </li>
          <li>
            Fallas de ECU producidas por conexiones externas realizadas por
            personal no calificado.
          </li>
          <li>
            Alteraciones efectuadas con el objeto de cambiar, agregar o sacar
            partes o piezas del vehículo.
          </li>
          <li>
            Instalar equipos o accesorios NO HOMOLOGADOS expresamente por DERCO
            como aire acondicionado, alarmas, economizadores, focos especiales,
            llantas, radios, inmovilizadores, celulares, DVD, equipos CD, GPS,
            elevalunas, bloqueos de puertas, etc.
          </li>
          <li>
            La garantía no cubrirá fallas producidas por mala utilización del
            vehículo, incluso si el vehículo cuenta con los mantenimientos y
            reparaciones recomendadas por el fabricante. Mala utilización se
            refiere por ejemplo a conducción a exceso de velocidad, con exceso
            de carga, caminos no aptos, inundaciones. etc.
          </li>
          <li>
            La garantía no cubrirá daños ocasionados al vehículo por el uso de
            combustible de mala calidad (adulterado o con alto contenido de
            azufre). Tampoco se hace responsable por el mal olor generado por
            este tipo de combustible.
          </li>
          <li>
            La garantía no cubrirá daños derivados de modificaciones o remoción
            de partes en el vehículo que no permitan concluir que el vehículo se
            encuentra dentro del plazo de garantía.
          </li>
          <li>
            Los neumáticos delanteros y traseros no tienen garantía salvo si la
            avería se debe a otro incidente en el vehículo que haya provocado el
            deterioro del neumático.
          </li>
          <li>
            El periodo de garantía para los accesorios no originales instalados
            por DERCO es de 6 meses.
          </li>
        </ul>
      </b-card>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'LimitExpiryWarranty'
}
</script>

<style scoped lang="scss">
.card-body-limit {
  padding: 33px 36px !important;
}
.card-limit {
  background: #e6e6e6;
  border-radius: 26px;
  h2 {
    font-weight: bold;
    font-size: 18px;
    color: #bb0000;
  }
  p {
    font-weight: normal;
    font-size: 15px;
    color: #4b4b4b;
  }
}
li {
  font-size: 16px;
  font-weight: normal;
  color: #4b4b4b;
  &::marker {
    color: #bb0000;
  }
}
@include media-breakpoint-down(md) {
  .card-body-limit {
    padding: 1.25rem !important;
  }
}
</style>
