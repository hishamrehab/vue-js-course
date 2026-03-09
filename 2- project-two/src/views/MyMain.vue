<template>
  <div class="my-main">
    <h2>This is my main page</h2>
    <button @click="routerFunc">Click me</button>
</div>
</template> 
<script>

 
 export default {
  name : "MyMain",
  methods: {
    routerFunc() {
      this.$router.replace({
        name: "About"
      });
    }
  },
  mounted() {
    if(this.$router.hasRoute(this.$route.name)) {
      console.log("Route Exists");
    }
   }
 }
</script>

<style scoped lang="sass">
 .my-main {
  h2 {
    color :red;
  }
  p {
    color: green
  }
 }
</style>