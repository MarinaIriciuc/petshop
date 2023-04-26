<script setup>
import {useCategoryStore} from "~/stores/category";

const categoryStore = useCategoryStore()


</script>


<template>
    <div class="container min-vh-100">
      <div class="row mt-5">
        <h4>Category</h4>
        <div v-for="category in categoryStore.categories"  class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
          <NuxtLink :to="category.url" class="text-decoration-none">
            <AnimalCard :category="category"/>
          </NuxtLink>
        </div>
      </div>
    </div>
</template>



<style scoped>

/*.box{*/
/*  !*border: 10px solid black;*!*/
/*  margin-top: 15%;*/
/*}*/
/*.cat-image{*/
/*  margin-top: 3%;*/
/*}*/
</style>
