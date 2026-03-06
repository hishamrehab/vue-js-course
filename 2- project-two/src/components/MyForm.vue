<template>
    <div class="my-form">
        <form action="" @submit.prevent="addStudent">
         <div>
            <lable for="firstName">First Name</lable>
              <input v-model="student.firstName" type="text" name="firstName"/>
        </div>

        <div>
            <lable for="lastName">Last Name</lable>
              <input type="text" name="lastName" v-model="student.lastName"/>
        </div>

              <div>
            <lable for="age">Age</lable>
              <input type="number" name="age" v-model="student.age" />
        </div>
        
        <div>
            <h3 for="age">Gender</h3>
            <label for="Male">Male</label>
              <input type="radio" name="Male" v-model="student.gender" value="male" />
             <label for="Female">Female</label>
              <input type="radio" name="Female" v-model="student.gender" value="female"/>
        </div>

            <div>
            <h3 for="age">Favorite Sports</h3>
            <label for="tennis">Tennis</label>
            <input v-model="student.sports.tennis" 
            value="female" type="checkbox" name="tennis"/>
            <label for="football">Footall</label>
              <input type="checkbox" name="football"  v-model="student.sports.football"/>
               <label for="football">Basketball</label>
              <input type="checkbox" name="basketball" v-model="student.sports.basketball"/>
        </div>

        <div>
            <h3>grade</h3>
            <select v-model="student.grade" name="grade" id="grade">
                <option vlaue="one">One</option>
                <option vlaue="two">Two</option>
                <option vlaue="Three">Three</option>
            </select>
        </div>

  <div>
    <label for="email">Email</label>
      <input type="text" name="firstName" v-model="student.email"/>
  </div>       
  
  
   <div>
    <label for="bio">Bio</label>
      <textarea name="bio" id="" cols="30" rows="10" v-model="student.bio"></textarea>
  </div> 
 
   <div style="width: 100%;">
    <input type="submit" value="save" style="width:50%;"/>
   </div>
    </form>

    <div>
        <ul>
            <li v-for="(st , i) in students" :key="i" >
                <p>Name : {{  st.firstName }}{{ st.lastName }}</p>
                <p>Age :{{ st.age }}</p>
                <p>Gender : {{ st.gender }}</p>
                <p>Sports : <strong>
                    <span v-for="(val , key , i ) in st.sports" :key="i">
                    <span v-if="val">{{ key }}</span> 
                        
                        <br />
                    </span>
                </strong></p>
                <p>Grade : {{ st.grade }}</p>
                <p>Email : {{ st.email }}</p>
                <p>Bio : {{ st.bio }}</p>
            </li>
        </ul>
    </div>

    </div>
</template>


<script>
import { S } from 'vue-router/dist/router-CWoNjPRp.mjs';

export  default {
    name : "MyForm",
    data() {
   return {
    student: {
        firstName: "",
        lastName: "",
        email: "",
        sports: {
            tennis: "",
            football: "",
            basketball:""
        },
        bio: "",
        grade: "",
        gender: ""
    },
     students: [],
 
   }
     },
     methods: {
        addStudent() {
            this.students.push(this.student);
                this.student= {
                        firstName: "",
            lastName: "",
            email: "",
            sports: {
                tennis: "",
                football: "",
                basketball:""
            },
            bio: "",
            grade: "",
            gender: ""
            }
        }
     }
}
</script>


<style lang="scss" scoped>
.my-from {
    form {
        display: flex;
        flex-wrap: wrap;
     div {
        width: 45%;
        margin-bottom: 20px;
     }
    }
}
</style>