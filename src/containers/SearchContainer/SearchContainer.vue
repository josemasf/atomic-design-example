<template>
    <SearchOrganism @search="searchHandle"/>
    {{searchTerm}}
</template>

<script setup lang="ts">
import { SearchOrganism } from '@/components';
import { ref } from 'vue';

const searchTerm = ref()

const searchHandle = (payload: string) =>{
searchTerm.value = payload
}

</script>