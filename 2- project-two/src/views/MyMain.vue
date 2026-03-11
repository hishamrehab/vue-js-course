<template>
  <div class="my-main">
    <h2>This is my main page</h2>
    <button @click="getSt">Get Students</button>
    <ul>
      <li v-for="st in students" :key="st.id">
        <p>Id: {{ st.id }}</p>
        <p>Name: {{ st.Name }}</p>
        <p>Age: {{ st.age}}</p>
        <p>Grade: {{ st.grade }}</p>
        <button @click="$event => toProfile('my_profile' ,
          st.id, 
          st.name
        , st.age 
        , st.gender
        )">View Porfile</button>
      </li>
    </ul>
</div>
</template> 
<script>

 
 export default {
  name : "MyMain",
  data() {
    return {
      students: [],
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