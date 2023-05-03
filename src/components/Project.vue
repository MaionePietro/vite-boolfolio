<script>
import ProjectCard from './ProjectCard.vue'
import axios from 'axios'
export default {
    components:{
        ProjectCard
    },
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
        <ProjectCard v-for="(project, i) in projects" :key="project.id" :project="project" />
    </div>
</template>

<style lang="scss"></style>