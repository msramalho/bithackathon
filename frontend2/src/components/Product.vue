<template>
<card>
    <img :src="'https://loremflickr.com/480/480/' + name" />
    <p>
    {{ name }}
    {{ id }}
    </p>
</card>
    
</template>

<script>
export default {
    props: {
        name: String,
        id: String,
    },

    data() {
        return {
            description: 'ola',
        }
    }
    
}
</script>

<style>

</style>


