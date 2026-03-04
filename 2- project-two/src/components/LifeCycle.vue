<template>
     <div class="life" style="margin-top: 50px;">
      <h2>Life Cycle Hooks</h2>
     </div>
     <p>age is {{ age }}</p>
  <button @click="$event => age++">inc age</button>

</template>

<script>
  export default {
data() {
    return {
        name :"Ahmed",
        age: 29
    };
 },
   beforeCreate() {
    alert("Before Created");
   },
   created() {
    alert("Created");
   },
   beforeMount() {
    alert("Before Mount");
   },
   mounted() {
    alert("Mounted")
   },
   beforeUpdate() {
    alert("Before Update");
   },
   updated() {
    alert("updated");
   },
   beforeUnmount() {
    alert("Before Unmount");
   },
   unmounted() {
    alert("Unmounted");
   }
  }
</script>