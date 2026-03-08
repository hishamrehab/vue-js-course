   <template>
      <nav class="my-nav">
         <div class="icon"> icon</div>
         <div class="logo"> 
            <img src="@/assets/logo.png" alt=""/>    
         </div>
         <div class="links"> 
            <ul>
               <li>
                  <router-link to="/">Home</router-link>
               </li>
               <li>
                  <router-link to="/about">About</router-link>
               </li>
               <li>
                  <router-link to="/profile">Profile</router-link>
               </li>
            </ul>    
         </div>
            <button class="btns">
            <button style="margin-right:10px;">LOGIN</button>
            <button>SIGN UP</button>
            </button>
         </nav>
   </template>


<script>
import router from '@/router';

 export default {
    data() {
        return {
            logo: 'My Logo',
        }
    }
 }
</script>


<style scoped>
 .my-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:#d4d4d4d4;
    box-shadow: 0px 0px 9px -3px black;
 }

 ul {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    list-style: none;
 }

 img {
    width: 100px;
 }
 button {
    background-color: green;
    color: white;
    padding: 5px 10px;
 }
</style>
