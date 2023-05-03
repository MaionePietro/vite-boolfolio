<script>
import axios from 'axios'
export default {
    data() {
        return {
            projects: []
        }
    },
    methods: {
        fetchProject() {
            axios.get('http://127.0.0.1:8000/api/project')
                .then(res => {
                    console.log(res)
                    const results  = res.data.project
                    this.projects = results
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    mounted() {
        this.fetchProject()
    },
}
</script>

<template lang="">
    <div class="row row-cols-4">     
        <div class="col" v-for="(project, i) in projects" :key="project.id">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ project.costumer }}</p>
                    <p class="card-text">{{ project.description }}</p>
                    <a href="">{{ project.url }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>