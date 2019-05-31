<template>
  <div class="container-fluid list" ref="listing">
    <section>
      <h1>Lists</h1>
      <div class="prod-list">
        <template v-for="product in products">
          <Product :name="product.WebDisplayName" :brand="product.Brand" :price="product.OriginalListPrice" :id="product.ProductCode" :key="product.id"></Product>
        </template>
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

.prod-list{
  --auto-grid-min-size: 16rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
  grid-gap: 1rem;
}
</style>
