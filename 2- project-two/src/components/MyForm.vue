<template>
    <div class="my-form">
        <form action="" @submit.prevent >
         <div>
            <label for="">First Name</label>
            <input type="text" v-model="firstName" />
            <p>Result is {{ student.firstName }}</p>
         </div>
    

           <div>
            <label for="">Last Name</label>
            <input type="text" v-model="lastName" />
             <p>Result is {{ student.lastName }}</p>
         </div>

           <div>
            <label for="">age</label>
            <input type="number"  v-model="age" />
               <p>Result is {{student.age }}</p>
         </div>

           <div>
            <label for="">Email</label>
            <input type="email" />
                  <p>Result is {{ student.email }}</p>
         </div>

          <div>
            <h3>Favorite Sports</h3>
            <label for="tennis">Tennis</label>
            <input
             type="checkbox"
             name="tennis"
              id="tennis" 
              v-model="student.sports.tennis"
              />
              <p>{{ student.sports.tennis }}</p>
            <label for="tennis">Football</label>
              <input
              v-model="student.sports.football"
              type="football" name="football" id="football"/>
              <p>{{ student.sports.football }}</p>
         </div>

         <h3>Gender</h3>
         <div>
            <label for="male">Male</label>
            <input  type="submit" style="width: 50%;" v-model="student.gender" value="male"/>
        </div>

            <div>
            <label for="female">Female</label>
            <input  type="submit" style="width: 50%;"  v-model="student.gender" value="female"/>
        </div>
           {{ student.gender }}

           <div>
            <label for="bio">
                Bio
            </label>
            <textarea name="bio" id="bio" v-model="student.bio"></textarea>
           {{ student.bio }}
        </div>
         <div class="actions" style="width: 100%;">
            <input type="submit" value="Submit"  v-model="email"  style="width: 50% ;"/>
         </div>

         <div>
            <lable for="grade">Grade</lable>
            <select v-model="student.grade" name="grade" id="grade">
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
                <option value="four">Four</option>
            </select>
           {{ grade }}
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
                email:"",
                sports: {
                    tennis: null, 
                    football:null
                },
                gender: "",
                bio: "",
                grade: ""
            },
            gender: ""
        };
    }
}
</script>


<style lang="scss" scoped>
.my-from {
    form {
        display: flex;
        flex-wrap: wrap;
     div {
        width: 40%;
     }


    }
}
</style>