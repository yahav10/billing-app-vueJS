<template>
  <div class="container">
    <h4>Customers List</h4>
      <el-table :data="users" style="width: 100%">
        <el-table-column label="First Name" width="140">
          <template #default="{row}">
            <el-input size="small" style="text-align:center" v-model="row.first_name" controls-position="right"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="Last Name" width="140">
          <template #default="{row}">
            <el-input size="small" style="text-align:center" v-model="row.last_name" controls-position="right"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="Email" width="220">
          <template #default="{row}">
            <el-input size="small" style="text-align:center" v-model="row.email" controls-position="right"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="Country" width="160">
          <template #default="{row}">
            <el-input size="small" style="text-align:center" v-model="row.country" controls-position="right"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="Credit Card Type" width="140">
          <template #default="{row}">
            <el-input size="small" style="text-align:center" v-model="row.credit_card_type" controls-position="right"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="Credit Card Number" width="200">
          <template #default="{row}">
            <el-input size="small" style="text-align:center" v-model="row.credit_card_number" controls-position="right"></el-input>
          </template>
        </el-table-column>
        <el-table-column
            label="Actions" style="margin-left: 20px" width="180">
          <template #default="{row}">
            <el-button size="mini" type="success" @click="updateCustomersModal(row)">Update</el-button>
            <el-button size="mini" type="danger" @click="deleteCustomer(row.id)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from "vue-property-decorator";
import User from "@/types/User";
import CustomersDataService from "@/services/CustomersDataService";

@Component
export default class CustomersList extends Vue {
  private users: User[] = [];
  private currentCustomer = {} as User;
  private currentIndex: number = -1;

  retrieveCustomers() {
    CustomersDataService.getAll()
      .then((response) => {
        this.users = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveCustomers();
    this.currentCustomer = {} as User;
    this.currentIndex = -1;
  }

  deleteCustomer(id: any) {
    this.$confirm('This will permanently delete the user. Continue?', 'Warning', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }).then(() => {
      this.removeCustomer(id);
      this.$message({
        type: 'success',
        message: 'Delete completed'
      });
    }).catch(() => {
      this.$message({
        type: 'info',
        message: 'Delete canceled'
      });
    });
  }

  updateCustomersModal(data: any) {
    this.$confirm('Are you sure you want to update customer details?', 'Update Customer', {
      confirmButtonText: 'Apply',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }).then(() => {
      this.updateCustomer(data.id, data)
      this.$message({
        type: 'success',
        message: 'Update customer completed'
      });
    }).catch(() => {
      this.$message({
        type: 'info',
        message: 'Update canceled'
      });
    });
  }

  updateCustomer(id: any, data?: object) {
    console.log("DATA: ", data)
    CustomersDataService.update(id, data)
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
  }

  removeCustomer(id: any) {
    CustomersDataService.delete(id)
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
  }

  mounted() {
    this.retrieveCustomers();
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
