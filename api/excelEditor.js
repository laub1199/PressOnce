var Excel = require('exceljs')

module.exports = function(input, output, record) {
    var workbook = new Excel.Workbook();
    workbook.xlsx.readFile(input).
        then(() => {
            //console.log(workbook);
            var worksheet = workbook.getWorksheet('INVOICE');
            var CliName = worksheet.getCell('R19');
            var InvDate = worksheet.getCell('BM19');
            var TelNum = worksheet.getCell('R21');
            var InvNum = worksheet.getCell('BM18');

            CliName.value = record[0];
            InvDate.value = record[1];
            TelNum.value = record[2];
            InvNum.value = record[3];
            //console.log("#########", worksheet);
            workbook.xlsx.writeFile(output).then(() => {
                console.log("Done");
            });

        });
}