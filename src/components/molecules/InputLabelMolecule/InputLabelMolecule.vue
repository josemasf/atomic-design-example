<template>
    <div class="card flex justify-content-center">
        <LabelAtom text="Search" attachtTo="search"/>
        <InputAtom type="text" :value="value" name="search" @update="updateHandle" />
    </div>
</template>

<script setup lang="ts">
import {InputAtom, LabelAtom} from '../../index'
import { ref } from 'vue';

const emits = defineEmits(['update'])

const props = defineProps({
    value: String
})

const value = ref(props.value);

const updateHandle = (payload: string) =>{
    value.value = payload
    emits('update', value.value)
}
</script>
        


