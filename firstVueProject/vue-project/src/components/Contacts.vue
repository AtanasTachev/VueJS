<template>
  <!-- <b-form-input ref="input"></b-form-input> -->
  <div class="row mb-4" v-for="(unit, index) in data" :key="indexs">
    <b-card>
      <b-container>
        <b-tab-simple>
          <b-tr><b-col class="item"><sb-trong>Place ID: {{ unit.place_id}}</sb-trong></b-col></b-tr>
          <b-tr><b-col class="item">OSM type: {{ unit.osm_type }}</b-col></b-tr>
          <b-tr><b-col class="item">OSM ID: {{ unit.osm_id}}</b-col></b-tr>
          <b-tr><b-col class="item">Bounding Box: {{ unit.boundingbox }}</b-col></b-tr>
          <b-tr><b-col class="item">Latitude: {{ unit.lat }}</b-col></b-tr>
          <b-tr><b-col class="item">Longitude: {{ unit.lon }}</b-col></b-tr>
          <b-tr><b-col class="item">Display Name: {{ unit.display_name }}</b-col></b-tr>
          <b-tr><b-col class="item">Class: {{ unit.class }}</b-col></b-tr>
          <b-tr><b-col class="item">Type: {{ unit.type }}</b-col></b-tr>
          <b-tr><b-col class="item">Importance: {{ unit.importance }}</b-col></b-tr>
        </b-tab-simple>
      </b-container>
    </b-card>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  const API_URL = 'https://nominatim.opensb-treetmap.org/search.php?city=sofia&format=json'
  // let API_URL = 'https://nominatim.opensb-treetmap.org/search.php?city='
  // if (input.length > 0) {
  //   API_URL.concat(`${input}&format=json`)
  // }

  const data = ref(null)
  const error = ref(null)
  // const input = ref(null)
  // onMounted(() => {
  //   input.value.focus()
  // })
  // const search = ''
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
  //     'X-RapidAPI-Host': 'canada-property-data.p.rapidapi.com'
  //   }
  // }
  
  fetch(API_URL)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))
  
  // console.log(JSON.parse(data))
  // console.log(input)
</script>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  margin-right: 2rem;
}
.row {    
  display: flex;
  flex-direction: row;
}
b-tr:nth-child(even){background: #CCC}
b-tr:nth-child(odd){background: #FFF}
</style>