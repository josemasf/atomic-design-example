<template>
    <div class="card flex justify-content-center">
        <InputLabelMolecule @update="updateHandle"/>        
        <ButtonAtom @click="clickHandle" :loading="loading" label="Submit"/>
    </div>
</template>

<script setup lang="ts">
import {InputLabelMolecule, ButtonAtom} from '@/components'
import { ref } from 'vue';
const emits = defineEmits(['search'])
defineProps({
    loading: Boolean
})

const text = ref()

const clickHandle = () =>{
    emits('search', text.value)
}
const updateHandle = (payload: string) =>{
    text.value = payload
}
</script>
        


