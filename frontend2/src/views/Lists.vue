<template>
  <div class="container-fluid list" ref="listing">
    <section>
      <h1>Lists</h1>
      <div class="prod-list">
        <template v-for="product in products">
          <Product :name="product.name" :price="product.price" :id="product.id" :key="product.id"></Product>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
  import Product from '../components/Product'
  export default {
    name: "lists",
    components: {
      Product
    },
    data() {
      return {
        products: [{
          name: "a",
          price: 2,
          id: "12"
        }, {
          name: "B",
          price: 69,
          id: "12213"
        }, {
          name: "C",
          price: 96.2,
          id: "13122"
        },{
          name: "a",
          price: 2,
          id: "14122"
        }, {
          name: "B",
          price: 69,
          id: "12213123"
        }, {
          name: "C",
          price: 96.2,
          id: "13131222"
        }]
      };
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
