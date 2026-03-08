<template>
    <div class="profile">
        <h2>This is profile page</h2>
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