<script setup>

const {data} = await useFetch('/api/product/getProduct', {
  params: {
    category: "Pisici",
    product: 1
  } 
})
console.log(data.value)

</script>

<template>
asdasd
</template>


<style scoped>

</style>

