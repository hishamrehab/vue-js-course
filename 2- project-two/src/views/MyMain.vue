<template>
  <div
    class="my-main"
   >
   <div class="container">
    <h2>this is my main page</h2>
    <ul>
      <li v-for="st in students" :key="st.id">
        <p>Name : {{ st.name }}</p>
        <p>Age : {{ st.age }}</p>
      </li>
    </ul>
   </div>
  </div>
  </template> 

<script>
 
 import stMixin from '@/mixins/stMixin';


 export default {
  name : "MyMain",
  mixins: [stMixin],  
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