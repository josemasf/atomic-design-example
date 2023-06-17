
<template>
    <div class="card flex justify-content-center">
        <Button label="Submit" @click="clickHandle" />
    </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
const emits = defineEmits(['click'])

const clickHandle = () =>{
    emits('click')
}
</script>