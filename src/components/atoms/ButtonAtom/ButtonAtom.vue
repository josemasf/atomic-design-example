
<template>
    <div class="card flex justify-content-center">
        <Button label="Submit" @click="clickHandle" :loading="loading" />
    </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
const emits = defineEmits(['click'])

defineProps({
    loading: Boolean
})

const clickHandle = () =>{
    emits('click')
}
</script>