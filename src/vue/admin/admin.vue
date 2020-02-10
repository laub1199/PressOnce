<template>
  <div id="resize">
    <h1>Hi there, this is admin's page</h1>
    <table>
      <tr>
        <th class="tabs" id="tab1" @click="chagePageToOrder()">Order</th>
        <th class="tabs" id="tab2" @click="chagePageToSignUp()">Sign Up</th>
        <th class="tabs" id="tab3" @click="chagePageToAOWList()">AOW Record</th>
        <th class="tabs" id="tab4" @click="chagePageToInvoiceList()">Invoice Record</th>
      </tr>
    </table>
    <orderExcelGenerate v-if="showPage === 'Order'"></orderExcelGenerate>
    <signUp v-else-if="showPage === 'SignUp'" style="margin-top: 150px;"></signUp>
    <aowlist v-else-if="showPage === 'AowList'"></aowlist>
    <invoicelist v-else-if="showPage === 'InvoiceList'"></invoicelist>
  </div>
</template>

<script>
export default {
  data () {
    return {
    showPage: "Order"
    }
},
  methods: {
    chagePageToOrder() {
      this.showPage = "Order";
      document.getElementById("tab1").style.backgroundColor = "rgb(190, 190, 190)";
      document.getElementById("tab2").style.backgroundColor = "rgba(124, 179, 216, 0.74)";
      document.getElementById("tab3").style.backgroundColor = "rgba(124, 179, 216, 0.74)";
      document.getElementById("tab4").style.backgroundColor = "rgba(124, 179, 216, 0.74)";
    },
    chagePageToSignUp() {
      this.showPage = "SignUp"
      document.getElementById("tab2").style.backgroundColor = "rgb(190, 190, 190)";
      document.getElementById("tab1").style.backgroundColor = "rgba(124, 179, 216, 0.74)";
      document.getElementById("tab3").style.backgroundColor = "rgba(124, 179, 216, 0.74)";
      document.getElementById("tab4").style.backgroundColor = "rgba(124, 179, 216, 0.74)";
    },
    chagePageToAOWList() {
      this.showPage = "AowList"
      document.getElementById("tab3").style.backgroundColor = "rgb(190, 190, 190)";
      document.getElementById("tab1").style.backgroundColor = "rgba(124, 179, 216, 0.74)";
      document.getElementById("tab2").style.backgroundColor = "rgba(124, 179, 216, 0.74)";
      document.getElementById("tab4").style.backgroundColor = "rgba(124, 179, 216, 0.74)";
    },
    chagePageToInvoiceList() {
      this.showPage = "InvoiceList"
      document.getElementById("tab4").style.backgroundColor = "rgb(190, 190, 190)";
      document.getElementById("tab1").style.backgroundColor = "rgba(124, 179, 216, 0.74)";
      document.getElementById("tab2").style.backgroundColor = "rgba(124, 179, 216, 0.74)";
      document.getElementById("tab3").style.backgroundColor = "rgba(124, 179, 216, 0.74)";
    }
  }
}
</script>

<style>
#resize {
    text-align: center;
  }
  .tabs:hover {
    background-color: rgb(190, 190, 190);
  }
@import url('../../styleS.css');
</style>