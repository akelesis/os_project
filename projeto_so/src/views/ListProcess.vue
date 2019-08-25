<template>
  <div class="list-process">
      <div class="graphics">
          <table class="processes-table">
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Tamanho</th>
            </tr>
            <tr v-for="process in processes" :key="process.index">
                <td>{{process.index}}</td>
                <td>{{process.name}}</td>
                <td>{{process.length}}</td>
            </tr>
          </table>
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
        listProcess(){
            for(let i = 0; i < this.memory.length; i++){
                if(this.memory[i].name !== 'Livre'){
                    this.processes.push(this.memory[i])
                }
            }
        }
    },
    computed: {
        memory(){
            return this.$store.state.memory
        }
    },
    mounted() {
        this.listProcess()
    }
}
</script>

<style>
    .list-process{
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