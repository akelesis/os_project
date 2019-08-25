<template>
  <div class="load-main">
    <h3>Inserir Novo Processo:</h3>
    <div class="input-group">
      <label for="name">Nome do processo</label>
      <input type="text" name="name" id="name" class="input-fields" v-model="process.name" />
    </div>
    <div class="input-group">
      <label for="length">Tamanho do processo (MB)</label>
      <input type="number" name="length" id="length" class="input-fields" v-model="process.length" />
    </div>
    <button type="button" class="confirm-btn" @click="submitFirst()">First Fit</button>
    <button type="button" class="confirm-btn" @click="submitNext()">Next Fit</button>
    <button type="button" class="confirm-btn" @click="submitBest()">Best Fit</button>
    <button type="button" class="confirm-btn" @click="submitWorst()">Worst Fit</button>
    <div class="return-btn">
      <router-link to="/">Retornar</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      process: {}
    };
  },
  methods: {
    submitFirst() {
      for (let i = 0; i < this.memory.length; i++) {
        if (this.memory[i].length > this.process.length && this.memory[i].name == "Livre") {
          this.memory[i].length -= this.process.length;
          for (let j = this.memory.length - 1; j >= i; j--) {
            this.memory[j + 1] = this.memory[j];
            this.memory[j + 1].index = j + 1;
          }
          this.process.index = i;
          this.memory[i] = this.process;
          alert("alocação de processo realizada com sucesso!")
          this.$router.push("/")
          return
        }
        if (this.memory[i].length === this.process.length && this.memory[i].name == "Livre") {
          this.memory[i] = this.process;
          return;
        }
      }
      alert("Não há memória o suficiente!");
    },
    submitNext(){
      let i = this.lastPoint + 1
      while (i != this.lastPoint) {
        if(i === this.memory.length){
          i = 0
        }
        if (
          this.memory[i].length > this.process.length &&
          this.memory[i].name == "Livre"
        ) {
          this.memory[i].length -= this.process.length;
          for (let j = this.memory.length - 1; j >= i; j--) {
            this.memory[j + 1] = this.memory[j];
            this.memory[j + 1].index = j + 1;
          }
          this.process.index = i;
          this.memory[i] = this.process;
          console.log(this.process.index)
          this.$store.commit('changePoint', this.process.index)
          return;
        }
        if (
          this.memory[i].length === this.process.length &&
          this.memory[i].name == "Livre"
        ) {
          this.memory[i] = this.process;
          this.$store.commit('changePoint', this.process.index)
          return;
        }
        i++
      }
      alert("Não há memória o suficiente!");
    },
    submitBest() {
      for (let aux = this.process.length; aux < 100; aux++) {
        for (let i = 0; i < this.memory.length; i++) {
          if (this.memory[i].length == aux && this.memory[i].name == "Livre") {
            if (
              this.memory[i].length === this.process.length &&
              this.memory[i].name == "Livre"
            ) {
              this.memory[i] = this.process;
              return;
            }
            this.memory[i].length -= this.process.length;
            for (let j = this.memory.length - 1; j >= i; j--) {
              this.memory[j + 1] = this.memory[j];
              this.memory[j + 1].index = j + 1;
            }
            this.process.index = i;
            this.memory[i] = this.process;
            return;
          }
        }
      }
      alert("Não há memória o suficiente!");
    },
    submitWorst() {
      for (let aux = 100; aux > this.process.length; aux--) {
        for (let i = 0; i < this.memory.length; i++) {
          if (this.memory[i].length == aux && this.memory[i].name == "Livre") {
            if (
              this.memory[i].length === this.process.length &&
              this.memory[i].name == "Livre"
            ) {
              this.memory[i] = this.process;
              return;
            }
            this.memory[i].length -= this.process.length;
            for (let j = this.memory.length - 1; j >= i; j--) {
              this.memory[j + 1] = this.memory[j];
              this.memory[j + 1].index = j + 1;
            }
            this.process.index = i;
            this.memory[i] = this.process;
            return;
          }
        }
      }
      alert("Não há memória o suficiente!");
    }
  },
  computed: {
    memory() {
      return this.$store.state.memory
    },
    lastPoint(){
      return this.$store.state.lastPoint
    }
  }
};
</script>

<style>
.input-group {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.input-fields {
  margin: 0 10px;
}

.confirm-btn {
  height: 30px;
  width: 150px;
  background: #00f260; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0575e6,
    #00f260
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0575e6,
    #00f260
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
  border: none;
  border-radius: 50px;
  margin: 20px 10px;
}
.confirm-btn:hover {
  cursor: pointer;
  height: 30px;
  width: 150px;
  background: #00f260; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #0575e6,
    #00f260
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #0575e6,
    #00f260
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
  border: none;
  border-radius: 50px;
  margin: 20px 10px;
}
</style>