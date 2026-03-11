<template>
  <div class="my-main">
    <h2>This is my main page</h2>
    <h1>Age from parent is {{ age }}</h1>
    <button @click="$event => age++">Inc Age</button>
   <ProvideInject  />
</div>
</template> 
<script>
import ProvideInject from '@/components/ProvideInject.vue';

 
 export default {
  name : "MyMain",
  components: {
    ProvideInject
  }, 
  data() {
    return {
      students: [],
      name :"Ahmed Rehab",
      age: 29
    }
  },
  methods: {
    satHi() {
      console.log("Hi");
    }
  },
//  provide for static data
  //   provide: {
  //   name: this.name
  // },
  // provide for dynamic data
  provide() {
      return {
         name: this.name,
         age: this.age,
         myFunction: this.satHi
      }
  },
  methods: {
    routerFunc() {
      this.$router.replace({name : "About"});
    },
    async getSt() {
      await fetch("https://course-backend.onrender.com/")
      .then((res) => res.json())
      .then((data) => (this.students = data));
    },
    toProfile(view , id , userName , age , gender ) {
      this.$router.push({name : view , params: {userId : id , userName : userName} ,
    query: {age: age , gender: gender}
    })
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