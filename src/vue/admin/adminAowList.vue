<template>
    <div>
        <router-link to="/"><img id="logo" :src="logo" alt="logo"/></router-link>
        <table>
            <tr>
                <th width=12.5% >File Name</th>
                <th width=12.5% >AOW No.</th>
                <th width=12.5% >BSN</th>
                <th width=12.5% >Amount</th>
                <th width=12.5% >Team</th>
                <th width=12.5% >User Name</th>
                <th width=12.5% ></th>
                <th width=12.5% ></th>
            </tr>
        </table>
        <div v-for="AOW in AOWs">
            <table>
                <tr>
                    <td width=12.5% >{{ AOW.fileName }}</td>
                    <td width=12.5% >{{ AOW.AOWNo }}</td>
                    <td width=12.5% >{{ AOW.BSN }}</td>
                    <td width=12.5% >{{ AOW.amount }}</td>
                    <td width=12.5% >{{ AOW.team }}</td>
                    <td width=12.5% >{{ AOW.user }}</td>
                    <td width=12.5% >
                        <form id = "exelForm" method = "POST" enctype = "multipart/form-data" action="/download-excel" width=100%>
				            <input type = "text" name = "excelName" id = "excelName" v-show="false" :value="AOW.fileName">
                            <input type = "text" name = "docType" v-show="false" value="Aow">
                            <input type = "text" name = "targetTeam" v-show="false" :value="AOW.team">
				            <input type = "submit" value = "Download Excel">
			            </form>
                    </td>
                    <td width=12.5% >
                        <form id = "pdfForm" method = "POST" enctype = "multipart/form-data" action="/download-pdf" width=100%>
				            <input type = "text" name = "pdfName" id = "pdfName" v-show="false" :value="AOW.fileName">
                            <input type = "text" name = "docType" v-show="false" value="Aow">
                            <input type = "text" name = "targetTeam" v-show="false" :value="AOW.team">
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
        AOWs: [],
    }
  },
  mounted() {
      var self = this;
      axios.get('/download-aow')
        .then((res) => {
            self.AOWs = res.data;
        })
  }
}
</script>

<style>
@import url('../../styleS.css');
     
</style>
