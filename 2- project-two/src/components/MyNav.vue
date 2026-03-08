   <template>
      <nav class="my-nav">
         <div class="icon"> icon</div>
         <div class="logo"> 
            <img src="@/assets/logo.png" alt=""/>    
         </div>
         <div class="links"> 
            <ul>
                  <li v-for="link in myRoutes" :key="link.name">
                     <router-link :to="{name: link.name}">
                    {{ link.meta.title }}
                     </router-link>
                  </li>
               <!-- <router-link :to="{name: 'About' }">About</router-link> -->
            </ul>    
         </div>
            <button class="btns">
            <button style="margin-right:10px;">LOGIN</button>
            <button>SIGN UP</button>
            </button>
         </nav>
   </template>


<script>

 export default {
    data() {
        return {
            logo: 'My Logo',
            myRoutes: [],
        }
    },
    mounted() {
      this.myRoutes = this.$router.options.routes;
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
