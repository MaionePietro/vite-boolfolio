<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
}
</script>
<template lang="">
        <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ project.costumer }}</p>
                    <p class="card-text">{{ project.description }}</p>
                    <a href="">{{ project.url }}</a>
                </div>
            </div>
        </div>
</template>
<style lang="scss">
    
</style>