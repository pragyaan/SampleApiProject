var express = require('express');
var router = express.Router();

var subjects = [
    {id:1,name:'mathematics',code:'m01'},
    {id:2,name:'physics',code:'p01'},
    {id:3,name:'chemistry',code:'c01'},
    {id:4,name:'mathematics',code:'m01'}
]
router.get('/',function(req,res) {
    res.send('hello!');
    next();
});

router.get('/subjects',function(req,res){
    res.send(subjects);
    next();
});
router.get('/subjects/:id',function(req,res){
    var uni = req.params.id;
    var resp ={} ;
    for(var key in subjects){
        if(subjects[key].name == uni || subjects[key].id == uni||subjects[key].code == uni){
            console.log(key);
            resp.push(subjects[key]);
            console.log(resp);
        }
    }res.send(resp);

})
module.exports= router;
