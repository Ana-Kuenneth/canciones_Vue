
import { createApp } from 'vue'
import './styles.css'
import App from './App.vue'
import routes from "./routes";
import { createRouter, createWebHashHistory } from "vue-router";


const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

const app = createApp(App);
app.use(router);
app.mount('#app');
