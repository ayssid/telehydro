import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth) {
    if(store.getters.isAuthenticated) {
      next();
    } else {
      next('/signin');
    }
  } else if(store.getters.isAuthenticated && to.path == '/signin') {
    next('/');
  } else {
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
