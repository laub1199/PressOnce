var Excel = require('exceljs')

module.exports = function(input, output, record) {
    var workbook = new Excel.Workbook();
    workbook.xlsx.readFile(input).
        then(() => {
            var worksheet = workbook.getWorksheet('INVOICE');
            var tempNum;
            worksheet.pageSetup.scale = 70;
            var invoiceNo = worksheet.getCell('BM18');
            var invoiceDate = worksheet.getCell('BM19');
            var remark = worksheet.getCell('BM21');
            var name = worksheet.getCell('R19');
            var telNum = worksheet.getCell('R21');
            var project = worksheet.getCell('N23');
            var total = worksheet.getCell('BM55');

            invoiceNo.value = record.invoiceNum;
            invoiceDate.value = record.invDate;
            remark.value = record.remark;
            name.value = record.attnName;
            telNum.value = record.telNum;
            project.value = record.projName;
            total.value = record.aowTotal;

            if (!Array.isArray(record.aowNum)) {
                var aowNo = worksheet.getCell('F27');
                var BSN = worksheet.getCell('S27');
                var amount = worksheet.getCell('AC27');
                   
                aowNo.value = record.aowNum;
                BSN.value = record.aowBsn;
                amount.value = record.aowAmount;
            }
            else if (record.aowNum.length >= 28) {
                tempNum = 28;
            }
            else {
                tempNum = record.aowNum.length;
            }

            console.log(tempNum);
            console.log(record.aowNum.length);

            for (var i = 0; i < tempNum; i++) {
                console.log(i);
                var target = 27 + i;
                var aowNo = worksheet.getCell('F' + target);
                var BSN = worksheet.getCell('S' + target);
                var amount = worksheet.getCell('AC' + target);
                   
                aowNo.value = record.aowNum[i];
                BSN.value = record.aowBsn[i];
                amount.value = record.aowAmount[i];
            }

            if(record.aowNum.length > 28) {
                while (tempNum <= record.aowNum.length) {
                    var target = 27 + tempNum - 29;
                    var aowNo = worksheet.getCell('AP' + target);
                    var BSN = worksheet.getCell('BC' + target);
                    var amount = worksheet.getCell('BM' + target);

                    aowNo.value = record.aowNum[tempNum];
                    BSN.value = record.aowBsn[tempNum];
                    amount.value = record.aowAmount[tempNum];

                    tempNum++;
                }
            }
           
            workbook.xlsx.writeFile(output).then(() => {
                console.log("Done");
            });

        });
}