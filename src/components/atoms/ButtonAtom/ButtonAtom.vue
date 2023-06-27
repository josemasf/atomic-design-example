
<template>
    <div class="card flex justify-content-center">
        <Button :label="label" @click="clickHandle" :loading="loading" />
    </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
const emits = defineEmits(['click'])

defineProps({
    loading: Boolean,
    label: String
})

const clickHandle = () =>{
    emits('click')
}
</script>