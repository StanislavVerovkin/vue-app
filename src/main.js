import Vue from 'vue';
import App from './App';
import store from './store';

import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

import router from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {App},
    template: '<App/>',
    router,
    store
});
