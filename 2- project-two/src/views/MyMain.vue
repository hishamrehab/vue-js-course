<template>
  <div
    class="my-main"
  >
    <h2>
      This is  my main page
    </h2>
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
        <li></li>
        <li></li>
      </ul>
    </div>
     <MyForm />
    </div>

  </template> 


<script>


import MyForm from '@/components/MyForm.vue';

 export default {
  name : "MyMain",
  components: {
    MyForm
  },
  data() {
    return  {
      name: "Ahmed",
      products: []
    }
  },
  methods: {
   async getProducts() {
       await fetch("https://dummyjson.com/products")
       .then(res => res.json())
       .then((data) => (this.products = data.products));
    }
  },
 async mounted() {
   await this.getProducts();
  },
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