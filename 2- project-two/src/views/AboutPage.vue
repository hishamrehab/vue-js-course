<template>
    <div class="about">
    <h1>This is About Page</h1>
    <input type="text" name="" id="" v-model="userName.name"/>
    <button @click="$event => isActive = !isActive" >Change Active</button>
    <h2>User name is {{ userName }}</h2>
  <h2>User status active is {{ isActive }}</h2>
  <button @click="$event => myArr.push('new data')">add to arr</button>
</div>
</template>

<script>
export default {
 data() {
    return {
        userName: "",
        isActive: false,
        userData: {
          name :"Ahmed",
          age: 29
        },
        myArr:[],
    }
 },
 watch: {
    userName(newVal , oldVal) {
      console.log(newVal , oldVal)
    },
     isActive(newVal , oldVal) {
      console.log(newVal , oldVal)
    },
    "userData.name"(newVal , oldVal){
      console.log(newVal , oldVal);
    },
    myArr: {
      handler(newVal) {
        console.log("new" , newVal)
      },
      deep:true
    }
 }
}
</script>

