<template>
  <div class="list" ref="listing">
    <section>
      <div class="row">
        <div :key="product.ProductCode" v-for="product in products" class="product col-lg-3 col-md-6">
          <Product class="mb-4" :name="product.WebDisplayName" :brand="product.Brand" :price="product.OriginalListPrice" :id="product.ProductCode" :description="product.Description"></Product>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Product from '../components/Product'
  export default {
    name: "lists",
    props: {
      products: Array
    },
    components: {
      Product
    }
  };
</script>

<style>
  div.product {
    padding: 0.5rem;
  }
</style>
