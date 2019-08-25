<template>
    <div class="memorystate">
      <div class="graphics">
          <h3>Espaço livre: {{space}} MB</h3>
      </div>
      <div class="return-btn"><router-link to="/">Retornar</router-link></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            space: 0
        }
    },
    methods: {
        getSpace(){
            for(let i = 0; i < this.memory.length; i++){
                if(this.memory[i].name === "Livre"){
                    this.space += parseInt(this.memory[i].length)
                }
            }
        }
    },
    computed: {
        memory(){
            return this.$store.state.memory
        }
    },
    mounted(){
        this.getSpace()
    }
}
</script>

<style>

</style>