<template>
  <div class="load-main">
    <h3>Remover Processo:</h3>
    <div class="input-group">
      <label for="name">Nome do processo</label>
      <input type="text" name="name" id="name" class="input-fields" v-model="process.name" />
    </div>
    <div class="input-group">
      <label for="length">Indice do processo</label>
      <input type="number" name="length" id="length" class="input-fields" v-model="process.index" />
    </div>
    <button type="button" class="confirm-btn" @click="remove()">Remover</button>
    <div class="return-btn">
      <router-link to="/">Retornar</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      process: {
        name: "",
        length: "",
        index: ""
      }
    };
  },
  methods: {
    remove() {
      if (this.process.index != "" && this.process.name == "") {
        if (this.memory[this.process.index].name != "Livre") {
          let aux = this.memory[this.process.index]
          aux.name = "Livre"
          this.memory[process.index] = aux;
          alert("Processo excluído com sucesso!");
        } 
        else {
          alert(
            "Comando não pôde ser executado, verifique se o processo existe!"
          );
        }
      }
      if (this.process.index == "" && this.process.name !== ""){
        let aux = {}
        for(let i = 0; i < this.memory.length; i++){
          if(this.memory[i].name === this.process.name){
            aux = this.memory[i]
            aux.name = "Livre"
            this.memory[i] = aux;
            alert("Processo excluído com sucesso!");
            return
          }
          alert("Comando não pôde ser executado, verifique se o processo existe!");
          
        }
      }
    }
  },
  computed: {
    memory() {
      return this.$store.state.memory;
    }
  }
};
</script>

<style>
</style>