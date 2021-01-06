import { createApp, ref } from 'vue'
// Import the HelloDjango component
import HelloDjango from './components/HelloDjango'

// Create an instance of the Vue application
const app = createApp({
  // Html element where the content will be rendered
  el: '#app',
  // Change the delimiters of the variables
  // avoiding conflict with those of Django
  delimiters: ['{$', '$}'],
  // Activate the component within the app
  components : {
    HelloDjango
  },
  // Create reactive msg variable using ref
  data () {
    return {
      msg: ref('Componente de VueJS 3')
    }
  },
})
// Mount the app in the #app div of the index.html template
app.mount('#app')
