/**
 * Created by Dinesh Reddy Maddula on 4/21/2017.
 */
// var Module = require('../modules/taskModule.js'),
//     tm = new Module();

var subjects = [
    {id:1,name:'mathematics',code:'m01'},
    {id:2,name:'physics',code:'p01'},
    {id:3,name:'chemistry',code:'c01'},
    {id:4,name:'mathematics',code:'m01'}
];

function Controller(){

}
Controller.prototype.getAll = function(req,res){
    res.send(subjects);
};
Controller.prototype.getById = function(req,res){
    var uni = req.params.id;
    for(var key in subjects) {
        if (subjects[key].name == uni || subjects[key].id == uni || subjects[key].code == uni) {
            res.send(subjects[key]);
        }
    }
};
Controller.prototype.create = function(req,res){

};
Controller.prototype.update = function(req,res){

};
Controller.prototype.delete = function(req,res){
    var uni = req.params.id;
    for(var key in subjects) {
        if (subjects[key].name == uni || subjects[key].id == uni || subjects[key].code == uni) {
            remove(subjects[key]);
        }
    }
};

module.exports = Controller;


// router.get('/',function(req,res) {
//     res.send('hello!');
//     next();
// });

// router.get('/',function(req,res){
//     res.send(subjects);
// });
// router.get('/:id',function(req,res){
//     var uni = req.params.id;
//     for(var key in subjects){
//         if(subjects[key].name == uni || subjects[key].id == uni||subjects[key].code == uni){
//             res.json(subjects[key]);
//         }
//     }
//
// })

