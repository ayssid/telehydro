<template>
  <div>
      <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/" exact class="navbar-brand">TeleHydro</router-link>
          
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
              <router-link to="/" tag="li" exact v-if="auth"><a>Home</a></router-link>
              <router-link to="/about" tag="li"  v-if="auth"><a>About</a></router-link>
              <router-link to="/signin" tag="li"  v-if="!auth"><a>Sign in</a></router-link>
              <!--<li><a href="#" v-if="auth">Log Out</a></li>-->
              <li v-if="auth"><p class="navbar-btn"><button class="btn btn-link" @click="logout" style="text-decoration: none;">Log out</button></p></li>
            <!--<li class="active"><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Sign in</a></li>-->
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  },
  computed: {
    auth() {
      //console.log(this.$store.getters.isAuthenticated);
      return this.$store.getters.isAuthenticated;
    }
  }
}
</script>

