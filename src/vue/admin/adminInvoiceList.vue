<template>
    <div>
        <router-link to="/"><img id="logo" :src="logo" alt="logo"/></router-link>
        <table width=100%>
            <tr>
                <th width=14.28%>File Name</th>
                <th width=14.28%>Invoice#</th>
                <th width=14.28%>Amount</th>
                <th width=14.28%>Team</th>
                <th width=14.28%>User Name</th>
                <th width=14.28%></th>
                <th width=14.28%></th>
            </tr>
        </table>
        <div v-for="invoice in invoices" width=100%>
            <table width=100%>
                <tr>
                    <td width=14.28%>{{ invoice.fileName }}</td>
                    <td width=14.28%>{{ invoice.invoiceNum }}</td>
                    <td width=14.28%>{{ invoice.amount }}</td>
                    <td width=14.28%>{{ invoice.team }}</td>
                    <td width=14.28%>{{ invoice.user }}</td>
                    <td width=14.28%>
                        <form id = "exelForm" method = "POST" enctype = "multipart/form-data" action="/download-excel">
				            <input type = "text" name = "excelName" id = "excelName" v-show="false" :value="invoice.fileName">
                            <input type = "text" name = "docType" v-show="false" value="Invoice">
                            <input type = "text" name = "targetTeam" v-show="false" :value="invoice.team">
				            <input type = "submit" value = "Download Excel">
			            </form>
                    </td>
                    <td width=14.28%>
                        <form id = "pdfForm" method = "POST" enctype = "multipart/form-data" action="/download-pdf">
				            <input type = "text" name = "pdfName" id = "pdfName" v-show="false" :value="invoice.fileName">
                            <input type = "text" name = "docType" v-show="false" value="Invoice">
                            <input type = "text" name = "targetTeam" v-show="false" :value="invoice.team">
				            <input type = "submit" value = "Download Pdf">
			            </form>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data () {
    return {
        logo: './img/logo.png',
        invoices: [],
    }
  },
  mounted() {
      var self = this;
      axios.get('/download-invoice')
        .then((res) => {
            self.invoices = res.data;
        })
  }
}
</script>

<style>
@import url('../../styleS.css');
 
</style>
