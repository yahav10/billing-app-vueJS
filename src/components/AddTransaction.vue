<template>
  <div class="container">
    <h2>Add Transaction</h2>
    <div class="form">
      <div class="group">
        <div class="form-input-label">
          <label class="form-label">Total Price:</label>
          <el-input
              placeholder="Total Price"
              v-model="transaction.total_price"
              name="total_price"
              clearable
              validate-event>
          </el-input>
        </div>
        <div class="form-input-label">
          <label class="form-label">Currency:</label>
          <el-input
              placeholder="Currency"
              v-model="transaction.currency"
              name="currency"
              clearable>
          </el-input>
        </div>
        <div class="form-input-label">
          <label class="form-label">Email Address:</label>
          <el-input
              placeholder="Email Address"
              v-model="transaction.email"
              name="email"
              clearable>
          </el-input>
        </div>
      </div>
      <div class="group">
        <div class="form-input-label">
          <label class="form-label">Credit Card Type:</label>
          <el-input
              placeholder="Credit Card Type"
              v-model="transaction.credit_card_type"
              name="credit_card_type"
              clearable>
          </el-input>
        </div>
        <div class="form-input-label">
          <label class="form-label">Credit Card Number:</label>
          <el-input
              placeholder="Credit Card Number"
              v-model="transaction.credit_card_number"
              name="credit_card_number"
              clearable>
          </el-input>
        </div>
      </div>
      <div class="group">
        <el-button @click="saveTransaction" type="success">Submit</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TransactionsDataService from "@/services/TransactionsDataService";
import Transaction from "@/types/Transaction";
import { Notification } from 'element-ui';

@Component
export default class AddTransaction extends Vue {
  private transaction: Transaction = {
    id: null,
    total_price:'',
    currency: '',
    credit_card_type: '',
    credit_card_number: '',
    email: '',
    createdAt: '',
    updatedAt: '',
  };

  private submitted: boolean = false;

  saveTransaction() {
    let data = {
      total_price: this.transaction.total_price,
      currency: this.transaction.currency,
      credit_card_type: this.transaction.credit_card_type,
      credit_card_number: this.transaction.credit_card_number,
      email: this.transaction.email,
    };

    TransactionsDataService.create(data)
      .then((response) => {
        this.transaction.id = response.data.id;
        Notification.success("Transaction created successfully")
        this.transaction = {} as Transaction;
      })
      .catch((e) => {
        console.info(e)
        Notification.error("User isn't exist, please add this user.")
      });
  }
}
</script>

<style scoped>
.container {
  width: 1000px;
  display: flex;
  flex-direction: column;
}
h2 {
  margin: 10px 0 10px 0;
}

.form-input-label {
  margin: 0 20px 10px 0;
}

.form-label {
  margin: 0 20px 0 0;
}

.group {
  display: flex;
  flex-direction: row;
  margin: 10px 0 20px 0;
}
</style>
