<template>
<div class="row" v-for="(unit, index) in data">
  <b-card>
    <b-container>
      <b-col class="item">Place ID: {{ unit.place_id}}</b-col>
      <b-col class="item">OSM type: {{ unit.osm_type }}</b-col>
      <b-col class="item">OSM ID: {{ unit.osm_id}}</b-col>
      <b-col class="item">Bounding Box: {{ unit.boundingbox }}</b-col>
      <b-col class="item">Latitude: {{ unit.lat }}</b-col>
      <b-col class="item">Longitude: {{ unit.lon }}</b-col>
      <b-col class="item">Display Name: {{ unit.display_name }}</b-col>
      <b-col class="item">Class: {{ unit.class }}</b-col>
      <b-col class="item">Type: {{ unit.type }}</b-col>
      <b-col class="item">Importance: {{ unit.importance }}</b-col>
    </b-container>
  </b-card>
</div>
</template>

<script setup>
  import { ref } from 'vue'
  const API_URL = 'https://nominatim.openstreetmap.org/search.php?city=sofia&format=json'

  const data = ref(null)
  const error = ref(null)
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
</style>