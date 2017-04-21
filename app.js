var express = require('express'),
    app = express();
var body = require('body-parser');
var route = require('./routes/taskRoute.js')
app.use(body.json());
app.use('/',route);
// app.use('/subjects',route);
// app.use('/subjects/:id',route);

app.listen(8000);

