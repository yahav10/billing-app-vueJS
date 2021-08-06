<template>
  <div class="container">
    <h4>Transactions List</h4>
    <el-table :data="transaction" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
      <el-table-column type="expand" class="transaction-details">
        <template #default="{row}">
          <div class="group-details">
            <label>Price: </label>
            <el-input size="small" style="text-align:center" v-model="row.total_price"></el-input>
          </div>
          <div class="group-details">
            <label>Currency: </label>
            <el-input size="small" v-model="row.currency" controls-position="right"></el-input>
          </div>
          <div class="group-details">
            <label>Credit Card Type: </label>
            <el-input size="small" v-model="row.credit_card_type" controls-position="right"></el-input>
          </div>
          <div class="group-details">
            <label>Credit Card Number </label>
            <el-input size="small" v-model="row.credit_card_number" controls-position="right"></el-input>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Date" width="180" prop="date" sortable>
        <template #default="{row}">
          <span>{{ getData(row.createdAt) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Customer Name" width="220" sortable>
        <template #default="{row}">
          <span>{{ row.full_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Credit Card Type" width="220" sortable>
        <template #default="{row}">
          <span>{{ row.credit_card_type }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="Actions">
        <template #default="{row}">
          <el-button size="mini" type="success" @click="updateTransactionModal(row)">Update</el-button>
          <el-button size="mini" type="danger" @click="deleteTransaction(row.id)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import moment from "moment";
import TransactionsDataService from "@/services/TransactionsDataService";
import Transaction from "@/types/Transaction";
import { Notification } from 'element-ui';

@Component
export default class TransactionsList extends Vue {
  private transaction: Transaction[] = [];
  private currentTransaction = {} as Transaction;
  private currentIndex: number = -1;

  retrieveTransactions() {
    TransactionsDataService.getAll()
      .then((response) => {
        this.transaction = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTransactions();
    this.currentTransaction = {} as Transaction;
    this.currentIndex = -1;
  }

  getData(item: any) {
    return moment(item).format('MM/DD/YYYY')
  }

  deleteTransaction(id: any) {
    this.$confirm('This will permanently delete the transaction. Continue?', 'Warning', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }).then(() => {
      this.removeTransaction(id);
      Notification.success("Transaction deleted successfully.")
    }).catch(() => {
      Notification.error("Failed to delete transaction.")
    });
  }

  updateTransactionModal(data: any) {
    this.$confirm('Are you sure you want to update transaction?', 'Update Transaction', {
      confirmButtonText: 'Apply',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }).then(() => {
      this.updateTransaction(data.id, data)
      Notification.success("Transaction updated successfully.")
    }).catch(() => {
      Notification.error("Failed to update transaction.")
    });
  }

  updateTransaction(id: any, data?: object) {
    TransactionsDataService.update(id, data)
      .then(() => {
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  removeTransaction(id: any) {
    TransactionsDataService.delete(id)
      .then(() => {
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  mounted() {
    this.retrieveTransactions();
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.group-details {
  padding-bottom: 15px;
}
.el-input {
  padding-left: 10px;
  width: 180px;
}
.transaction-details {
  padding-bottom: 20px;
  color: green
}
</style>
