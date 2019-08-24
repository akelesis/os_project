<template>
  <div class="list-process">
      <div class="graphics">
          {{processes}}
      </div>
      <div class="return-btn"><router-link to="/">Retornar</router-link></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            processes: []
        }
    },
    methods: {
        
    }
}
</script>

<style>

</style>