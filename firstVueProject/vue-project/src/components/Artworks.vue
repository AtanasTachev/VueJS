<script>
const API_URL = `https://api.artic.edu/api/v1/artworks?page=1&limit=10`

export default{
  data: () => ({
    branches: ['main', 'v2-compat'],
    currentBranch: 'main',
    commits: null
  }),
  created() {
    this.fetchData()
  },
  watch: {
    currentBranch: 'fetchData'
  },
  methods: {
    async fetchData() {
      const url = `${API_URL}${this.currentBranch}`
      this.commits = await (await fetch(url)).json()
    }
  }
}
</script>

<template>
<div class="row">
    <h3 class="item">Title:</h3>
    <h3 class="item">Text:</h3>
    <h3 class="item">Date start:</h3>
    <h3 class="item">Date end:</h3>
    <h3 class="item">Display:</h3>
    <button type="submit">Click</button>
</div>
</template>

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