<template> 
  <div>
    <b-card>
      <b-container>
        <b-table-simple>
          <thead>
            <th style="font-weight: bold">Title</th>
            <th style="font-weight: bold" class="border-right">Origin</th>
          </thead>
          <tbody>
            <b-tr v-for="(artwork, index) in pieces" :key="index">
              <td>{{ artwork.title }}</td>
              <td>{{ artwork['place_of_origin'] }}</td>
            </b-tr>
          </tbody>
        </b-table-simple>
      </b-container>
    </b-card>
  </div>
</template>

<script>
const API_URL = 'https://api.artic.edu/api/v1/artworks?page=1&limit=21'

export default {
  data: () => ({
    // branches: ['main', 'v2-compat'],
    // currentBranch: 'main',
    data: null,
    information: null,
    pieces: null
  }),
  created() {
    this.fetchData();
  },
  watch: {
    // currentBranch: 'fetchData'
  },
  methods: {
    async fetchData() {
      const url = `${API_URL}`; //${this.currentBranch}
      this.information = await (await fetch(url)).json();
      // this.data = this.information.data;
      // this.pieces = Object.values(this.data)
      console.log(this.information.data);
      this.pieces = this.information.data
    },
  },
};
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
ul {
  list-style: none;
}
b-tr:nth-child(odd) {background-color: #dbd7d7}
</style>