<template>
  <div>
    <router-link to="/"><img id="logo" :src="logo" alt="logo"/></router-link>
      <div>
        <select v-model="choice" style="width:120px">
          <option value="orderNo">Order#</option>
          <option value="BSN">BSN</option>
          <option value="team">Team</option>
          <option value="address">Address</option>
          <option value="fiberLength">Fiber Length</option>
          <optin value="spliter">Splitter></optin> 
        </select>
      <input type="text" v-model="search"/>
      </div>
      <table>
        <tr>
          <th width=8.2%>Order No.</th>
          <th width=8.2%>
            <td class="title">BSN</td>
            <td class="sort" v-show="ascending" @click="sortIn()">˄</td>
            <td class="sort" v-show="!ascending" @click="sortIn()">˅ </td>
          </th>
          <th width=8.2%>Team</th>
          <th width=8.2%>Address</th>
          <th width=8.2%>Fibre length</th>
          <th width=8.2%>Splitter</th>
          <th width=8.2%>Plate ID Cable</th>
          <th width=8.2%>SC Coupler 1-Port</th>
          <th width=8.2%>SC Coupler 6-Port</th>
          <th width=8.2%>AVC Tie Mount</th>
          <th width=8.2%></th>
        </tr>
      </table>
      <form method="POST" enctype="multipart/form-data" action="/admin-generate" width=100%>
      <div class="needScroll" width=100%>
      <div v-for="info in filteredData">
        <table class="infoTable" width=100%>
        <tr>
          <td width=8.2%>{{ info.orderNo}}</td>
          <td width=8.2%>{{ info.BSN }}</td>
          <td width=8.2%>{{ info.team }}</td>
          <td width=8.2%>{{ info.address }}</td>
          <td width=8.2%>{{ info.fiberLength }}</td>
          <td width=8.2%>{{ info.splitter }}</td>
          <td width=8.2%>{{ info.plateIDCable }}</td>
          <td width=8.2%>{{ info.SCCoupler1Port }}</td>
          <td width=8.2%>{{ info.SCCoupler6Port }}</td>
          <td width=8.2%>{{ info.AVCTieMount }}</td>
          <td width=7%><input type="checkbox" name="BsnNum" :value="info.BSN"></td>
        </tr>
        </table>
      </div>
      </div>
      <input type="submit" value="Submit">
      </form>


  </div>
</template>

<script>
import axios from "axios";
export default {
  data () {
    return {
      logo: './img/logo.png',
      infos: [],
      digit: Number,
      ascending: true,
      search: "",
      choice: "orderNo",
      sort: []
    }
  },
  mounted() {
      var self = this;
      axios.get('/info')
        .then((res) => {
            self.infos = res.data;
            self.digit = Object.keys(res.data).length;
        })
  },
  methods: {
    sortIn(){

      this.ascending = !this.ascending;
    }
  },
  computed: {
    filteredData: function() {
      return this.infos.filter((info) => {
        if (this.choice == "orderNo") {
          this.sort = info.orderNo.toString().match(this.search);

          return this.sort;
        }
        else if (this.choice == "BSN") {
          this.sort = info.BSN.toString().match(this.search);
          return this.sort;
        }
        else if (this.choice == "team") {
          this.sort = info.team.match(this.search);
          return this.sort;
        }
        else if (this.choice == "address") {
          this.sort =  info.address.match(this.search);
          return this.sort;
        }
        else if (this.choice == "splitter") {
          this.sort =  info.splitter.match(this.search);
          return this.sort;
        }
        else if (this.choice == "fiberLength") {
          this.sort =  info.fiberLength.toString().match(this.search);
          return this.sort;
        }
      });
    }
  },
  watch: {
    ascending: function() {
      var infosCopy = this.filteredData;
      for (var i = 0; i < this.digit; i++) {
        for (var j = i; j < this.digit; j++) {
          if (infosCopy[i].BSN < infosCopy[j].BSN) {
            var temp = infosCopy[i];
            infosCopy[i] = infosCopy[j];
            infosCopy[j] = temp;
          }
        }
      }
      if (this.ascending) {
      this.filteredData = infosCopy;
      }
      else {
      this.filteredData = infosCopy.reverse();
      }
    }
  }
}
</script>

<style>
.AowTable td, th {
    width: 100px;
  }
@import url('../../styleS.css');
</style>