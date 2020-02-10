var Excel = require('exceljs')

module.exports = function(input, output, record) {
    var workbook = new Excel.Workbook();
    workbook.xlsx.readFile(input).
        then(() => {
            var worksheet = workbook.getWorksheet('Template');
            //console.log(worksheet);
            worksheet.pageSetup.scale = 70;
            for (var i = 0; i < record.length; i++) {
                var target = i + 2;
                var OrderNo = worksheet.getCell('A' + target);
                var BSN = worksheet.getCell('B' + target);
                var team = worksheet.getCell('C' + target);
                var address = worksheet.getCell('D' + target);
                var fiberLength = worksheet.getCell('E' + target);
                var splitter = worksheet.getCell('F' + target);
                var plateIDCable = worksheet.getCell('G' + target);
                var SC1 = worksheet.getCell('H' + target);
                var SC6 = worksheet.getCell('I' + target);
                var AVC = worksheet.getCell('J' + target);
                //console.log(record[i]);
                OrderNo.value = record[i].orderNo;
                BSN.value = record[i].BSN;
                team.value = record[i].team;
                address.value = record[i].address;
                fiberLength.value = record[i].fiberLength;
                splitter.value = record[i].splitter;
                plateIDCable.value = record[i].plateIDCable;
                SC1.value = record[i].SCCoupler1Port;
                SC6.value = record[i].SCCoupler6Port;
                AVC.value = record[i].AVCTieMount;
            }
            workbook.xlsx.writeFile(output).then(() => {
                console.log("Done");
            });

        });
}