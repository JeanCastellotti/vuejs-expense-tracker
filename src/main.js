import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import BaseButton from './components/BaseButton.vue'
import BaseModal from './components/BaseModal.vue'

const app = createApp(App)

app.component('BaseButton', BaseButton)
app.component('BaseModal', BaseModal)

app.mount('#app')
