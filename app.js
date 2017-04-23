/**
 * Created by Dinesh Reddy Maddula on 4/21/2017.
 */

//declarations
var express = require('express'),
    app = express();
var bodyParser = require('body-parser');
var route = require('./routes/taskRoute.js');

app.get('/',function(req,res){
    res.send('Welcome To Subjects Api');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/subjects',route);

app.listen(8080,function () {
    console.log("Server Started");
});

