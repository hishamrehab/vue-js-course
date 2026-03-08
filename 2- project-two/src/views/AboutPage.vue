<template>
    <div class="about">
        <h1>This is About Page</h1>
        <button @click="renderFunc">Click me</button>
    </div>
</template>

<script>
export default {
    methods: {
        renderFunc() {
            this.$route.go(-1);
        }
    }
}
</script>

