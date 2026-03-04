<template>
    <div class="my-content">
       <ul>
        <li v-for="(student , i)  in myStudents" :key="i">
            {{ student }}
        </li>
       </ul>
       <button @click="deleteStudent">Change Ref</button>
       <p>active is : {{ myActive }}</p>
       <button @click="$event => $emit('updateActive' , false)">Change Prem</button>
    </div>
</template>

<script>
export default {
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
   emits: ["updateActive"],
   data() {
    return {
       myStudents : this.students 
    }
   },
  methods: {
    deleteStudent() {
        this.students.shift();
    },
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