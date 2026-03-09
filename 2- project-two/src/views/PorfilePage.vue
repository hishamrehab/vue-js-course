<template>
    <div class="profile">
        <h2>This is profile page</h2>
        <h1>{{ $route.params.userid }}</h1>
        <h2>{{ $route.params.userName }}</h2>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$route)
    }
}
</script>


