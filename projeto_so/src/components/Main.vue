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
          <router-link to="memoryState"><li>Estado Atual da Memória</li></router-link>
          <router-link to="compactMemory"><li>Compactar Memória</li></router-link>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
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
</style>
