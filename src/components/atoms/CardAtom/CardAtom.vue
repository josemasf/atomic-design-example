

<template>
   <Card style="width: 25em">
        <template #header>
            <img :alt="title" :src="mainImage" style="width: 100%" />
        </template>
        <template #title> {{title}}</template>
        <template #subtitle> {{subtitle}} </template>
        <template #content>
            <p>
                {{content}}
            </p>
        </template>       
    </Card>
</template>

<script setup lang="ts">

import Card from 'primevue/card';

defineProps({
    mainImage: String,
    title: String,
    subtitle: String,
    content: String
})


</script>
        

