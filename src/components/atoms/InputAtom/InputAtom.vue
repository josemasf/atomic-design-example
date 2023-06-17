<template>
    <div class="card flex justify-content-center">
        <InputText type="text" v-model="value" @update:modelValue="updateHandle"/>
    </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

const emits = defineEmits(['update'])
const value = ref();

const updateHandle = () =>{    
    emits('update', value.value)
}
</script>
        


