<template>
    <div id="resize">
        <h1>Done! Uploaded sucessfully</h1>
        <table id="infoTable">
            <tr>
                <th>File Name</th>
                <th>BSN No.</th>
                <th>AOW No.</th>
                <th>Amount</th>
            </tr>
            <tr>
                <td>{{ info[digit].fileName }}</td>
                <td>{{ info[digit].BSN }}</td>
                <td>{{ info[digit].AOWNo }}</td>
                <td>{{ info[digit].amount }}</td>
            </tr>
        </table>
        <table>
          <tr>
            <td>
              <form id = "pdfForm" method = "POST" enctype = "multipart/form-data" action="/download-pdf">
				        <input type = "text" name = "pdfName" id = "pdfName" v-show="false" :value="info[digit].fileName">
                <input type = "text" name = "docType" v-show="false" value="AowPdf">
                <input type = "text" name = "targetTeam" v-show="false" :value="info[digit].team">
				        <input type = "submit" value = "Download Pdf">
			        </form>
            </td>
          </tr>
        </table>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data () {
    return {
        user: "",
        info: [],
        digit: Number
    }
  },
  mounted() {
      var self = this;
      axios.get('/download-aow')
        .then((res) => {
            self.digit = Object.keys(res.data).length - 1;
            self.info = res.data;
        })
  },
  methods: {
    wa() {
      alert(this.info[this.digit].fileName);
      alert(this.info[0].BSN);
      alert(this.info[0].AOWNo);
      alert(this.digit);
      var wae = new Date();
      
    }
  }
}
</script>

<style>
@import url('../styleS.css');
</style>