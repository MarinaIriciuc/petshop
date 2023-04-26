<script setup>
import {useCartStore} from "~/stores/cart";

const cartStore = useCartStore()
</script>

<template>

  <div class="container">
      <div class="row mt-5">
        <div class="col-12 d-flex">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in cartStore.cart">
              <td>{{product.name}}</td>
              <td>{{product.price}} $</td>
              <td>{{product.cartQuantity}}</td>
              <td>{{product.price * product.cartQuantity}} $</td>
              <td><button @click="cartStore.removeProduct(product.name)" class="btn btn-close btn-outline-info"></button></td>
            </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td>{{cartStore.cartTotal}} $</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
  </div>

</template>


<style scoped>

</style>

