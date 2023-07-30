import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '../node_modules/@csstools/normalize.css'
import components from '@/components';

const app = createApp(App);

components.forEach(component => {
    app.component(component.compName, component);
});

app
    .use(store)
    .use(router)
    .mount('#app')
