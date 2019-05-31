<template>
  <div class="list" ref="listing">
    <section>
      <div class="row">
        <div :key="product.ProductCode" v-for="product in products" class="product col-lg-3 col-md-6">
          <Product class="mb-4" :name="product.WebDisplayName" :brand="product.Brand" :price="product.OriginalListPrice" :id="product.ProductCode" :key="product.id"></Product>
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
  .container-fluid.list {
    padding: 3rem;
  }
  .prod-list {
    --auto-grid-min-size: 16rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
    grid-gap: 1rem;
  }
  div.product {
    padding: 0.5rem;
  }
</style>
