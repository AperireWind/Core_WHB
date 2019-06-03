<template>
  <div id="app">
    <Nav></Nav>
    <router-view :poinfoA1="poinfoA" :poinfoB1="poinfoB"/>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  components: {
    Nav
  },
  data() {
    return {
      poinfoA: [],
      poinfoB: []
    };
  },
  created() {
    fetch("apis/api/userentities/GetUserEntities", {
      // must match 'Content-Type' header
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, same-origin, *omit
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json"
      },
      method: "get" // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, cors, *same-origin
    })
      .then(res => {
        res = res.json();
        return res;
      })
      .then(response => {
        this.poinfoA = response;
      }),
      fetch("apis/api/userentities/GetTest01s", {
        // must match 'Content-Type' header
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-type": "application/json"
        },
        method: "get" // *GET, POST, PUT, DELETE, etc.
        // mode: "cors", // no-cors, cors, *same-origin
      })
        .then(res => {
          res = res.json();
          return res;
        })
        .then(response => {
          this.poinfoB = response;
        });
  }
};
</script>

<style>
@import url("../node_modules/bootstrap/dist/css/bootstrap.min.css");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
</style>
