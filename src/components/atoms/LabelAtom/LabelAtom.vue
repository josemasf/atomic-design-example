<template>
    <label :for="attachtTo">{{text}}</label>    
</template>


<script setup lang="ts">

defineProps({
  text: String,
  attachtTo: String
})
</script>
        


