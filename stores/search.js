import {defineStore} from "pinia";

export const useSearchStore = defineStore('search', function (){
    let search = ref('');
    let data = ref([])
    let filteredData = computed(function (){
        return data.value.filter(item => {
            return item.name.toLowerCase().includes(search.value.toLowerCase())
        })
    })
    function updateData(d) {
        data.value = d
    }

    return {search, updateData, filteredData}
})