<template>
    <div class="my-form">
        <form action="" @submit.prevent >
         <div>
            <label for="">First Name</label>
            <input type="text" v-model="firstName" />
            <p>Result is {{ student.firstName }}</p>
         </div>
         <hr />

           <div>
            <label for="">Last Name</label>
            <input type="text" v-model="lastName" />
             <p>Result is {{ student.lastName }}</p>
         </div>
    <hr />
           <div>
            <label for="">age</label>
            <input type="number"  v-model="age" />
               <p>Result is {{student.age }}</p>
         </div>
    <hr />
           <div>
            <label for="">Email</label>
            <input type="email" />
                  <p>Result is {{ student.email }}</p>
         </div>
    <hr />
         <div class="actions">
            <input type="submit" value="Submit"  v-model="email" />
         </div>

        </form>
    </div>
</template>


<script>
export  default {
    name : "MyForm",
    data() {
        return {
            student: {
                firstName: "",
                lastName: "",
                age: "",
                email:""
            }
        };
    }
}
</script>