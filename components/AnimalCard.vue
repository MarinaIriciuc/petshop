<script setup>
defineProps({
  category: Object
})
</script>

<template>
  <div class="card rounded-5">
    <div class="card-body text-center">
      <img :src="category.image" class="mt-3 img-fluid" alt="" style="height: 300px">
    </div>
    <div class="card-footer border-0 d-flex text-black justify-content-center">
      <h5>{{category.name}}</h5>
    </div>
  </div>
</template>


<style scoped>

</style>

