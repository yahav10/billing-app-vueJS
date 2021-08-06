<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="#" class="navbar-brand">Billing System</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/transactions" class="nav-link">Transactions</a>
        </li>
        <li class="nav-item">
          <a href="/customers" class="nav-link">Customers</a>
        </li>
        <li class="nav-item">
          <a href="/add-customer" class="nav-link">Add Customer</a>
        </li>
        <li class="nav-item">
          <a href="/add-transaction" class="nav-link">Add Transaction</a>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style scoped>

.navbar-brand {
  padding-left: 10px;
}
</style>