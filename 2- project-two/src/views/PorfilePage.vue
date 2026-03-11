<template>
    <div class="profile">
        <h2>This is profile page</h2>
        <h1>{{ $route.params.userid }}</h1>
        <h2>{{ $route.params.userName }}</h2>
       <hr />
        <ul 
            style="list-style: none;
            display: flex;
            justify-content: center;
            gap:20px">
            <li>
                <router-link :to="{name:'MyLearnings'}">My Learnings</router-link>
                <router-link :to="{name:'MyWishlist'}">My Wishlist</router-link>
            </li>
        </ul>
        <hr />
        <div class="container">
            <router-view />
        </div>


    </div>
</template>

<script>
import router from '@/router';

export default {
   
}
</script>


