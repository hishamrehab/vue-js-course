<template>
    <div class="profile">
        <h2>This is profile page</h2>
        <h1>{{ $route.params.userid }}</h1>
        <h2>{{ $route.params.userName }}</h2>
        <hr />
        <h1>{{ $route.params.age }}</h1>
        <h1>{{ $route.params.grade }}</h1>
        <h1>{{ $route.params.gender }}</h1>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$route.params.userName);
        console.log(this.$route.query.age);
        console.log(this.$route.params.userid);
    }
}
</script>


