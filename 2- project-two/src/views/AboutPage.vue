<template>
    <div class="about">
        <h2>This is about page</h2>
        <MyContent  :students="students"/>
    </div>
</template>

<script>
 import MyContent from '@/components/MyContent.vue';
 export default {
    components : {
         MyContent
    },
    data() {
        return {
            students : [  "Sami" , "Mohamed" , "Mostafa" , "Mahmoud"]
        }
    }
 }
</script>