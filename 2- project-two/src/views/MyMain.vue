<template>
  <div class="my-main">
    <h2>this is my main page</h2>
    <button @click="$event => $route.push({
      name : "About"
    })">Click me</button>
</div>
</template> 
<script>
 
 export default {
  name : "MyMain",
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