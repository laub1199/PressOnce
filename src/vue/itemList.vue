<template>
  <div id = "itemListContainer">
        <table class="itemTable">
          <tr>
            <th style="width: 150px">Item</th>
            <th style="width: 800px">Description</th>
            <th style="width: 150px">Unit</th>
            <th style="width: 50px">Price</th>
            <th style="width: 50px">QTY</th>
            <th style="width: 50px">Amount</th>
          </tr>
        </table>
        <p @click="numOfItems+=1" >Add</p>
        <div class="needScroll">
          <table >
            <tr>
              <td style="width: 150px">
                <select v-model="targetItem[0]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" class="description" name="itemDes" :value="targetData1[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData1[0].unit"  readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData1[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[0]" :value="itemQTY[0]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[0]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 1">
              <td style="width: 150px">
                <select v-model="targetItem[1]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData2[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData2[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData2[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[1]" :value="itemQTY[1]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[1]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 2">
              <td style="width: 150px">
                <select v-model="targetItem[2]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData3[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData3[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData3[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[2]" :value="itemQTY[2]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[2]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 3">
              <td style="width: 150px">
                <select v-model="targetItem[3]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData4[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData4[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData4[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[3]" :value="itemQTY[3]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[3]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 4">
              <td style="width: 150px">
                <select v-model="targetItem[4]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData5[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData5[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData5[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[4]" :value="itemQTY[4]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[4]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 5">
              <td style="width: 150px">
                <select v-model="targetItem[5]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData6[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData6[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData6[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[5]" :value="itemQTY[5]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[5]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 6">
              <td style="width: 150px">
                <select v-model="targetItem[6]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData7[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData7[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData7[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[6]" :value="itemQTY[6]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[6]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 7">
              <td style="width: 150px">
                <select v-model="targetItem[7]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData8[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData8[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData8[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemQTY" v-model="itemQTY[7]" :value="itemQTY[7]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[7]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 8">
              <td style="width: 150px">
                <select v-model="targetItem[8]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData9[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData9[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData9[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[8]" :value="itemQTY[8]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[8]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 9">
              <td style="width: 150px">
                <select v-model="targetItem[9]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData10[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData10[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData10[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[9]" :value="itemQTY[9]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[9]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 10">
              <td style="width: 150px">
                <select v-model="targetItem[10]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData11[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData11[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData11[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[10]" :value="itemQTY[10]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[10]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 11">
              <td style="width: 150px">
                <select v-model="targetItem[11]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData12[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData12[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData12[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[11]" :value="itemQTY[11]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[11]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 12">
              <td style="width: 150px">
                <select v-model="targetItem[12]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData13[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData13[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData13[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[12]" :value="itemQTY[12]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[12]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 13">
              <td style="width: 150px">
                <select v-model="targetItem[13]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData14[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData14[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData14[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[13]" :value="itemQTY[13]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[13]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 14">
              <td style="width: 150px">
                <select v-model="targetItem[14]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData15[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData15[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData15[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[14]" :value="itemQTY[14]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[14]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 15">
              <td style="width: 150px">
                <select v-model="targetItem[15]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData16[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData16[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData16[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[15]" :value="itemQTY[15]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[15]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 16">
              <td style="width: 150px">
                <select v-model="targetItem[16]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData17[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData17[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData17[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[16]" :value="itemQTY[16]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[16]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 17">
              <td style="width: 150px">
                <select v-model="targetItem[17]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData18[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData18[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData18[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[17]" :value="itemQTY[17]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[17]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 18">
              <td style="width: 150px">
                <select v-model="targetItem[18]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData19[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData19[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData19[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[18]" :value="itemQTY[18]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[18]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 19">
              <td style="width: 150px">
                <select v-model="targetItem[19]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData20[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData20[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData20[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[19]" :value="itemQTY[19]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[19]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 20">
              <td style="width: 150px">
                <select v-model="targetItem[20]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData21[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData21[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData21[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[20]" :value="itemQTY[20]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[20]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 21">
              <td style="width: 150px">
                <select v-model="targetItem[21]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData22[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData22[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData22[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[21]" :value="itemQTY[21]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[21]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 22">
              <td style="width: 150px">
                <select v-model="targetItem[22]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData23[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData23[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData23[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[22]" :value="itemQTY[22]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[22]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 23">
              <td style="width: 150px">
                <select v-model="targetItem[23]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData24[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData24[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData24[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[23]" :value="itemQTY[23]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[23]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 24">
              <td style="width: 150px">
                <select v-model="targetItem[24]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData25[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData25[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData25[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[24]" :value="itemQTY[24]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[24]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 25">
              <td style="width: 150px">
                <select v-model="targetItem[25]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData26[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData26[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData26[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[25]" :value="itemQTY[25]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[25]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 26">
              <td style="width: 150px">
                <select v-model="targetItem[26]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData27[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData27[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData27[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[26]" :value="itemQTY[26]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[26]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 27">
              <td style="width: 150px">
                <select v-model="targetItem[27]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData28[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData28[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData28[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[27]" :value="itemQTY[27]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[27]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 28">
              <td style="width: 150px">
                <select v-model="targetItem[28]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData29[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData29[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData29[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[28]" :value="itemQTY[28]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[28]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 29">
              <td style="width: 150px">
                <select v-model="targetItem[29]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData30[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData30[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData30[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[29]" :value="itemQTY[29]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[29]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 30">
              <td style="width: 150px">
                <select v-model="targetItem[30]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData31[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData31[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData31[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[30]" :value="itemQTY[30]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[30]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 31">
              <td style="width: 150px">
                <select v-model="targetItem[31]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData32[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData32[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData32[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[31]" :value="itemQTY[31]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[31]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 32">
              <td style="width: 150px">
                <select v-model="targetItem[32]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData33[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData33[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData33[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[32]" :value="itemQTY[32]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[32]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 33">
              <td style="width: 150px">
                <select v-model="targetItem[33]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData34[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData34[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData34[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[33]" :value="itemQTY[33]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[33]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 34">
              <td style="width: 150px">
                <select v-model="targetItem[34]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData35[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData35[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData35[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[34]" :value="itemQTY[34]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[34]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 35">
              <td style="width: 150px">
                <select v-model="targetItem[35]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData36[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData36[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData36[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[35]" :value="itemQTY[35]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[35]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 36">
              <td style="width: 150px">
                <select v-model="targetItem[36]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData37[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData37[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData37[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[36]" :value="itemQTY[36]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[36]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 37">
              <td style="width: 150px">
                <select v-model="targetItem[37]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData38[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData38[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData38[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[37]" :value="itemQTY[37]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[37]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 38">
              <td style="width: 150px">
                <select v-model="targetItem[38]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData39[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData39[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData39[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[38]" :value="itemQTY[38]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[38]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 39">
              <td style="width: 150px">
                <select v-model="targetItem[39]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData40[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData40[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData40[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[39]" :value="itemQTY[39]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[39]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 40">
              <td style="width: 150px">
                <select v-model="targetItem[40]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData41[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData41[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData41[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[40]" :value="itemQTY[40]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[40]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 41">
              <td style="width: 150px">
                <select v-model="targetItem[41]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData42[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData42[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData42[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[41]" :value="itemQTY[41]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[41]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 42">
              <td style="width: 150px">
                <select v-model="targetItem[42]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData43[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData43[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData43[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[42]" :value="itemQTY[42]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[42]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 43">
              <td style="width: 150px">
                <select v-model="targetItem[43]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData44[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData44[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData44[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[43]" :value="itemQTY[43]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[43]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 44">
              <td style="width: 150px">
                <select v-model="targetItem[44]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData45[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData45[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData45[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[44]" :value="itemQTY[44]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[44]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 45">
              <td style="width: 150px">
                <select v-model="targetItem[45]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData46[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData46[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData46[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[45]" :value="itemQTY[45]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[45]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 46">
              <td style="width: 150px">
                <select v-model="targetItem[46]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData47[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData47[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData47[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[46]" :value="itemQTY[46]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[46]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 47">
              <td style="width: 150px">
                <select v-model="targetItem[47]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData48[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData48[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData48[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[47]" :value="itemQTY[47]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[47]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 48">
              <td style="width: 150px">
                <select v-model="targetItem[48]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData49[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData49[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData49[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[48]" :value="itemQTY[48]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[48]" readonly="readonly"></td>
            </tr>
            <tr v-if="numOfItems > 49">
              <td style="width: 150px">
                <select v-model="targetItem[49]" name="itemName">
                  <option value=" " disabled>Select One</option>
                  <option v-for="item in items">{{ item.workItem }}</option>
                </select>
              </td>
              <td style="width: 800px"><input type="text" name="itemDes" class="description" :value="targetData50[0].description" readonly="readonly"></td>
              <td style="width: 150px"><input type="text" name="itemUnit" class="unit" :value="targetData50[0].unit" readonly="readonly"></td>
              <td style="width: 50px"><input type="number" step="any" name="itemPrice" class="price" :value="targetData50[0].price" readonly="readonly"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" name="itemQTY" v-model="itemQTY[49]" :value="itemQTY[49]"></td>
              <td style="width: 50px"><input style="width: 50px" type="number" step="any" name="itemAmount" :value="itemAmount[49]" readonly="readonly"></td>
            </tr>
          </table>
        </div>
        <br>
        <table>
          <tr>
            <th style="width: 1200px;text-align: left">Total</th>
            <th style="width: 50px"><input type="number" step="any" name="totalAmount" :value="totalAmount" readonly="readonly"></th>
          </tr>
        </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data () {
    return {
      items: [],
      targetItem: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "], //Target item
      itemQTY: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      passingTotal: Number,
      numOfItems: 1
    }
  },
  mounted() {
    var self = this;
    axios.get('/info')
      .then((res) => {
          self.items = res.data;
      })
  },
  computed: {
    targetData1: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[0]);
      })
    },
    targetData2: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[1]);
      })
    },
    targetData3: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[2]);
      })
    },
    targetData4: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[3]);
      })
    },
    targetData5: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[4]);
      })
    },
    targetData6: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[5]);
      })
    },
    targetData7: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[6]);
      })
    },
    targetData8: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[7]);
      })
    },
    targetData9: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[8]);
      })
    },
    targetData10: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[9]);
      })
    },
    targetData11: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[10]);
      })
    },
    targetData12: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[11]);
      })
    },
    targetData13: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[12]);
      })
    },
    targetData14: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[13]);
      })
    },
    targetData15: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[14]);
      })
    },
    targetData16: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[15]);
      })
    },
    targetData17: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[16]);
      })
    },
    targetData18: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[17]);
      })
    },
    targetData19: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[16]);
      })
    },
    targetData20: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[19]);
      })
    },
    targetData21: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[20]);
      })
    },
    targetData22: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[21]);
      })
    },
    targetData23: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[22]);
      })
    },
    targetData24: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[23]);
      })
    },
    targetData25: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[24]);
      })
    },
    targetData26: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[25]);
      })
    },
    targetData27: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[26]);
      })
    },
    targetData28: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[27]);
      })
    },
    targetData29: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[28]);
      })
    },
    targetData30: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[29]);
      })
    },
    targetData31: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[30]);
      })
    },
    targetData32: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[31]);
      })
    },
    targetData33: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[32]);
      })
    },
    targetData34: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[33]);
      })
    },
    targetData35: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[34]);
      })
    },
    targetData36: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[35]);
      })
    },
    targetData37: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[36]);
      })
    },
    targetData38: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[37]);
      })
    },
    targetData39: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[38]);
      })
    },
    targetData40: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[39]);
      })
    },
    targetData41: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[40]);
      })
    },
    targetData42: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[41]);
      })
    },
    targetData43: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[42]);
      })
    },
    targetData44: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[43]);
      })
    },
    targetData45: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[44]);
      })
    },
    targetData46: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[45]);
      })
    },
    targetData47: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[46]);
      })
    },
    targetData48: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[47]);
      })
    },
    targetData49: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[48]);
      })
    },
    targetData50: function() {
      return this.items.filter((item) => {
          return item.workItem.match(this.targetItem[49]);
      })
    },
    itemAmount: function() {
        var result = [];

        result[0] = this.targetData1[0].price * this.itemQTY[0];
        result[1] = this.targetData2[0].price * this.itemQTY[1];
        result[2] = this.targetData3[0].price * this.itemQTY[2];
        result[3] = this.targetData4[0].price * this.itemQTY[3];
        result[4] = this.targetData5[0].price * this.itemQTY[4];
        result[5] = this.targetData6[0].price * this.itemQTY[5];
        result[6] = this.targetData7[0].price * this.itemQTY[6];
        result[7] = this.targetData8[0].price * this.itemQTY[7];
        result[8] = this.targetData9[0].price * this.itemQTY[8];
        result[9] = this.targetData10[0].price * this.itemQTY[9];
        result[10] = this.targetData11[0].price * this.itemQTY[10];
        result[11] = this.targetData12[0].price * this.itemQTY[11];
        result[12] = this.targetData13[0].price * this.itemQTY[12];
        result[13] = this.targetData14[0].price * this.itemQTY[13];
        result[14] = this.targetData15[0].price * this.itemQTY[14];
        result[15] = this.targetData16[0].price * this.itemQTY[15];
        result[16] = this.targetData17[0].price * this.itemQTY[16];
        result[17] = this.targetData18[0].price * this.itemQTY[17];
        result[18] = this.targetData19[0].price * this.itemQTY[18];
        result[19] = this.targetData20[0].price * this.itemQTY[19];
        result[20] = this.targetData21[0].price * this.itemQTY[20];
        result[21] = this.targetData22[0].price * this.itemQTY[21];
        result[22] = this.targetData23[0].price * this.itemQTY[22];
        result[23] = this.targetData24[0].price * this.itemQTY[23];
        result[24] = this.targetData25[0].price * this.itemQTY[24];
        result[25] = this.targetData26[0].price * this.itemQTY[25];
        result[26] = this.targetData27[0].price * this.itemQTY[26];
        result[27] = this.targetData28[0].price * this.itemQTY[27];
        result[28] = this.targetData29[0].price * this.itemQTY[28];
        result[29] = this.targetData20[0].price * this.itemQTY[29];
        result[30] = this.targetData31[0].price * this.itemQTY[30];
        result[31] = this.targetData32[0].price * this.itemQTY[31];
        result[32] = this.targetData33[0].price * this.itemQTY[32];
        result[33] = this.targetData34[0].price * this.itemQTY[33];
        result[34] = this.targetData35[0].price * this.itemQTY[34];
        result[35] = this.targetData36[0].price * this.itemQTY[35];
        result[36] = this.targetData37[0].price * this.itemQTY[36];
        result[37] = this.targetData38[0].price * this.itemQTY[37];
        result[38] = this.targetData39[0].price * this.itemQTY[38];
        result[39] = this.targetData30[0].price * this.itemQTY[39];
        result[40] = this.targetData41[0].price * this.itemQTY[40];
        result[41] = this.targetData42[0].price * this.itemQTY[41];
        result[42] = this.targetData43[0].price * this.itemQTY[42];
        result[43] = this.targetData44[0].price * this.itemQTY[43];
        result[44] = this.targetData45[0].price * this.itemQTY[44];
        result[45] = this.targetData46[0].price * this.itemQTY[45];
        result[46] = this.targetData47[0].price * this.itemQTY[46];
        result[47] = this.targetData48[0].price * this.itemQTY[47];
        result[48] = this.targetData49[0].price * this.itemQTY[48];
        result[49] = this.targetData50[0].price * this.itemQTY[49];

        return result;
    },
    totalAmount: function() {
      var total=0;
      for (var i = 0; i < this.numOfItems; i++) {
        total += this.itemAmount[i];
      }
      this.passingTotal = total;
      this.$emit('passedTotal', this.passingTotal)
      return total;
    }
  },
  methods: {

  }
}
</script>

<style>
  .itemTable {
    text-align: left;
  }
  #itemListContainer input{
    border: none;
    background-color: white;
  }
  .description{
    width: 800px;
  }
  .unit {
    width: 150px;
  }
  .price {
    width: 50px;
  }

</style>