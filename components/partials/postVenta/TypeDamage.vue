<template>
  <div class="content">
    <b-container>
      <b-row class="align-content-center align-items-center">
        <b-col
          v-for="(item, index) in items"
          :key="index"
          class="float-left col-item"
        >
          <div class="container-item">
            <div class="item-center">
              <div class="text-center align-content-center">
                <div class="align-items-center">
                  <span>
                    <img
                      width="126"
                      image_height="60"
                      image_id="1091"
                      title="rapida"
                      :src="item.image"
                      alt="rapida"
                    />
                  </span>
                </div>
                <div>
                  <p class="text-center">
                    <span style="color: #8f8f8f">{{ item.text }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'TypeDamage',
  data() {
    return {
      items: [
        {
          text: 'R Á P I D A',
          image: 'https://derco.com.pe/wp-content/uploads/2016/08/rapida.png'
        },
        {
          text: 'D A Ñ O L E V E',
          image: 'https://derco.com.pe/wp-content/uploads/2016/08/danoleve.png'
        },
        {
          text: 'D A Ñ O M E D I O',
          image: 'https://derco.com.pe/wp-content/uploads/2016/08/danomedio.png'
        },
        {
          text: 'D A Ñ O G R A V E',
          image: 'https://derco.com.pe/wp-content/uploads/2016/08/danograve.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
.content {
  background-color: #f9f9fa;
  background-position: left top;
  background-repeat: no-repeat;
  padding: 60px 0;
  margin-bottom: 0;
  margin-top: 0;
  border-width: 0 0 0 0;
  border-color: #f9f9fa;
  border-style: solid;
}

.col-item {
  margin-top: 0;
  margin-bottom: 0;
}

.container-item {
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0px;
  min-height: 102px;
  height: auto;
}

.item-center {
  min-height: 102px;
  height: auto;
}
</style>
