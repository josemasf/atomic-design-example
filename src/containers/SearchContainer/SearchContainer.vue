<template>
    <SearchOrganism @search="searchHandle" :loading="loading"/>
    
    <div v-for="product in result.data.products" :key="product.id">
        <CardAtom 
            :mainImage="product.thumbnail"
            :title="product.title"
            :subtitle="product.category"
            :content="product.description"
        />
    </div>
</template>

<script setup lang="ts">
import { SearchOrganism, CardAtom } from '@/components';
import { getData } from '@/services/api';
import type { ProductsResult } from '@/services/types/Products';
import { reactive, ref } from 'vue';

const searchTerm = ref()
const result: {data: ProductsResult} = reactive({
    data: {
        products: [],
        total: 0
    }    
})

const loading = ref(false)

const searchHandle = async (payload: string) =>{
    searchTerm.value = payload
    loading.value = true
    result.data = await getData(searchTerm.value)

    loading.value = false
}

</script>