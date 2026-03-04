<template>
  <div
    class="my-main"
  >
    <h1>
      This is  my main page
    </h1>
   <keep-alive>
        <my-comp :name="name" v-if="isCompTwo">
        <template #slotHeader>
          <h3>This is slot header one</h3>
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
   </keep-alive>
    </div>
     
    <div>
    <keep-alive>
    <mycomp-two name="Mohamed" v-if="isCompTwo">
            <template #slotHeader>
            <h3>This is slot heade two</h3>
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
        </mycomp-two>
        </keep-alive>
    </div>
    
    
   <button @click="isCompTwo = !isCompTwo">Toggle Data</button>
</template> 


<script>

import MyComp from '@/components/MyComponent.vue';
import MycompTwo from "@/components/MyComponent.vue"


 export default {
  name : "MyMain",
  components: {
    MyComp,
    MycompTwo
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