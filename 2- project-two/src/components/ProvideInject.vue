<template>
    <div class="prov-inj">
        <h1>Provide Inject Component</h1>
        <h1>Name is {{ name }}</h1>
        <h1>Age is {{ age }}</h1>
        <button @click="myFunction">Click</button>
    </div>
</template>
<script>

export default {
    inject : ['name' , "age" , "myFunction"]
}
</script>