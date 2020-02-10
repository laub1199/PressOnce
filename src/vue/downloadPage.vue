<template>
    <div id="resize">
        <h1>Done! Uploaded sucessfully</h1>
        <table id="infoTable">
            <tr>
                <th>File Name</th>
                <th>By</th>
            </tr>
            <tr>
                <td>{{ info[digit].FileName}}</td>
                <td>{{ info[digit].UserName }}</td>
            </tr>
        </table>
        <table>
          <tr>
            <td>
              <form id = "exelForm" method = "POST" enctype = "multipart/form-data" action="/download-excel">
				        <input type = "text" name = "excelName" id = "excelName" v-show="false" :value="info[digit].FileName">
				        <input type = "submit" value = "Download Excel">
			        </form>
            </td>
            <td>
              <form id = "pdfForm" method = "POST" enctype = "multipart/form-data" action="/download-pdf">
				        <input type = "text" name = "pdfName" id = "pdfName" v-show="false" :value="info[digit].FileName">
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
      axios.get('/download-info')
        .then((res) => {
            self.digit = Object.keys(res.data).length - 1;
            self.info = res.data;
        })
  }
}
</script>
<style>
@import url('../styleS.css');
</style>