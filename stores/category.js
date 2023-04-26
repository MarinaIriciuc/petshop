import {defineStore} from "pinia";

export const useCategoryStore = defineStore('category',  function (){
    const {data} = useFetch('/api/categories')
    return {categories: data}
})