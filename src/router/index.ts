import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    alias: "/transactions",
    name: "transactions",
    component: () => import("../components/TransactionsList.vue")
  },
  {
    path: "/customers",
    alias: "/customers",
    name: "customers",
    component: () => import("../components/CustomersList.vue")
  },
  {
    path: "/add-customer",
    name: "add-customer",
    component: () => import("../components/AddCustomer.vue")
  },
  {
    path: "/add-transaction",
    name: "add-transaction",
    component: () => import("../components/AddTransaction.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
