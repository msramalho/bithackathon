<template>
    <div>
        Listas

        <Product
        name="dog"
        id="4949243"
        :price='5.03'
        />
    </div>
</template>

<script>

import Product from '../components/Product'

export default {
components: {
    Product
}
};

</script>



<style>
</style>
