<template>
  <div
    class="my-main"
  >
    <h1>
      This is  my main page
    </h1>
   <my-comp :name="name">
      <template #slotHeader>
         <h3>This is slot header</h3>
      </template>
     <template  #slotInputs>
     <div>
      <input type="text" placeholder="Enter your name"/>
      <input type="password" placeholder="Enter your password"/>
     </div>
     </template>
          <template  #slotActions>
     <div>
      <input type="submit" value="submit"/>

     </div>
     </template>
   </my-comp>
    </div>

</template>


<script>
import MyComp from '@/components/MyComponent.vue';



 export default {
  name : "MyMain",
  components: {
    MyComp
  },
  data() {
    return  {
      name: "Ahmed",
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