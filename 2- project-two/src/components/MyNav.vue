<template>
    <nav class="my-nav">
        <div class="icon"> icon</div>
        <div class="logo"> {{ logo }}  </div>
        <div class="links"> 
         <ul>
            <li v-for="link in links" :key="link">{{ link }}</li>
         </ul>    
        </div>
    </nav>
</template>


<script>
 export default {
    data() {
        return {
            logo: 'My Logo',
            links: ['Link one', 'Link Two', 'Link Three'],
        }
    }
 }
</script>


<style>
 .my-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
 }

 ul {
    display: flex;
    justify-content: space-between;
    gap: 20px;
 }
</style>
