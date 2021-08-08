<template>
  <div class="container">
    <h2>Add Customer</h2>
    <div class="form">
      <div class="group">
        <div class="form-input-label">
          <label class="form-label">First Name:</label>
          <el-input
              placeholder="First Name"
              v-model="user.first_name"
              name="first_name"
              clearable>
          </el-input>
        </div>
        <div class="form-input-label">
          <label class="form-label">Last Name:</label>
          <el-input
              placeholder="Last Name"
              v-model="user.last_name"
              name="last_name"
              clearable>
          </el-input>
        </div>
        <div class="form-input-label">
          <label class="form-label">Email Address:</label>
          <el-input
              placeholder="Email Address"
              v-model="user.email"
              name="email"
              clearable>
          </el-input>
        </div>
      </div>
      <div class="group">
        <div class="form-input-label">
          <label class="form-label">Gender:</label>
          <el-input
              placeholder="Gender"
              v-model="user.gender"
              name="gender"
              clearable>
          </el-input>
        </div>
        <div class="form-input-label">
          <label class="form-label">Country:</label>
          <el-input
              placeholder="Country"
              v-model="user.country"
              name="country"
              clearable>
          </el-input>
        </div>
        <div class="form-input-label">
          <label class="form-label">City:</label>
          <el-input
              placeholder="City"
              v-model="user.city"
              name="city"
              clearable>
          </el-input>
        </div>
      </div>
      <div class="group">
        <div class="form-input-label">
          <label class="form-label">Street:</label>
          <el-input
              placeholder="Street"
              v-model="user.street"
              name="street"
              clearable>
          </el-input>
        </div>
        <div class="form-input-label">
          <label class="form-label">Phone:</label>
          <el-input
              placeholder="Phone"
              v-model="user.phone"
              name="phone"
              clearable>
          </el-input>
        </div>
        <div class="form-input-label">
          <label class="form-label">Currency:</label>
          <el-input
              placeholder="Currency"
              v-model="user.currency"
              name="city"
              clearable>
          </el-input>
        </div>
      </div>
      <div class="group">
        <div class="form-input-label">
          <label class="form-label">Credit Card:</label>
          <el-input
              placeholder="Credit Card Type"
              v-model="user.credit_card_type"
              name="credit_card_type"
              clearable>
          </el-input>
        </div>
        <div class="form-input-label">
          <label class="form-label">Credit Card Number:</label>
          <el-input
              placeholder="Credit Card Number"
              v-model="user.credit_card_number"
              name="credit_card_number"
              clearable>
          </el-input>
        </div>
      </div>
      <div class="group">
        <el-button @click="saveCustomer" type="success">Submit</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import User from "@/types/User";
import CustomersDataService from "@/services/CustomersDataService";
import {Notification} from "element-ui";

@Component
export default class AddCustomer extends Vue {
  private user: User = {
    id: null,
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    country: '',
    city: '',
    street: '',
    phone: 0,
    currency: '',
    credit_card_type: '',
    credit_card_number: 0
  };

  saveCustomer() {
    let data = {
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      email: this.user.email,
      gender: this.user.gender,
      country: this.user.country,
      city: this.user.city,
      street: this.user.street,
      phone: this.user.phone,
      currency: this.user.currency,
      credit_card_type: this.user.credit_card_type,
      credit_card_number: this.user.credit_card_number,
    };

    CustomersDataService.create(data)
      .then((response) => {
        this.user.id = response.data.id;
        Notification.success("Transaction created successfully")
        this.user = {} as User;
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
</script>

<style scoped>

.container {
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
