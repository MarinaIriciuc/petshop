import {defineStore} from "pinia";

export const useCartStore = defineStore('cart', function (){

    let cart = ref([])
    let cartTotal = ref(0)
    function setCart(product){
        cartTotal.value += Number(product.price)

        const foundProduct = cart.value.find(function (item){
            return item.name === product.name
        })
        if (foundProduct){
            foundProduct.cartQuantity ++
            return
        }

        cart.value.push({
            ...product,
            cartQuantity: 1,
        })

    }

    function removeProduct(name) {
        const foundProduct = cart.value.find(function(product) {
            return product.name === name
        })

        cartTotal.value -= foundProduct.price * foundProduct.cartQuantity

        cart.value = cart.value.filter(function(product) {
            return product !== foundProduct
        })
    }

    return {cart, setCart, removeProduct, cartTotal}



})