var Excel = require('exceljs')

module.exports = function(input, output, record) {
    var workbook = new Excel.Workbook();
    workbook.xlsx.readFile(input).
        then(() => {
            var worksheet = workbook.getWorksheet('AOW_Std');
            var worksheet2 = workbook.getWorksheet('AOW_Std2');
            var worksheet3 = workbook.getWorksheet('AOW_Std3');
            var worksheet4 = workbook.getWorksheet('AOW_Std4');
            var worksheet5 = workbook.getWorksheet('AOW_Std5');
            var tempNum;
            //console.log(worksheet);

            for (var i = 0; i < 5; i++) {
                switch(i) {
                    case 0: worksheet = workbook.getWorksheet('AOW_Std');
                            break;
                    case 1: worksheet = workbook.getWorksheet('AOW_Std2');
                            break;
                    case 2: worksheet = workbook.getWorksheet('AOW_Std3');
                            break;
                    case 3: worksheet = workbook.getWorksheet('AOW_Std4');
                            break;
                    case 4: worksheet = workbook.getWorksheet('AOW_Std5');
                            break;
                }
                var BSN = worksheet.getCell('I27');
                var AOW = worksheet.getCell('BL18');
                var AowDate = worksheet.getCell('BL19');
                var Name = worksheet.getCell('O19');
                var comName = worksheet.getCell('O20');
                var TelNum = worksheet.getCell('O21');
                var CusName = worksheet.getCell('M24');
                var CusAddress = worksheet.getCell('M25');
                var totalAmount = worksheet.getCell('BP41');
                BSN.value = record.BSN;
                AOW.value = record.AOW;
                AowDate.value = record.Date;
                Name.value = record.Name;
                comName.value = record.comName;
                TelNum.value = record.TelNum;
                CusName.value = record.CusName;
                CusAddress.value = record.CusAddress;
                totalAmount.value = record.totalAmount;
            }
            worksheet = workbook.getWorksheet('AOW_Std');

            if (!Array.isArray(record.itemName)) {
                tempNum = 1;

                var itemName = worksheet.getCell('A31');
                var itemDes = worksheet.getCell('E31');
                var itemUnit = worksheet.getCell('AW31');
                var itemPrice = worksheet.getCell('BJ31');
                var itemQTY = worksheet.getCell('BF31');
                var itemAmount = worksheet.getCell('BQ31');

                itemName.value = record.itemName;
                itemDes.value = record.itemDes;
                itemUnit.value = record.itemUnit;
                itemPrice.value = record.itemPrice;
                itemQTY.value = record.itemQTY;
                itemAmount.value= record.itemAmount;
            }
            else {
                tempNum = record.itemName.length;
            
                for (var i = 0; i < tempNum; i++) {
                    var temp = i;
                    if (i > 9 && i < 20) {
                        worksheet = workbook.getWorksheet('AOW_Std2');
                        temp -= 10;
                    }
                    else if (i > 19 && i < 30) {
                        worksheet = workbook.getWorksheet('AOW_Std3');
                        temp -= 20;
                    }
                    else if (i > 29 && i < 40) {
                        worksheet = workbook.getWorksheet('AOW_Std4');
                        temp -= 30;
                    }
                    else if (i > 39) {
                        worksheet = workbook.getWorksheet('AOW_Std5');
                        temp -= 40;
                    }

                    var target = temp + 31;
                    console.log(record.itemName[i]);
                    var itemName = worksheet.getCell('A' + target);
                    var itemDes = worksheet.getCell('E' + target);
                    var itemUnit = worksheet.getCell('AW' + target);
                    var itemPrice = worksheet.getCell('BJ' + target);
                    var itemQTY = worksheet.getCell('BF' + target);
                    var itemAmount = worksheet.getCell('BQ' + target);
                    if (record.itemUnit[i] == ' ') {
                        break;
                    }
                    itemName.value = record.itemName[i];
                    itemDes.value = record.itemDes[i];
                    itemUnit.value = record.itemUnit[i];
                    itemPrice.value = record.itemPrice[i];
                    itemQTY.value = record.itemQTY[i];
                    itemAmount.value= record.itemAmount[i];
                }
            }
            
            if(record.itemName.length <= 10) {
                workbook.removeWorksheet('AOW_Std2');
                workbook.removeWorksheet('AOW_Std3');
                workbook.removeWorksheet('AOW_Std4');
                workbook.removeWorksheet('AOW_Std5');
            }
            else if (record.itemName.length <= 20) {
                workbook.removeWorksheet('AOW_Std3');
                workbook.removeWorksheet('AOW_Std4');
                workbook.removeWorksheet('AOW_Std5');
            }
            else if (record.itemName.length <= 30) {
                workbook.removeWorksheet('AOW_Std4');
                workbook.removeWorksheet('AOW_Std5');
            }
            else if (record.itemName.length <= 40) {
                workbook.removeWorksheet('AOW_Std5');
            }

            workbook.xlsx.writeFile(output).then(() => {
                console.log("Done");
            });

        });
}