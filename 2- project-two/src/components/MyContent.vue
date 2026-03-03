<template>
    <div class="my-content">
       <ul>
        <li v-for="(student , i)  in myStudents" :key="i">
            {{ student }}
        </li>
       </ul>
       <button @click="deleteStudent">Change Ref</button>
       <p>active is : {{ myActive }}</p>
       <button @click="$event => myActive = !myActive">Change Premium</button>
    </div>
</template>

<script>
export default {
  props:["students" , "isActive"],
  props: {
     students: {
      type: Array,
      required : true,
     },
     isActve: {
      type: Boolean,
      required: true
     }
  },
   data() {
    return {
       myStudents : this.students 
    }
   },
  methods: {
    deleteStudent() {
        this.students.shift();
    }
  }
}
</script>


<style scoped>
ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;
}
</style>