<template>
  <div
    class="my-main"
  >
    <h1>
      This is  my main page
    </h1>
  <MyContent :students="students" :isActive="isActive" />
   <hr />
     <MyContent :students="students" :isActive="isActive" />
  </div>
</template>


<script>
import MyContent from '@/components/MyContent.vue';

 export default {
  name : "MyMain",
  components : {
 MyContent,
  },
  data() {
    return  {
       students: ["Ahmed" , "Mohamed" , "Mostafa"],
       isActive : true
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