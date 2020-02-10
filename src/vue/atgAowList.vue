<template>
    <div width=100%>
        <table width=100% >
            <tr>
                <th width=16.66% >Aow Number</th>
                <th width=16.66% >Order#</th>
                <th width=16.66% >BSN#</th>
                <th width=16.66% >Team</th>
                <th width=16.66% >User</th>
                <th width=16.66% >Amount</th>
            </tr>
        </table>
        <p  @click="numOfAows += 1" class="Container"><center>Add</center></p>
        <div id="aowContainer" width=100%>
            <table width=100%>
                <tr>
                    <td width=16.66% >
                        <select v-model="targetAow[0]" name="aowNum">
                            <option value=" " disabled>Select One</option>
                            <option v-for="Aow in Aows">{{ Aow.AOWNo }}</option>
                        </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData1[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData1[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData1[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData1[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData1[0].amount"></td>
                </tr>
                <tr v-if="numOfAows > 1">
                    <td width=16.66% >
                    <select v-model="targetAow[1]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData2[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData2[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData2[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData2[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData2[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 2">
                    <td width=16.66% >
                    <select v-model="targetAow[2]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData3[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData3[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData3[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData3[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData3[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 3">
                    <td width=16.66% >
                    <select v-model="targetAow[3]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData4[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData4[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData4[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData4[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData4[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 4">
                    <td width=16.66% >
                    <select v-model="targetAow[4]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData5[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData5[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData5[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData5[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData5[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 5">
                    <td width=16.66% >
                    <select v-model="targetAow[5]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData6[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData6[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData6[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData6[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData6[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 6">
                    <td width=16.66% >
                    <select v-model="targetAow[6]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData7[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData7[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData7[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData7[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData7[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 7">
                    <td width=16.66% >
                    <select v-model="targetAow[7]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData8[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData8[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData8[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData8[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData8[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 8">
                    <td width=16.66% >
                    <select v-model="targetAow[8]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData9[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData9[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData9[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData9[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData9[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 9">
                    <td width=16.66% >
                    <select v-model="targetAow[9]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData10[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData10[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData10[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData10[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData10[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 10">
                    <td width=16.66% >
                        <select v-model="targetAow[10]" name="aowNum">
                            <option value=" " disabled>Select One</option>
                            <option v-for="Aow in Aows">{{ Aow.AOWNo }}</option>
                        </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData11[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData11[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData11[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData11[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData11[0].amount"></td>
                </tr>
                <tr v-if="numOfAows > 11">
                    <td width=16.66% >
                    <select v-model="targetAow[11]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData12[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData12[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData12[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData12[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData12[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 12">
                    <td width=16.66% >
                    <select v-model="targetAow[12]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData13[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData13[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData13[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData13[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData13[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 13">
                    <td width=16.66% >
                    <select v-model="targetAow[13]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData14[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData14[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData14[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData14[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData14[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 14">
                    <td width=16.66% >
                    <select v-model="targetAow[14]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData15[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData15[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData15[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData15[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData15[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 15">
                    <td width=16.66% >
                    <select v-model="targetAow[15]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData16[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData16[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData16[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData16[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData16[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 16">
                    <td width=16.66% >
                    <select v-model="targetAow[16]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData17[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData17[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData17[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData17[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData17[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 17">
                    <td width=16.66% >
                    <select v-model="targetAow[17]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData18[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData18[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData18[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData18[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData18[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 18">
                    <td width=16.66% >
                    <select v-model="targetAow[18]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData19[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData19[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData19[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData19[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData19[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 19">
                    <td width=16.66% >
                    <select v-model="targetAow[19]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData20[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData20[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData20[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData20[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData20[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 20">
                    <td width=16.66% >
                        <select v-model="targetAow[20]" name="aowNum">
                            <option value=" " disabled>Select One</option>
                            <option v-for="Aow in Aows">{{ Aow.AOWNo }}</option>
                        </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData21[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData21[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData21[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData21[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData21[0].amount"></td>
                </tr>
                <tr v-if="numOfAows > 21">
                    <td width=16.66% >
                    <select v-model="targetAow[21]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData22[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData22[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData22[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData22[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData22[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 22">
                    <td width=16.66% >
                    <select v-model="targetAow[22]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData23[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData23[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData23[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData23[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData23[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 23">
                    <td width=16.66% >
                    <select v-model="targetAow[23]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData24[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData24[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData24[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData24[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData24[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 24">
                    <td width=16.66% >
                    <select v-model="targetAow[24]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData25[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData25[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData25[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData25[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData25[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 25">
                    <td width=16.66% >
                    <select v-model="targetAow[25]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData26[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData26[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData26[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData26[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData26[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 26">
                    <td width=16.66% >
                    <select v-model="targetAow[26]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData27[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData27[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData27[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData27[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData27[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 27">
                    <td width=16.66% >
                    <select v-model="targetAow[27]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData28[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData28[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData28[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData28[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData28[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 28">
                    <td width=16.66% >
                    <select v-model="targetAow[28]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData29[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData29[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData29[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData29[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData29[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 29">
                    <td width=16.66% >
                    <select v-model="targetAow[29]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData30[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData30[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData30[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData30[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData30[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 30">
                    <td width=16.66% >
                        <select v-model="targetAow[30]" name="aowNum">
                            <option value=" " disabled>Select One</option>
                            <option v-for="Aow in Aows">{{ Aow.AOWNo }}</option>
                        </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData31[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData31[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData31[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData31[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData31[0].amount"></td>
                </tr>
                <tr v-if="numOfAows > 31">
                    <td width=16.66% >
                    <select v-model="targetAow[31]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData32[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData32[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData32[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData32[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData32[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 32">
                    <td width=16.66% >
                    <select v-model="targetAow[32]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData33[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData33[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData33[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData33[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData33[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 33">
                    <td width=16.66% >
                    <select v-model="targetAow[33]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData34[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData34[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData34[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData34[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData34[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 34">
                    <td width=16.66% >
                    <select v-model="targetAow[34]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData35[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData35[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData35[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData35[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData35[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 35">
                    <td width=16.66% >
                    <select v-model="targetAow[35]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData36[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData36[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData36[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData36[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData36[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 36">
                    <td width=16.66% >
                    <select v-model="targetAow[36]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData37[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData37[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData37[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData37[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData37[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 37">
                    <td width=16.66% >
                    <select v-model="targetAow[37]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData38[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData38[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData38[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData38[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData38[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 38">
                    <td width=16.66% >
                    <select v-model="targetAow[38]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData39[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData39[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData39[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData39[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData39[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 39">
                    <td width=16.66% >
                    <select v-model="targetAow[39]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData40[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData40[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData40[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData40[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData40[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 40">
                    <td width=16.66% >
                        <select v-model="targetAow[40]" name="aowNum">
                            <option value=" " disabled>Select One</option>
                            <option v-for="Aow in Aows">{{ Aow.AOWNo }}</option>
                        </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData41[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData41[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData41[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData41[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData41[0].amount"></td>
                </tr>
                <tr v-if="numOfAows > 41">
                    <td width=16.66% >
                    <select v-model="targetAow[41]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData42[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData42[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData42[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData42[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData42[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 42">
                    <td width=16.66% >
                    <select v-model="targetAow[42]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData43[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData43[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData43[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData43[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData43[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 43">
                    <td width=16.66% >
                    <select v-model="targetAow[43]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData44[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData44[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData44[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData44[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData44[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 44">
                    <td width=16.66% >
                    <select v-model="targetAow[44]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData45[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData45[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData45[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData45[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData45[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 45">
                    <td width=16.66% >
                    <select v-model="targetAow[45]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData46[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData46[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData46[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData46[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData46[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 46">
                    <td width=16.66% >
                    <select v-model="targetAow[46]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData47[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData47[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData47[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData47[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData47[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 47">
                    <td width=16.66% >
                    <select v-model="targetAow[47]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData48[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData48[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData48[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData48[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData48[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 48">
                    <td width=16.66% >
                    <select v-model="targetAow[48]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData49[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData49[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData49[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData49[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData49[0].amount"></td>               
                </tr>
                <tr v-if="numOfAows > 49">
                    <td width=16.66% >
                    <select v-model="targetAow[49]" name="aowNum">
                        <option value=" " disabled>Select One</option>
                        <option v-for="Aow in filteredAows">{{ Aow.AOWNo }}</option>
                    </select>
                    </td>
                    <td width=16.66% ><input type="text" name="aowOrderNum"  readonly="readonly" :value="targetAowData50[0].orderNo"></td>
                    <td width=16.66% ><input type="text" name="aowBsn"  readonly="readonly" :value="targetAowData50[0].BSN"></td>
                    <td width=16.66% ><input type="text" name="aowTeam"  readonly="readonly" :value="targetAowData50[0].team"></td>
                    <td width=16.66% ><input type="text" name="aowUser"  readonly="readonly" :value="targetAowData50[0].user"></td>
                    <td width=16.66% ><input type="number" step="any" name="aowAmount"  readonly="readonly" :value="targetAowData50[0].amount"></td>               
                </tr>
            </table>
            <table width=100%>
                <tr>
                    <td width=83.33% style="width: 520px;">Total Amount: </td>
                    <td width=16.66% ><input type="number" step="any" name="aowTotal"  readonly="readonly" :value="totalAowAmount"></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            Aows: [],
            targetAow: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
            numOfAows: 1,
            passingAowTotal: 0,
            passingOrderValid: true,
            orderNum811: false,
            orderNum828: false
        }
    },
    methods: {
    },
    mounted() {
        var self = this;
        axios.get('/download-aow')
            .then((res) => {
                self.Aows = res.data;
            })
    },
    computed: {
        filteredAows: function() {
            return this.Aows.filter((aow) => {
                var check = "false";
                return aow.includedInInvoice.toString().match(check);
            });
        },
        targetAowData1: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[0]);
            });
        },
        targetAowData2: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[1]);
            })
        },
        targetAowData3: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[2]);
            });
        },
        targetAowData4: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[3]);
            })
        },
        targetAowData5: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[4]);
            });
        },
        targetAowData6: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[5]);
            })
        },
        targetAowData7: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[6]);
            });
        },
        targetAowData8: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[7]);
            })
        },
        targetAowData9: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[8]);
            });
        },
        targetAowData10: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[9]);
            })
        },
        targetAowData11: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[10]);
            });
        },
        targetAowData12: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[11]);
            })
        },
        targetAowData13: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[12]);
            });
        },
        targetAowData14: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[13]);
            })
        },
        targetAowData15: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[14]);
            });
        },
        targetAowData16: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[15]);
            })
        },
        targetAowData17: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[16]);
            });
        },
        targetAowData18: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[17]);
            })
        },
        targetAowData19: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[18]);
            });
        },
        targetAowData20: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[19]);
            })
        },
        targetAowData21: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[20]);
            });
        },
        targetAowData22: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[21]);
            })
        },
        targetAowData23: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[22]);
            });
        },
        targetAowData24: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[23]);
            })
        },
        targetAowData25: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[24]);
            });
        },
        targetAowData26: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[25]);
            })
        },
        targetAowData27: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[26]);
            });
        },
        targetAowData28: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[27]);
            })
        },
        targetAowData29: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[28]);
            });
        },
        targetAowData30: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[29]);
            })
        },
        targetAowData31: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[30]);
            });
        },
        targetAowData32: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[31]);
            })
        },
        targetAowData33: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[32]);
            });
        },
        targetAowData34: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[33]);
            })
        },
        targetAowData35: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[34]);
            });
        },
        targetAowData36: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[35]);
            })
        },
        targetAowData37: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[36]);
            });
        },
        targetAowData38: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[37]);
            })
        },
        targetAowData39: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[38]);
            });
        },
        targetAowData40: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[39]);
            })
        },
        targetAowData41: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[40]);
            });
        },
        targetAowData42: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[41]);
            })
        },
        targetAowData43: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[42]);
            });
        },
        targetAowData44: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[43]);
            })
        },
        targetAowData45: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[44]);
            });
        },
        targetAowData46: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[45]);
            })
        },
        targetAowData47: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[46]);
            });
        },
        targetAowData48: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[47]);
            })
        },
        targetAowData49: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[48]);
            });
        },
        targetAowData50: function() {
            return this.Aows.filter((aow) => {
                return aow.AOWNo.match(this.targetAow[49]);
            })
        },
        totalAowAmount: function() {
            var result = 0;
            result += this.targetAowData1[0].amount;
            result += this.targetAowData2[0].amount;
            result += this.targetAowData3[0].amount;
            result += this.targetAowData4[0].amount;
            result += this.targetAowData5[0].amount;
            result += this.targetAowData6[0].amount;
            result += this.targetAowData7[0].amount;
            result += this.targetAowData8[0].amount;
            result += this.targetAowData9[0].amount;
            result += this.targetAowData10[0].amount;
            result += this.targetAowData11[0].amount;
            result += this.targetAowData12[0].amount;
            result += this.targetAowData13[0].amount;
            result += this.targetAowData14[0].amount;
            result += this.targetAowData15[0].amount;
            result += this.targetAowData16[0].amount;
            result += this.targetAowData17[0].amount;
            result += this.targetAowData18[0].amount;
            result += this.targetAowData19[0].amount;
            result += this.targetAowData20[0].amount;
            result += this.targetAowData21[0].amount;
            result += this.targetAowData22[0].amount;
            result += this.targetAowData23[0].amount;
            result += this.targetAowData24[0].amount;
            result += this.targetAowData25[0].amount;
            result += this.targetAowData26[0].amount;
            result += this.targetAowData27[0].amount;
            result += this.targetAowData28[0].amount;
            result += this.targetAowData29[0].amount;
            result += this.targetAowData30[0].amount;
            result += this.targetAowData31[0].amount;
            result += this.targetAowData32[0].amount;
            result += this.targetAowData33[0].amount;
            result += this.targetAowData34[0].amount;
            result += this.targetAowData35[0].amount;
            result += this.targetAowData36[0].amount;
            result += this.targetAowData37[0].amount;
            result += this.targetAowData38[0].amount;
            result += this.targetAowData39[0].amount;
            result += this.targetAowData40[0].amount;
            result += this.targetAowData41[0].amount;
            result += this.targetAowData42[0].amount;
            result += this.targetAowData43[0].amount;
            result += this.targetAowData44[0].amount;
            result += this.targetAowData45[0].amount;
            result += this.targetAowData46[0].amount;
            result += this.targetAowData47[0].amount;
            result += this.targetAowData48[0].amount;
            result += this.targetAowData49[0].amount;
            result += this.targetAowData50[0].amount;

            this.passingAowTotal = result;
            this.$emit('passedAowTotal', this.passingAowTotal)

            return result;
        }
    }/*,
    watch: {
        orderNumValidator: function() {
            if (this.orderNum.includes("828")) {
                this.orderNum828 = true;
            }
            /*if (
                (this.targetAowData1[0].orderNo.charAt(0) == "8" && this.targetAowData1[0].orderNo.charAt(1) == "1" && this.targetAowData1[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData2[0].orderNo.charAt(0) == "8" && this.targetAowData2[0].orderNo.charAt(1) == "1" && this.targetAowData2[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData3[0].orderNo.charAt(0) == "8" && this.targetAowData3[0].orderNo.charAt(1) == "1" && this.targetAowData3[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData4[0].orderNo.charAt(0) == "8" && this.targetAowData4[0].orderNo.charAt(1) == "1" && this.targetAowData4[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData5[0].orderNo.charAt(0) == "8" && this.targetAowData5[0].orderNo.charAt(1) == "1" && this.targetAowData5[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData6[0].orderNo.charAt(0) == "8" && this.targetAowData6[0].orderNo.charAt(1) == "1" && this.targetAowData6[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData7[0].orderNo.charAt(0) == "8" && this.targetAowData7[0].orderNo.charAt(1) == "1" && this.targetAowData7[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData8[0].orderNo.charAt(0) == "8" && this.targetAowData8[0].orderNo.charAt(1) == "1" && this.targetAowData8[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData9[0].orderNo.charAt(0) == "8" && this.targetAowData9[0].orderNo.charAt(1) == "1" && this.targetAowData9[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData10[0].orderNo.charAt(0) == "8" && this.targetAowData10[0].orderNo.charAt(1) == "1" && this.targetAowData10[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData11[0].orderNo.charAt(0) == "8" && this.targetAowData11[0].orderNo.charAt(1) == "1" && this.targetAowData11[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData12[0].orderNo.charAt(0) == "8" && this.targetAowData12[0].orderNo.charAt(1) == "1" && this.targetAowData12[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData13[0].orderNo.charAt(0) == "8" && this.targetAowData13[0].orderNo.charAt(1) == "1" && this.targetAowData13[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData14[0].orderNo.charAt(0) == "8" && this.targetAowData14[0].orderNo.charAt(1) == "1" && this.targetAowData14[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData15[0].orderNo.charAt(0) == "8" && this.targetAowData15[0].orderNo.charAt(1) == "1" && this.targetAowData15[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData16[0].orderNo.charAt(0) == "8" && this.targetAowData16[0].orderNo.charAt(1) == "1" && this.targetAowData16[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData17[0].orderNo.charAt(0) == "8" && this.targetAowData17[0].orderNo.charAt(1) == "1" && this.targetAowData17[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData18[0].orderNo.charAt(0) == "8" && this.targetAowData18[0].orderNo.charAt(1) == "1" && this.targetAowData18[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData19[0].orderNo.charAt(0) == "8" && this.targetAowData19[0].orderNo.charAt(1) == "1" && this.targetAowData19[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData20[0].orderNo.charAt(0) == "8" && this.targetAowData20[0].orderNo.charAt(1) == "1" && this.targetAowData20[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData21[0].orderNo.charAt(0) == "8" && this.targetAowData21[0].orderNo.charAt(1) == "1" && this.targetAowData21[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData22[0].orderNo.charAt(0) == "8" && this.targetAowData22[0].orderNo.charAt(1) == "1" && this.targetAowData22[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData23[0].orderNo.charAt(0) == "8" && this.targetAowData23[0].orderNo.charAt(1) == "1" && this.targetAowData23[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData24[0].orderNo.charAt(0) == "8" && this.targetAowData24[0].orderNo.charAt(1) == "1" && this.targetAowData24[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData25[0].orderNo.charAt(0) == "8" && this.targetAowData25[0].orderNo.charAt(1) == "1" && this.targetAowData25[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData26[0].orderNo.charAt(0) == "8" && this.targetAowData26[0].orderNo.charAt(1) == "1" && this.targetAowData26[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData27[0].orderNo.charAt(0) == "8" && this.targetAowData27[0].orderNo.charAt(1) == "1" && this.targetAowData27[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData28[0].orderNo.charAt(0) == "8" && this.targetAowData28[0].orderNo.charAt(1) == "1" && this.targetAowData28[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData29[0].orderNo.charAt(0) == "8" && this.targetAowData29[0].orderNo.charAt(1) == "1" && this.targetAowData29[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData30[0].orderNo.charAt(0) == "8" && this.targetAowData30[0].orderNo.charAt(1) == "1" && this.targetAowData30[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData31[0].orderNo.charAt(0) == "8" && this.targetAowData31[0].orderNo.charAt(1) == "1" && this.targetAowData31[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData32[0].orderNo.charAt(0) == "8" && this.targetAowData32[0].orderNo.charAt(1) == "1" && this.targetAowData32[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData33[0].orderNo.charAt(0) == "8" && this.targetAowData33[0].orderNo.charAt(1) == "1" && this.targetAowData33[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData34[0].orderNo.charAt(0) == "8" && this.targetAowData34[0].orderNo.charAt(1) == "1" && this.targetAowData34[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData35[0].orderNo.charAt(0) == "8" && this.targetAowData35[0].orderNo.charAt(1) == "1" && this.targetAowData35[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData36[0].orderNo.charAt(0) == "8" && this.targetAowData36[0].orderNo.charAt(1) == "1" && this.targetAowData36[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData37[0].orderNo.charAt(0) == "8" && this.targetAowData37[0].orderNo.charAt(1) == "1" && this.targetAowData37[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData38[0].orderNo.charAt(0) == "8" && this.targetAowData38[0].orderNo.charAt(1) == "1" && this.targetAowData38[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData39[0].orderNo.charAt(0) == "8" && this.targetAowData39[0].orderNo.charAt(1) == "1" && this.targetAowData39[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData40[0].orderNo.charAt(0) == "8" && this.targetAowData40[0].orderNo.charAt(1) == "1" && this.targetAowData40[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData41[0].orderNo.charAt(0) == "8" && this.targetAowData41[0].orderNo.charAt(1) == "1" && this.targetAowData41[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData42[0].orderNo.charAt(0) == "8" && this.targetAowData42[0].orderNo.charAt(1) == "1" && this.targetAowData42[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData43[0].orderNo.charAt(0) == "8" && this.targetAowData43[0].orderNo.charAt(1) == "1" && this.targetAowData43[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData44[0].orderNo.charAt(0) == "8" && this.targetAowData44[0].orderNo.charAt(1) == "1" && this.targetAowData44[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData45[0].orderNo.charAt(0) == "8" && this.targetAowData45[0].orderNo.charAt(1) == "1" && this.targetAowData45[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData46[0].orderNo.charAt(0) == "8" && this.targetAowData46[0].orderNo.charAt(1) == "1" && this.targetAowData46[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData47[0].orderNo.charAt(0) == "8" && this.targetAowData47[0].orderNo.charAt(1) == "1" && this.targetAowData47[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData48[0].orderNo.charAt(0) == "8" && this.targetAowData48[0].orderNo.charAt(1) == "1" && this.targetAowData48[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData49[0].orderNo.charAt(0) == "8" && this.targetAowData49[0].orderNo.charAt(1) == "1" && this.targetAowData49[0].orderNo.charAt(2) == "1") ||
                (this.targetAowData50[0].orderNo.charAt(0) == "8" && this.targetAowData50[0].orderNo.charAt(1) == "1" && this.targetAowData50[0].orderNo.charAt(2) == "1")
            ) {
                this.orderNum811 = true;
            }
                
            if (
                (this.targetAowData1[0].orderNo.charAt(0) == "8" && this.targetAowData1[0].orderNo.charAt(1) == "2" && this.targetAowData1[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData2[0].orderNo.charAt(0) == "8" && this.targetAowData2[0].orderNo.charAt(1) == "2" && this.targetAowData2[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData3[0].orderNo.charAt(0) == "8" && this.targetAowData3[0].orderNo.charAt(1) == "2" && this.targetAowData3[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData4[0].orderNo.charAt(0) == "8" && this.targetAowData4[0].orderNo.charAt(1) == "2" && this.targetAowData4[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData5[0].orderNo.charAt(0) == "8" && this.targetAowData5[0].orderNo.charAt(1) == "2" && this.targetAowData5[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData6[0].orderNo.charAt(0) == "8" && this.targetAowData6[0].orderNo.charAt(1) == "2" && this.targetAowData6[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData7[0].orderNo.charAt(0) == "8" && this.targetAowData7[0].orderNo.charAt(1) == "2" && this.targetAowData7[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData8[0].orderNo.charAt(0) == "8" && this.targetAowData8[0].orderNo.charAt(1) == "2" && this.targetAowData8[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData9[0].orderNo.charAt(0) == "8" && this.targetAowData9[0].orderNo.charAt(1) == "2" && this.targetAowData9[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData10[0].orderNo.charAt(0) == "8" && this.targetAowData10[0].orderNo.charAt(1) == "2" && this.targetAowData10[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData11[0].orderNo.charAt(0) == "8" && this.targetAowData11[0].orderNo.charAt(1) == "2" && this.targetAowData11[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData12[0].orderNo.charAt(0) == "8" && this.targetAowData12[0].orderNo.charAt(1) == "2" && this.targetAowData12[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData13[0].orderNo.charAt(0) == "8" && this.targetAowData13[0].orderNo.charAt(1) == "2" && this.targetAowData13[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData14[0].orderNo.charAt(0) == "8" && this.targetAowData14[0].orderNo.charAt(1) == "2" && this.targetAowData14[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData15[0].orderNo.charAt(0) == "8" && this.targetAowData15[0].orderNo.charAt(1) == "2" && this.targetAowData15[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData16[0].orderNo.charAt(0) == "8" && this.targetAowData16[0].orderNo.charAt(1) == "2" && this.targetAowData16[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData17[0].orderNo.charAt(0) == "8" && this.targetAowData17[0].orderNo.charAt(1) == "2" && this.targetAowData17[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData18[0].orderNo.charAt(0) == "8" && this.targetAowData18[0].orderNo.charAt(1) == "2" && this.targetAowData18[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData19[0].orderNo.charAt(0) == "8" && this.targetAowData19[0].orderNo.charAt(1) == "2" && this.targetAowData19[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData20[0].orderNo.charAt(0) == "8" && this.targetAowData20[0].orderNo.charAt(1) == "2" && this.targetAowData20[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData21[0].orderNo.charAt(0) == "8" && this.targetAowData21[0].orderNo.charAt(1) == "2" && this.targetAowData21[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData22[0].orderNo.charAt(0) == "8" && this.targetAowData22[0].orderNo.charAt(1) == "2" && this.targetAowData22[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData23[0].orderNo.charAt(0) == "8" && this.targetAowData23[0].orderNo.charAt(1) == "2" && this.targetAowData23[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData24[0].orderNo.charAt(0) == "8" && this.targetAowData24[0].orderNo.charAt(1) == "2" && this.targetAowData24[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData25[0].orderNo.charAt(0) == "8" && this.targetAowData25[0].orderNo.charAt(1) == "2" && this.targetAowData25[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData26[0].orderNo.charAt(0) == "8" && this.targetAowData26[0].orderNo.charAt(1) == "2" && this.targetAowData26[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData27[0].orderNo.charAt(0) == "8" && this.targetAowData27[0].orderNo.charAt(1) == "2" && this.targetAowData27[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData28[0].orderNo.charAt(0) == "8" && this.targetAowData28[0].orderNo.charAt(1) == "2" && this.targetAowData28[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData29[0].orderNo.charAt(0) == "8" && this.targetAowData29[0].orderNo.charAt(1) == "2" && this.targetAowData29[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData30[0].orderNo.charAt(0) == "8" && this.targetAowData30[0].orderNo.charAt(1) == "2" && this.targetAowData30[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData31[0].orderNo.charAt(0) == "8" && this.targetAowData31[0].orderNo.charAt(1) == "2" && this.targetAowData31[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData32[0].orderNo.charAt(0) == "8" && this.targetAowData32[0].orderNo.charAt(1) == "2" && this.targetAowData32[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData33[0].orderNo.charAt(0) == "8" && this.targetAowData33[0].orderNo.charAt(1) == "2" && this.targetAowData33[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData34[0].orderNo.charAt(0) == "8" && this.targetAowData34[0].orderNo.charAt(1) == "2" && this.targetAowData34[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData35[0].orderNo.charAt(0) == "8" && this.targetAowData35[0].orderNo.charAt(1) == "2" && this.targetAowData35[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData36[0].orderNo.charAt(0) == "8" && this.targetAowData36[0].orderNo.charAt(1) == "2" && this.targetAowData36[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData37[0].orderNo.charAt(0) == "8" && this.targetAowData37[0].orderNo.charAt(1) == "2" && this.targetAowData37[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData38[0].orderNo.charAt(0) == "8" && this.targetAowData38[0].orderNo.charAt(1) == "2" && this.targetAowData38[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData39[0].orderNo.charAt(0) == "8" && this.targetAowData39[0].orderNo.charAt(1) == "2" && this.targetAowData39[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData40[0].orderNo.charAt(0) == "8" && this.targetAowData40[0].orderNo.charAt(1) == "2" && this.targetAowData40[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData41[0].orderNo.charAt(0) == "8" && this.targetAowData41[0].orderNo.charAt(1) == "2" && this.targetAowData41[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData42[0].orderNo.charAt(0) == "8" && this.targetAowData42[0].orderNo.charAt(1) == "2" && this.targetAowData42[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData43[0].orderNo.charAt(0) == "8" && this.targetAowData43[0].orderNo.charAt(1) == "2" && this.targetAowData43[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData44[0].orderNo.charAt(0) == "8" && this.targetAowData44[0].orderNo.charAt(1) == "2" && this.targetAowData44[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData45[0].orderNo.charAt(0) == "8" && this.targetAowData45[0].orderNo.charAt(1) == "2" && this.targetAowData45[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData46[0].orderNo.charAt(0) == "8" && this.targetAowData46[0].orderNo.charAt(1) == "2" && this.targetAowData46[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData47[0].orderNo.charAt(0) == "8" && this.targetAowData47[0].orderNo.charAt(1) == "2" && this.targetAowData47[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData48[0].orderNo.charAt(0) == "8" && this.targetAowData48[0].orderNo.charAt(1) == "2" && this.targetAowData48[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData49[0].orderNo.charAt(0) == "8" && this.targetAowData49[0].orderNo.charAt(1) == "2" && this.targetAowData49[0].orderNo.charAt(2) == "8") ||
                (this.targetAowData50[0].orderNo.charAt(0) == "8" && this.targetAowData50[0].orderNo.charAt(1) == "2" && this.targetAowData50[0].orderNo.charAt(2) == "8")
            ) {
                this.orderNum828 = true;
            }

            if (this.orderNum811 && this.orderNum828) {
                this.passingOrderValid = false;
                this.$emit('passedAowTotal', this.passingOrderValid);
                return false;
            }
            else {
                this.passingOrderValid = true;
                this.$emit('passedOrderValid', this.passingOrderValid);
                return true;
            }
        }
    }*/
}
</script>

<style>
@import url('../styleS.css');
/*    .aowNum {

  }

  .aowOrderNum, .aowBsn, .aowTeam, .aowUser, .aowAmount{

  }*/

  
  #aowContainer {
    display: block;
  }
  
  .Container {
    display: block;
  }
</style>
