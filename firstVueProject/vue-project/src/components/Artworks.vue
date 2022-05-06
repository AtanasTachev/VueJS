<script>
const API_URL = 'https://api.artic.edu/api/v1/artworks?page=1&limit=10';

// export default {
//   name: "App",
//   data() {
//     return {
//       getResult: null
//     }
//   },
//   methods: {
//     fortmatResponse(res) {
//       return JSON.stringify(res, null, 2);
//     },
//     async getAllData() {
//       try {
//         const res = await fetch(`${API_URL}`);
//         if (!res.ok) {
//           const message = `An error has occured: ${res.status} - ${res.statusText}`;
//           throw new Error(message);
//         }
//         const data = await res.json();
//         const result = {
//           status: res.status + "-" + res.statusText,
//           headers: {
//             "Content-Type": res.headers.get("Content-Type"),
//             "Content-Length": res.headers.get("Content-Length"),
//           },
//           length: res.headers.get("Content-Length"),
//           data: data,
//         };
//         this.getResult = this.fortmatResponse(result);
//       } catch (err) {
//         this.getResult = err.message;
//       }
//     }
//   }
export default {
  data: () => ({
    // branches: ['main', 'v2-compat'],
    // currentBranch: 'main',
    // page: null,
    // limit: null,
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
      // this.limit = await (await fetch(url)).json();
      // console.log(fetchData());
    },
  },
};
</script>

<template v-for="singleData in data">
  <div class="row">
    <ul>
      <li>
        <h3 class="item">Title: {{ limit.singleData.title }}</h3>
      </li>
      <li>
        <h3 class="item">Text:</h3>
      </li>
      <li>
        <h3 class="item">Date start:</h3>
      </li>
      <li>
        <h3 class="item">Date end:</h3>
      </li>
      <li>
        <h3 class="item">Display:</h3>
      </li>
      <li>
        <button type="submit">Details</button>
      </li>
    </ul>
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