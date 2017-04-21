/**
 * Created by Dinesh Reddy Maddula on 4/21/2017.
 */
var express = require('express'),
    app = express();
var body = require('body-parser');
var route = require('./routes/taskRoute.js');
app.get('/',function(req,res){
    res.send('Welcome To Subjects Api');
});
app.use(body.json());
app.use('/subjects',route);
app.listen(8080,function () {
    console.log("Server Started");
});

