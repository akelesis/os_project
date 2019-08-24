<template>
  <div class="memorystate">
      <div class="graphics">
          {{memory}}
      </div>
      <div class="return-btn"><router-link to="/">Retornar</router-link></div>
  </div>
</template>

<script>
export default {
  computed:{
      memory(){
          return this.$store.state.memory
      }
  }
}
</script>

<style>

</style>