<template>
  <div class="home">
    <div class="main-screen">
        <h1 class="title">SAGEM - Sistema Avançado de Gerenciamento de Memória</h1>
        <h3 class="sub-title">Escolha a funcionalidade que deseja executar:</h3>
        <ul class="funcs">
          <router-link to="/loadProcess"><li>Carregar Novo Programa</li></router-link>
          <router-link to="/listProcess"><li>Listar Processos</li></router-link>
          <router-link to="/deleteProcess"><li>Excluir Processo</li></router-link>
          <router-link to="freeSpace"><li>Total de Memória Livre</li></router-link>
          <router-link to="/memoryState"><li>Estado Atual da Memória</li></router-link>
          <li class="menu-item" @click="compactMemory()">Compactar Memória</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data(){
    return{
      freeMemory: 0,
      compactedMemory: new Array
    }
  },
  methods: {
    compactMemory(){
      let index = 0
      for(let i = 0; i < this.memory.length; i++){
        if(this.memory[i].name == "Livre"){
          this.freeMemory += parseInt(this.memory[i].length)
        }
        else{
          this.compactedMemory.push({name: this.memory[i].name, length: this.memory[i].length, index: parseInt(this.compactedMemory.length)})
          index++;
        }
      }
      this.compactedMemory.push({name: "Livre", length: this.freeMemory, index: parseInt(this.compactedMemory.length)})
      console.log(this.compactMemory)
      this.$store.commit('compactProcess', this.compactedMemory)
    }
  },
  computed: {
    memory(){
      return this.$store.state.memory
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
a:hover{
  color: #2b7c58;
}

.menu-item{
  color: #42b983;
}

.menu-item:hover{
  color: #2b7c58;
  cursor: pointer;
}
</style>
