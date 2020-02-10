import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Admin from './vue/admin/admin.vue'
import Homepage from './vue/home.vue'
import ATG from './vue/ATG.vue'
import IBI from './vue/IBI.vue'
import SignUp from './vue/signUp.vue'
import Failed from './vue/failedToLogin.vue'
import DownloadPage from './vue/downloadPage.vue'
import OrderExcelGenerate from './vue/admin/orderExcelGenerate.vue'
import ItemList from './vue/itemList.vue'
import AowDownloadPage from './vue/AowDownloadPage.vue'
import InvoiceDownloadPage from './vue/InvoiceDownloadPage.vue'
import AdminAowList from './vue/admin/adminAowList.vue'
import AdminInvoiceList from './vue/admin/AdminInvoiceList'
import InvoiceGenerate from './vue/invoiceGenerater.vue'
import ATGAowList from './vue/atgAowList.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/admin', component: Admin},
  { path: '/', component: Homepage},
  { path: '/ATG', component: ATG},
  { path: '/IBI', component: IBI},
  { path: '/failed-to-login', component: Failed},
  { path: '/download-page', component: DownloadPage},
  { path: '/download-page-aow', component: AowDownloadPage},
  { path: '/download-page-invoice', component: InvoiceDownloadPage}
];

Vue.component('signUp', SignUp);
Vue.component('orderExcelGenerate', OrderExcelGenerate);
Vue.component('itemList', ItemList);
Vue.component('aowlist', AdminAowList);
Vue.component('invoicelist', AdminInvoiceList);
Vue.component('invoiceGenerate', InvoiceGenerate);
Vue.component('atgAowList', ATGAowList);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
