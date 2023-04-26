<script setup>

import {useSearchStore} from "~/stores/search";
import {useCartStore} from "~/stores/cart";

const route = useRoute()
let searchStore = useSearchStore()

const supabase = useSupabaseClient()
const cartStore = useCartStore()


// let { data, error} = await supabase
//     .from('profiles')
//     .select('*')
//
// console.log(data)

// SELECT * FROM profiles



// caini/paturi
// caini-paturi
// caini-categorii - din cauza ca ruta noastre din server nu poate accesa 2 parametrii dinamici
// deodata, va trebui sa facem din 2, unul prin a-i separa prin caracterul "-"
const res = await useFetch(`/api/subcategory/${route.params.subcategory}-${route.params.name.toLowerCase()}`)

searchStore.updateData(res.data.value)




</script>

<template>
    <div v-if="res.data.error" class="mt-5">
       <h1 class="d-flex justify-content-center">Categoria nu a fost gasita.</h1>
          <div class="d-flex justify-content-center">
            <img src="https://i.ibb.co/mt2RKcq/404-error-with-a-cute-animal-illustrations-png.png"  alt="">
          </div>
    </div>
  <div v-else>
            <div class="row mt-5">
<!--              {{ searchStore.search}}-->
            <div v-if="searchStore.filteredData.length === 0">
              <h4 class="d-flex justify-content-center">Nu exista produsul cautat</h4>
            </div>
              <div v-else v-for="item in searchStore.filteredData" class="col-xl-4 col-md-6 col-sm-6 col-12 mt-4">
                <div class="card">
                  <div class="card-body">
                    <img :src="item.image" alt="">
                        <p>{{item.name}}</p>
                        <button @click="cartStore.setCart(item)" class="btn btn-outline-light">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
  </div>
</template>


<style scoped>

</style>

