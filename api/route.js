const express = require('express');
const router = express.Router();
const path = require('path');
var edge = require('edge-js');
var toPdf = require('./toPdf');
var excelEditor = require('./excelEditor');
var adminExcelEditor = require('./adminExcelEditor.js');
var AOWExcelEditor = require('./AOWExcelEditor');
var InvoiceExcelEditor = require('./invoiceExcelEditor');
const passport = require('passport');
const User = require('./model/user');
const UnitPriceATG = require('./model/unitPriceATG');
const UnitPriceIBI = require('./model/unitPriceIBI');
const Order = require('./model/order');
const OrderRecord = require('./model/orderRecord');
const AOWRecord = require('./model/AOW');
const InvoiceRecord = require('./model/invoice');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local');
const fs = require('fs');

const app = express();

router.post('/admin-generate', (req,res) => {
    console.log(req.body.BsnNum);
    var timestemp = Date(Date.now());
    timestemp = timestemp.toString();
    timestemp = timeToName(timestemp);
    var excelInput = path.resolve(__dirname + '/../internalStorage/adminStorage/template.xlsx');
    var excelOutputPath = path.resolve(__dirname + '/../internalStorage/adminStorage/excelbackup/' + timestemp + '.xlsx');
    var pdfOutputPath = path.resolve(__dirname + '/../internalStorage/adminStorage/pdfbackup/' + timestemp);

    var newRecord = new OrderRecord({
        FileName: timestemp,
        UserName: req.user.username
    });

    newRecord.save()
    .then(result => console.log(result))
    .catch(err => console.log(err));

    Order.find({BSN: req.body.BsnNum}).then(record => {
        adminExcelEditor(excelInput, excelOutputPath, record);
        toPdf(excelOutputPath, pdfOutputPath, 'xlsx');
        res.redirect('/download-page');
    })

});

router.post('/aow-upload', (req, res, next) => {
    console.log(req.body);
    var timestemp = Date(Date.now());
    timestemp = timestemp.toString();
    timestemp = timeToName(timestemp);
    var boolTemp = "false";
    var newRecord = new AOWRecord({
        fileName: timestemp,
        AOWNo: req.body.AOW,
        orderNo: req.body.orderNo,
        BSN: req.body.BSN,
        amount: req.body.totalAmount,
        team: req.user.group,
        user: req.user.username,
        includedInInvoice: boolTemp
    });

    newRecord.save()
    .then(result => console.log(result))
    .catch(err => console.log(err));

    var excelInput;
    var excelOutputPath;
    var pdfOutputPath;
    if (req.user.group == "ATG") {
        excelInput = path.resolve(__dirname + '/../internalStorage/ATGStorage/template/CPONQuotaion&AOW_ATG.xlsx');
        excelOutputPath = path.resolve(__dirname + '/../internalStorage/ATGStorage/excelbackup/' + timestemp + '.xlsx');
        pdfOutputPath = path.resolve(__dirname + '/../internalStorage/ATGStorage/pdfbackup/' + timestemp);
    }
    else if (req.user.group == "IBI") {
        excelInput = path.resolve(__dirname + '/../internalStorage/IBIStorage/template/CPONQuotaion&AOW_ATG.xlsx');
        excelOutputPath = path.resolve(__dirname + '/../internalStorage/IBIStorage/excelbackup/' + timestemp + '.xlsx');
        pdfOutputPath = path.resolve(__dirname + '/../internalStorage/IBIStorage/pdfbackup/' + timestemp);
    }

    AOWExcelEditor(excelInput, excelOutputPath, req.body);
    toPdf(excelOutputPath, pdfOutputPath, 'xlsx');

    res.redirect('/download-page-aow');
})

router.post('/generate-invoice', (req, res, next) => {
    console.log(req.body);
    var timestemp = Date(Date.now());
    timestemp = timestemp.toString();
    timestemp = timeToName(timestemp);

    var newRecord = new InvoiceRecord({
        fileName: timestemp,
        invoiceNum: req.body.invoiceNum,
        amount: req.body.aowTotal,
        team: req.user.group,
        user: req.user.username
    });

    newRecord.save()
    .then(result => console.log(result))
    .catch(err => console.log(err));

    var excelInput;
    var excelOutputPath;
    var pdfOutputPath;
    if (req.user.group == "ATG") {
        excelInput = path.resolve(__dirname + '/../internalStorage/ATGStorage/template/Invoice.xlsx');
        excelOutputPath = path.resolve(__dirname + '/../internalStorage/ATGStorage/invoiceExcelBackup/' + timestemp + '.xlsx');
        pdfOutputPath = path.resolve(__dirname + '/../internalStorage/ATGStorage/invoicePdfBackup/' + timestemp);
    }
    else if (req.user.group == "IBI") {
        excelInput = path.resolve(__dirname + '/../internalStorage/IBIStorage/template/Invoice.xlsx');
        excelOutputPath = path.resolve(__dirname + '/../internalStorage/IBIStorage/invoiceExcelBackup/' + timestemp + '.xlsx');
        pdfOutputPath = path.resolve(__dirname + '/../internalStorage/IBIStorage/invoicePdfBackup/' + timestemp);
    }    

    InvoiceExcelEditor(excelInput, excelOutputPath, req.body);
    toPdf(excelOutputPath, pdfOutputPath, 'xlsx');

    res.redirect('/download-page-invoice');
})

router.post('/signin', passport.authenticate('local', {
    failureRedirect: '/failed-to-login',
    failureFlash: true
    }),
    (req, res) => {         //if sucess
        console.log('Logged in sucessfully');
        res.redirect('/sucess');
    }
);

router.post('/signup', (req, res, next) => {
    var username = req.body.signUsername;
    var password = req.body.signPwd;
    var group = req.body.group;

    var newUser = new User({
        username: username,
        password: password,
        group: group
    });
    console.log(newUser);
    User.createUser(newUser, (err, user) => {
        if (err) throw err;
    })
    res.redirect('/');
});

router.get('/sucess', ensureAuthenticated, (req, res) => {
    console.log(req.user);
    if (req.user.group == 'Admin') {
        res.redirect('/admin');
    }
    else if (req.user.group == "ATG") {
        res.redirect('/ATG');
    }
    else if (req.user.group == "IBI") {
        res.redirect('/IBI');
    }
    else {
        res.redirect('/');
    }
});

router.get('/admin', ensureAuthenticated, checkUserAdmin, (req, res, next) => {
    fs.readFile(path.resolve(__dirname + '/../dist/index.html'), 'utf-8', (err, content) => {
        if (err) {
          console.log(err)
        }
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8'
        })
    
        res.end(content)
      })
});

router.get('/ATG', ensureAuthenticated, checkUserATG, (req, res, next) => {
    fs.readFile(path.resolve(__dirname + '/../dist/index.html'), 'utf-8', (err, content) => {
        if (err) {
          console.log(err)
        }
    
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8'
        })
    
        res.end(content)
      })
});

router.get('/info', ensureAuthenticated, (req, res, next) => {
    if (req.user.group == "ATG") {
    UnitPriceATG.find().then(dbRecord => {res.json(dbRecord);});
    }
    else if (req.user.group == "IBI") {
    UnitPriceIBI.find().then(dbRecord => {res.json(dbRecord);});
    }
    else if (req.user.group == "Admin") {
    Order.find().then(dbRecord => {res.json(dbRecord);});
    }
});

router.get('/order-info', ensureAuthenticated, (req, res) => {   
    Order.find().then(dbRecord => {res.json(dbRecord);});
})

router.get('/download-info', ensureAuthenticated, (req, res, next) => {
    if (req.user.group == "ATG") {
    Team_A_Record.find().then(dbRecord => {res.json(dbRecord);});
    }
    else if (req.user.group == "IBI") {

    }
    else if (req.user.group == "Admin") {
    OrderRecord.find().then(dbRecord => {res.json(dbRecord);});
    }
});

router.get('/download-aow', ensureAuthenticated, (req, res, next) => {
    if (req.user.group == "ATG") {
        AOWRecord.find().then(dbRecord => {console.log(dbRecord);res.json(dbRecord);});
    }
    else if (req.user.group == "IBI") {
        AOWRecord.find().then(dbRecord => {res.json(dbRecord);});
    }
    else if (req.user.group == "Admin") {
        AOWRecord.find().then(dbRecord => {res.json(dbRecord);});
    }
});

router.get('/download-invoice', ensureAuthenticated, (req, res, next) => {
        InvoiceRecord.find().then(dbRecord => {res.json(dbRecord);});
});

router.post('/download-excel', ensureAuthenticated, (req, res) => {
    var target = req.body.excelName;
    if (req.body.docType == "Aow") {
        if (req.body.targetTeam == "ATG") {
            var targetpath = path.resolve(__dirname + '/../internalStorage/ATGStorage/excelbackup/' + target + '.xlsx');
        }
        else if (req.body.targetTeam == "IBI") {
            var targetpath = path.resolve(__dirname + '/../internalStorage/IBIStorage/excelbackup/' + target + '.xlsx');
        } 
    }
    else if (req.body.docType == "Invoice"){
        if (req.body.targetTeam == "ATG") {
            var targetpath = path.resolve(__dirname + '/../internalStorage/ATGStorage/invoiceExcelBackup/' + target + '.xlsx');
        }
        else if (req.body.targetTeam == "IBI") {
            var targetpath = path.resolve(__dirname + '/../internalStorage/IBIStorage/invoiceExcelbackup/' + target + '.xlsx');
        } 
    }
    else {
        var targetpath = path.resolve(__dirname + '/../internalStorage/adminStorage/excelbackup/' + target + '.xlsx');
    }
    res.download(targetpath);
})

router.post('/download-pdf', ensureAuthenticated, (req, res) => {
    var target = req.body.pdfName;
    console.log(target);
    console.log(req.body.docType);
    if (req.user.group == "Admin") {
        if (req.body.docType == "Aow") {
            if (req.body.targetTeam == "ATG") {
                var targetpath = path.resolve(__dirname + '/../internalStorage/ATGStorage/pdfbackup/' + target + '.pdf');
            }
            else if (req.body.targetTeam == "IBI") {
                var targetpath = path.resolve(__dirname + '/../internalStorage/IBIStorage/pdfbackup/' + target + '.pdf');
            } 
        }
        else if (req.body.docType == "Invoice") {
            if (req.body.targetTeam == "ATG") {
                var targetpath = path.resolve(__dirname + '/../internalStorage/ATGStorage/invoicePdfBackup/' + target + '.pdf');
            }
            else if (req.body.targetTeam == "IBI") {
                var targetpath = path.resolve(__dirname + '/../internalStorage/IBIStorage/invoicePdfBackup/' + target + '.pdf');
            } 
        }
        else {
            var targetpath = path.resolve(__dirname + '/../internalStorage/adminStorage/pdfbackup/' + target + '.pdf');
        }
    }
    else if (req.user.group == "ATG") {
        if (req.body.docType == "AowPdf") {
            var targetpath = path.resolve(__dirname + '/../internalStorage/ATGStorage/pdfbackup/' + target + '.pdf');
        }
        else if (req.body.docType == "InvoicePdf") {
            var targetpath = path.resolve(__dirname + '/../internalStorage/ATGStorage/invoicePdfBackup/' + target + '.pdf');
        }
    }
    else if (req.user.group == "IBI") {
        if (req.body.docType == "AowPdf") {
            var targetpath = path.resolve(__dirname + '/../internalStorage/IBIStorage/pdfbackup/' + target + '.pdf');
        }
        else if (req.body.docType == "InvoicePdf") {
            var targetpath = path.resolve(__dirname + '/../internalStorage/IBIStorage/invoicePdfBackup/' + target + '.pdf');
        }
    }
    res.download(targetpath);
})

router.get('/download-page', ensureAuthenticated, (req, res, next) => {
    fs.readFile(path.resolve(__dirname + '/../dist/index.html'), 'utf-8', (err, content) => {
        if (err) {
          console.log(err)
        }
    
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8'
        })
    
        res.end(content)
      })
});

router.get('/download-page-aow', ensureAuthenticated, (req, res, next) => {
    fs.readFile(path.resolve(__dirname + '/../dist/index.html'), 'utf-8', (err, content) => {
        if (err) {
          console.log(err)
        }
    
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8'
        })
    
        res.end(content)
      })
});

router.get('/download-page-invoice', ensureAuthenticated, (req, res, next) => {
    fs.readFile(path.resolve(__dirname + '/../dist/index.html'), 'utf-8', (err, content) => {
        if (err) {
          console.log(err)
        }
    
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8'
        })
    
        res.end(content)
      })
});

router.get('/IBI', ensureAuthenticated, checkUserIBI, (req, res, next) => {
    fs.readFile(path.resolve(__dirname + '/../dist/index.html'), 'utf-8', (err, content) => {
        if (err) {
          console.log(err)
        }
    
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8'
        })
    
        res.end(content)
      })
});

router.get('/failed-to-login', (req, res, next) => {
    fs.readFile(path.resolve(__dirname + '/../dist/index.html'), 'utf-8', (err, content) => {
        if (err) {
          console.log(err)
        }
    
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8'
        })
    
        res.end(content)
      })
})

router.get('/logout', (req, res, next) => {
    req.logout();
    console.log('Bye Bye');
    res.redirect('/'); //back to sign in
})

module.exports = router;

function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()) {
        return next();
    }
    else {
        console.log('You haven\'t login');
        res.redirect('/'); //back to login page
    }
}

function checkUserATG(req, res, next) {
    if(req.user.group == 'ATG' || req.user.group == 'Admin') {
        return next();
    }
    else {
        console.log('you are no that user');
        res.redirect('/'); //back to login page
    }
}

function checkUserIBI(req, res, next) {
    if(req.user.group == 'IBI' || req.user.group == 'Admin') {
        return next();
    }
    else {
        console.log('you are no that user');
        res.redirect('/'); //back to login page
    }
}

function checkUserAdmin(req, res, next) {
    if(req.user.group == 'Admin') {
        return next();
    }
    else {
        console.log('you are no that user');
        res.redirect('/'); //back to login page
    }
}

function timeToName(timestemp) {
    var temp = String(timestemp);
    var value = "";

    for (var i = 0; i < temp.length; i++) {
        if (temp.charAt(i) == ':' || temp.charAt == ' ') {
            value += '-';
        }
        else if (temp.charAt(i) == ' ' && temp.charAt(i+1) == 'G') {
            return value;
        }
        else {
            value += temp.charAt(i);
        }
        
    }
}

passport.use(new LocalStrategy(
    (username, password, done) => {
        User.findOne({ username: username }, (err, user) => {
            if(err) {return done(err);}
            if (!user) {
                return done(null, false, { messsage: 'Incorrect username.'});
            }
            User.comparePassword(password, user.password, (err, isMatch) => {
                if(err) throw err
                if(isMatch) {
                    return done(null, user)
                }
                else {
                    return done(null, false, { messsage: 'Invaild password.'})
                }
                })
            });
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.getUserById(id, (err, user) => {
        done(err, user);
    });
});