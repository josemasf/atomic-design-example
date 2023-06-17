<template>
    <SearchOrganism @search="searchHandle"/>
    
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

const searchHandle = async (payload: string) =>{
searchTerm.value = payload
result.data = await getData(searchTerm.value)


}

</script>