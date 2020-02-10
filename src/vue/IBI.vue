<template>
  <div id="resize">
    <router-link to="/"><img id="logo" :src="logo" alt="logo"/></router-link>
    <h1>Hi there, this is IBI's page</h1>
    <table width=100%>
      <tr>
        <th width=50% class="tabs" id="tab1" @click="chagePageToAowEditor()">Aow Edit</th>
        <th width=50% class="tabs" id="tab2" @click="chagePageToInvoiceEditor()">Invoice Edit</th>
      </tr>
    </table>
    <div v-if="showPage === 'AowEdit'">
      <form id = "AOWForm" method = "POST" enctype = "multipart/form-data" action="/aow-upload" @submit="checkAmount">
				<div class="inputResize">
        <div id="block1">
        BSN: <input type = "text" name = "BSN" v-model="BsnNum">
        <span style="color:red;fontSize:18px;">{{ bsnValidation }}</span>
        <input type="text" name="orderNo" :value="targetOrderNum" v-show="false">
        <br>
				AOW No: <input type = "text" name = "AOW" :value="AOWNo" readonly="readonly">
        <br>
        AOW Date: <input type = "date" name = "Date" v-model="AowDate">
        <br>
        ATTN Mr/Mrs: <input type = "text" name = "Name">
        <br>
        <input type="text" name = "comName">
        </div>
        <div id="block2">
        Tel Num: <input type="number" name = "TelNum">
        <br>
        Customer Name: <input type="text" name = "CusName">
        <br>
        Customer Address: <input type="text" name = "CusAddress">
        </div>
        </div>
        <itemList style="display:block;clear: both;" @passedTotal = "receivedTotal = $event"></itemList>
				<input type = "submit" value = "Generate">
			</form>
      </div>
      <invoiceGenerate v-if="showPage === 'InvoiceEdit'"></invoiceGenerate>
    <div id = "ErrortMsg" v-show = "showMsg" @click.self="eventBtn">    
      <div id = "ErrorMsgBox">
			  <div id = "closeBtn" @click="eventBtn">&times;</div>
			  <div id = "msgContent">
          <p>ERROR, your team don't have such order</p>
			  </div>
		  </div>
	  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data () {
    return {
      logo: './img/logo.png',
      BsnNum: "",
      AowDate: "",
      showMsg: false,
      receivedTotal: Number,
      orders: [],
      bsnValid: Boolean,
      showPage: "AowEdit"
    }
  },
  mounted() {
    var self = this;
    var newDate = new Date();
      self.AowDate = newDate;
      axios.get('/order-info')
        .then((res) => {
            self.orders = res.data;
            
        })
  },
  computed: {
    targetOrderNum: function() {
      var temp;
      for(var i = 0; i < this.orders.length; i++) {
        if(this.orders[i].BSN.toString() == this.BsnNum) {
          temp = this.orders[i].orderNo.toString();
          return temp;
        }
      }
    },
    AOWNo: function() {
      var newDate = new Date(this.AowDate);
      var month = newDate.getMonth();
      var day = newDate.getDate();
      var result;
      switch(month) {
        case 0: result = "JAN";
                break;
        case 1: result = "FEB";
                break;
        case 2: result = "MAR";
                break;
        case 3: result = "APR";
                break;
        case 4: result = "MAY";
                break;
        case 5: result = "JUN";
                break;
        case 6: result = "JUL";
                break;
        case 7: result = "AUG";
                break;
        case 8: result = "SEP";
                break;
        case 9: result = "OCT";
                break;
        case 10: result = "NOV";
                break;
        case 11: result = "DEC";
                break;
      }
      if (day < 10) 
        result += "0";
      result += day.toString();
      result += "IBI";
      result += this.BsnNum.toString();
      return result;
    },
    bsnValidation: function() {
      var teamOrders = this.orders;

      for (var i = 0; i < teamOrders.length; i++) {
        if (teamOrders[i].team == "IBI"){
          if (this.BsnNum == teamOrders[i].BSN.toString()) {
            this.bsnValid = true;
            return " ";
          }
        }
      }
      this.bsnValid = false;
      return "Error, your team don't have such order";
    }
  },
  methods: {
		eventBtn() {
			this.showMsg = !this.showMsg;
		},
    checkAmount: function(e) {
      if (this.bsnValid == true) {
        return true;
      }
			this.showMsg = !this.showMsg;
      e.preventDefault();
    },
    chagePageToAowEditor() {
      this.showPage = "AowEdit";
      document.getElementById("tab1").style.backgroundColor = "rgb(190, 190, 190)";
      document.getElementById("tab2").style.backgroundColor = "rgba(124, 179, 216, 0.74)";
    },
    chagePageToInvoiceEditor() {
      this.showPage = "InvoiceEdit";
      document.getElementById("tab2").style.backgroundColor = "rgb(190, 190, 190)";
      document.getElementById("tab1").style.backgroundColor = "rgba(124, 179, 216, 0.74)";
    }
  }
}
</script>

<style>
@import url('../styleS.css');
</style>