<script >
import ProjectCard from './components/ProjectCard.vue'

  export default{
    components: {
      ProjectCard
    },
    data() {
        return {
            projects: []
        }
    },
    methods: {
        fetchProject(){
            axios.get('http://127.0.0.1:8000/api/project')
            .then(res => {
                console.log(res)
                const { results } = res.data
                this.projects = results
            })
            .catch(err =>{
                console.log(err)
            })
        }
    },
    mounted() {
        this.fetchProject()
    },
    
  }
</script>

<template>
    <div class="container">
        <div class="row row-cols-4">
            <div v-for="project in projects">
                <div class="col">
                    <div class="card " style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.title }}</h5>
                            <p class="card-text">prova</p>
                            <p class="card-text"></p>
                            <p class="card-text"></p>
                            <a href=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

</style>
