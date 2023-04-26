<script setup>
import {useCategoryStore} from "~/stores/category";
import {useSearchStore} from "~/stores/search";

const categoryStore = useCategoryStore();
const searchStore = useSearchStore();
const user = useSupabaseUser()
const client = useSupabaseAuthClient()


async function handleLogout() {
  await client.auth.signOut()
}

</script>

<template>
  <div class="row" style="background-color: #000000">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <NuxtLink to="/">
          <img src="../assets/img/Littlest_Pet_Shop_(2012_TV_series)_logo.png" alt="" style="width: 100px">
        </NuxtLink>
        <div class="navbar-collapse">
          <ul class="navbar-nav me-auto  mx-5 mb-lg-0">
            <li class="nav-item">
              <NuxtLink to="/" class="text-decoration-none nav-link text-white">
               Home
              </NuxtLink>
            </li>
              <li v-for="category in categoryStore.categories" class="nav-item">
                <NuxtLink :to="category.url" class="text-decoration-none nav-link text-white">{{category.name}}</NuxtLink>
              </li>
          </ul>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
          </div>
           <form @submit.prevent="" class="d-flex align-items-center" role="search">
             <input v-model="searchStore.search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
           </form>
          <NuxtLink to="/wishlist">
            <font-awesome-icon class="text-white" icon="fa-solid fa-heart" />
          </NuxtLink>
          <NuxtLink to="/cart">
            <font-awesome-icon class="text-white mx-2" icon="fa-solid fa-cart-shopping" />
          </NuxtLink>
          <div v-if="!user">
            <NuxtLink to="/login">
              <button class="btn btn-outline-light mx-2">Login</button>
            </NuxtLink>
            <NuxtLink to="/register">
              <button class="btn btn-outline-light">Register</button>
            </NuxtLink>
          </div>
          <div v-else>
              <button @click="handleLogout" class="btn btn-outline-light">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  </div>

</template>


<style scoped>
.navbar{
  font-family: "Arial Rounded MT Bold";
}
</style>

