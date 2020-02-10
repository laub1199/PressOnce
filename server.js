const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const upload = require('express-fileupload');
const cors = require('cors');
var edge = require('edge-js')
var msopdf = require('node-msoffice-pdf');
const morgan = require('morgan');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const User = require('./api/model/user');
const session = require('express-session');

mongoose.connect('mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb');
const db = mongoose.connection;

const app = express();

const route = require('./api/route.js');

http.createServer(app).listen(80);

app.use(session({ cookie: { maxAge: 36000000 }, 
    secret: 'serect',
    resave: false, 
    saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(upload());

app.use('/', route);

app.use(express.static("dist"));

const PORT = process.env.PORT || 800;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});