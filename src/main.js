import Vue from 'vue'
// importa la librería que se bajó con npm.
// Es una libería porque no tiene punto o barra o no tiene un path relativo
// Se está haciendo referencia a una dependencia de npm

import App from './App.vue'
import '@/assets/css/tailwind.css'
import router from '@/router'
import { dollarFilter } from '@/filters'
import { percentFilter } from '@/filters'
import Chart from 'chart.js'
import Chartick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'

// el @ es un pequeño truco que nos da webpack y vue para hacer referencia de manera relativa al directorio src. Es decir, @ representa el directorio SRC. Lo bueno de esto es que si vamos a utilizar este archivo en otro archivo no ncesitamos carmbiar la rura porque no es relativa.
Vue.use(VueSpinners)
Vue.use(Chartick.use(Chart))
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// La función .$mount("#app") tiene el mismo propósito que el elemento <el>
// la función render es una forma de reemplazar la instancia  o el seteo de la aplicación dentro de nuestro componente
