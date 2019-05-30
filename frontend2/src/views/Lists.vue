<template>
    <div class="list" ref="listing">
        <p>Lists</p>

        <template v-for="product in products">
            <Product :name="product.name" :price="product.price" :id="product.id" :key="product.id"></Product>
        </template>
    </div>
</template>

<script>
import Product from '../components/Product'

export default {
components: {
    Product
},
data() {
    return {
        products: [{name: "a", price: 2, id: "12"}, {name: "B", price: 69, id: "12213"}, {name: "C", price: 96.2, id: "13122"}]
    };
}
};
</script>

<style>
</style>
