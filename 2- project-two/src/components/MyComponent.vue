<template>
    <div class="parent">
        <h2>This is slot compoent , my name is {{ name }}</h2>
        <!-- <slot name="slotTitle"></slot>
        <slot name="slotText"></slot> -->
        <form action="">
          <slot name="slotHeader"></slot>
          <slot name="slotInputs"></slot>
          <slot name="slotActions"></slot>
        </form>
    </div>
</template>


<script>
export default {
    props: {
        name: {
            type: String,
        }
    }
}
</script>