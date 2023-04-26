<script setup>

let route = useRoute()
const {data} = await useFetch('/api/category/' + route.params.name)
console.log(route)


</script>

<template>


  <div v-if="data.error" class="mt-5">
    <h1 class="d-flex justify-content-center">Categoria nu a fost gasita.</h1>
    <div class="d-flex justify-content-center">
      <img src="https://i.ibb.co/mt2RKcq/404-error-with-a-cute-animal-illustrations-png.png"  alt="">
    </div>
  </div>

  <div v-else class="row mt-5">
    <div v-for="subcategory in data" class="col-3">
      <NuxtLink :to="`${route.path}/${subcategory.name}`">
        <div class="card rounded-5">
          <div class="card-body">
            <img :src="subcategory.image" class="img-fluid" alt="">
          </div>
          <div class="card-footer border-0 d-flex text-black justify-content-center">
            <p>{{ subcategory.name }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>

</template>


<style scoped>

</style>

