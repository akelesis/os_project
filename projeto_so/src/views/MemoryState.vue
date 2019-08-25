<template>
  <div class="memorystate">
      <div class="graphics">
          <table class="processes-table">
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Tamanho</th>
            </tr>
            <tr v-for="space in memory" :key="space.index">
                <td>{{space.index}}</td>
                <td>{{space.name}}</td>
                <td>{{space.length}}</td>
            </tr>
          </table>
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
    .memorystate{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background-color: #eee;
    }
    .processes-table tr td{
        border: 1px solid #aaa;
    }
    .return-btn{
        margin-top: 20px;
        width: 99vw;
    }
</style>