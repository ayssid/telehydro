<template>
  <div>
    <app-header></app-header>

    <div class="container">
      <div class="starter-template">
        <router-view></router-view>
      </div>
    </div>
  </div>

  
</template>


<script>
  import Header from './components/Header.vue'
  export default {
    name: 'app',
    components: {
      'app-header': Header
    }
  }
</script>

<style>
body {
  padding-top: 50px;
}
.starter-template {
  padding: 40px 15px;
  text-align: center;
}
</style>
