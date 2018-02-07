import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueMqtt from 'vue-mqtt'

Vue.config.productionTip = false

Vue.use(VueMqtt, 'ws://10.10.180.208:3000', {transports: ['websockets']});
//Vue.use(VueMqtt, 'ws://iot.eclipse.org:80/ws', {clientId: 'WebClient-' + parseInt(Math.random() * 100000)})

router.beforeEach((to, from, next) => {
 // console.log('before each')
  store.dispatch('setAuth');
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
