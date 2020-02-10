<template>
    <div id="resize">
        <form method="POST" enctype="multipart/form-data" action="/generate-invoice"  @submit="checkSubmitValidation">
          <div class="inputResize block">
            Invoice No.: <input type="text" name="invoiceNum">
            <br>
            ATTN Name: <input type="text" name="attnName">
            <br>
            Tel Num: <input type="number" name="telNum">
            <br>
            Invoice Date: <input type="date" name="invDate">
            <br>
            Work order date remark: <input type="text" name="remark">
            <br>
            Project: <input type="text" name="projName">
          </div>
          
          <atgAowList style="display:block;clear: both;" @passedAowTotal = "receivedAowTotal = $event" @passedOrderValid = "receivedOrderValid = $event"></atgAowList>
          
          <input type="submit" value="Submit">
        </form>
        
        <div id = "ErrortMsg" v-show = "showMsg" @click.self="this.showMsg = !this.showMsg">    
              <div id = "ErrorMsgBox">
                <div id = "closeBtn" @click="this.showMsg = !this.showMsg">&times;</div>
                <div id = "msgContent">
                      
                </div>
            </div>
	        </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
          showMsg: false,
          receivedAowTotal: Number,
          receivedOrderValid: Boolean
        }
    },
    mounted() {

    },
    methods: {
        seevalid() {
          alert(this.receivedOrderValid);
        },
        checkSubmitValidation: function(e) {
          if (this.receivedAowTotal <= 38000 && this.receivedOrderValid) {
            return true;
          }
          
          if (this.receivedAowTotal > 38000) {
            document.getElementById("msgContent").innerHTML += "ERROR, the total amount exceed the limit of $38000\n";
          }

          if (!this.receivedOrderValid) {
            document.getElementById("msgContent").innerHTML += "ERROR, your invoice included both 811 and 828\n";
          }

			    this.showMsg = !this.showMsg;
          e.preventDefault();
        }
    },
    computed: {
        
    }
}
</script>

<style>
  .inputResize input{
    margin-top: 10px;
    
  }

  .block {
    text-align: center;
    display: block;
    float: left;
    clear: both;
    width: 100%;
  }

</style>