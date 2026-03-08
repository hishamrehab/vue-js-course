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
      this.$router.go(-1);
    }
  },
  mounted() {
    console.log(this.$router);
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