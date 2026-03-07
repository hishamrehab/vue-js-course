<template>
  <div
    class="my-main"
   >
   <div class="container">
    <h2>this is my main page</h2>
     <h3>My name is {{ fullname }}</h3>
    <h3>Total Nums is{{  calcNums}}

    </h3>
   </div>
  </div>


  <ul>
    <input type="search" v-model="search"/>
  <li v-for="st in getOldSt" :key="st.id">
    <p>Name : {{ st.name }}</p>
    <p>Age : {{ st.age }}</p>
  </li>
  </ul>

</template> 

<script>
 
 import stMixin from '@/mixins/stMixin';


 export default {
  name : "MyMain",
  stMixin: [
    stMixin
  ],
  data() {
    return {
      firstName: "Ahmed",
      lastName: "Rehab",
      myArr: [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10],
      search: ""
    }
  },
  computed : {
    fullname() {
      return `${this.firstName} ${this.lastName}`
    },
    calcNums() {
      return this.myArr.reduce((acc , cur) =>acc + cur);
    },
    getOldSt() {
      return this.students.filter(st => st.age >= 14)
    },
    searchSt() {
      return this.students.filter(st => st.name.match(this.search));
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