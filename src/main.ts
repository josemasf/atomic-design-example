import "primevue/resources/themes/lara-dark-teal/theme.css";     
import "primevue/resources/primevue.min.css";
import "/node_modules/primeflex/primeflex.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';

const app = createApp(App)

app.use(router)
app.use(PrimeVue);

app.mount('#app')
