import Vue from 'vue';
import App from './App.vue';
<% if (options.vuex) { %>import store from './store';<% } %>
<% if (options.router) { %>import router from './router';<% } %>
Vue.config.productionTip = false;

new Vue({
    <% if (options.vuex) { %>store,<% } %>
    <% if (options.router) { %>router,<% } %>
    render: (h) => h(App),
}).$mount('#app');
