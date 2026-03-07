<template>
  <div
    class="my-main"
  >
    <h2>
      This is  my main page
    </h2>
    <p v-maxSize="10" v-changeColor="'blue'" class="container" v-containerWidth="80">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ab reprehenderit 
      facere sapiente earum excepturi laboriosam quae dolor mollitia at, fugit impedit 
      architecto tenetur, incidunt tempore error repudiandae eveniet id!</p>
    <div class="products">
      <ul>
        <li v-for="product in products" :key="product.id">
          <p>title: {{ product.title }} </p>
          <p>brand: {{ product.brand }} </p>
          <p>category: {{ product.category }} </p>
          <p>description: {{ product.description }} </p>
          <p>Brande: {{ product.description }} </p>
          <p>price: {{ product.price }} </p>
          <p>rating: {{ product.rating }} </p>
          <p>stock: {{ product.stock }} </p>
          <img  :src="product.thumbnail" width="100" alt="" />
          <hr />
        </li>
      </ul>
    </div>
     <MyForm />
    </div>


    <div>
     <ul>
      <li >
       <h3>Update Student</h3>
      <label for="">Add Age To Update</label>
      <label for="">Age</label>
      <input type="number" />
      <label for="">Id</label>
      <input type="number" v-model="changeId"/>
      <button type="button" @click="">Update</button>
      </li>
     </ul>
    

     <ul>
      <li v-for="st in students" :key="st.id">
      <p>Id: {{ st.id}}</p>
      <p>Name: {{ st.name }}</p>
      <p>Age: {{ st.age }}</p>
       <p>Gender : {{ st.gender }}</p>
       <p>
        Favorite Sports: 
        <strong v-for="(sport , i) in favouriteSports" :key="i" >{{ sport }}</strong>
       </p>
       <span @click="$event => deleteSt(st.id)" style="cursor: pointer; font-size: 25px;">X</span>
    </li>
     </ul>

    </div>

  </template> 


<script>


import MyForm from '@/components/MyForm.vue';

 export default {
  name : "MyMain",
  directives: {
      containerWidth(el , order){
        el.style.maxWidth= order.value + "%";
        el.style.marginRight ="auto";
        el.style.marginLeft ="auto";
      } 
     },
  components: {
   },
  data() {
    return  {
    sport: "",
    student: {
      name: "",
      age: "",
      grade:"",
      gender: "",
      favouriteSports: []
    },
    students: [],
    changeAge: "",
    changeId: "",
    };
  },
  methods: {
   addSport() {
    this.student.favouriteSports.push(this.sport);
    this.sport ="";     
    },
    async getStudents() {
      await fetch(`https:///course-backend.onrender.com/`)
      .then(res => res.json())
      .then(data => this.students = data);
    },
    async addStudent() {
      //  await fetch(`https:///course-backend.onrender.com/`)
      const requestData = {
        headers:{"Content-Type" : "application/json"},
        method: "POST",
        body: JSON.stringify(this.student)
      }
      await fetch("https:///course-backend.onrender.com/add-student" ,
        requestData
      ).then(res => res.json())
      .then((data) => (this.students = data));
    },
    async deleteSt(id) {
 //  await fetch(`https:///course-backend.onrender.com/`)
      const requestData = {
        headers:{"Content-Type" : "application/json"},
        method: "DELETE"
      };
      await fetch(
        `https:///course-backend.onrender.com/update-student/${id}`,
        requestData
      )
        .then((res) => res.json())
        .then((data) =>(this.students = data))
    }
  },
  async updateStudent() {
    if(!this.changeAge || !this.changeId) {
      return;
    }
  const requestData = {
    headers:{"Content-Type" : "application/json"},
    method: "POST",
    body: JSON.stringify({
   age: this.changeAge,
  })
  }
   await fetch(`https:///course-backend.onrender.com/delete-student/${this.changeId}` ,
    requestData
    ).then(res => res.json())
    .then(data => (this.students = data));
  },
  async mounted() {
    await this.getStudents();
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