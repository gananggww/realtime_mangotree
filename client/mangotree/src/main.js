// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import Firebase from 'firebase'

Vue.use(VueFire)

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyDiRVvtRaGvuBQ4TE6Dv7rkOZNzB5MD4fM',
  authDomain: 'firebash-pertama.firebaseapp.com',
  databaseURL: 'https://firebash-pertama.firebaseio.com',
  projectId: 'firebash-pertama',
  storageBucket: 'firebash-pertama.appspot.com',
  messagingSenderId: '391415648090'
}
Firebase.initializeApp(config)

Vue.prototype.$db = Firebase.database()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
