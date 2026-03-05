<template>
  <div
    class="my-main"
  >
    <h2>
      This is  my main page
    </h2>
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
      isCompTwo : false
    }
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