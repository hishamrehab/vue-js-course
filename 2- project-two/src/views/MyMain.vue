<template>
  <div
    class="my-main"
  >
    <h1>
      This is  my main page
    </h1>
   <MyContent :students="students" @updateActive="changeActive($event)" :isActive="isActive" />
   <hr />
     <MyContent :students="students" :isActive="isActive" @updateActive="changeActive($event)" />
  
    <LifeCycle />
    </div>

</template>


<script>
import MyContent from '@/components/MyContent.vue';
import LifeCycle from '@/components/LifeCycle.vue';

 export default {
  name : "MyMain",
  components : {
    MyContent,
    LifeCycle
  },
  data() {
    return  {
       students: ["Ahmed" , "Mohamed" , "Mostafa"],
       isActive : true
    }
  },
  methods: {
    changeActive(data) {
      this.isActive = data
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