/**
 * Created by Dinesh Reddy Maddula on 4/21/2017.
 */
 var Module = require('../modules/taskModule.js'),
     tm = new Module();
 function Controller(){

 }
 Controller.prototype.getAll = function(req,res){
     tm.findAll(req,res);
     console.log("Im in controller");
 };
 // Controller.prototype.getById = function(req,res){
 //     tm.findId.bind();
 // };
 // Controller.prototype.create = function(req,res){
 //  tm.new.bind();
 // };
 // Controller.prototype.update = function(req,res){
 //  tm.change.bind();
 // };
 // Controller.prototype.delete = function(req,res){
 //  tm.remove.bind();
 // };
// var subjects = [
//     {id:1,name:'mathematics',code:'m01'},
//     {id:2,name:'physics',code:'p01'},
//     {id:3,name:'chemistry',code:'c01'},
//     {id:4,name:'mathematics',code:'m01'}
// ];
//
// Controller.prototype.getAll = function(req,res){
//     res.send(subjects);
// };
// Controller.prototype.getById = function(req,res){
//     var uni = req.params.id;
//     var subArray = [];
//     for(var key in subjects) {
//         if (subjects[key].name == uni || subjects[key].id == uni || subjects[key].code == uni) {
//             subArray.push(subjects[key]);
//         }
//     }res.send(subArray);
// };
// Controller.prototype.create = function(req,res){
//     subjects.push(req.body);
//     return res.json({
//         message:'success',
//         error : 'false'
//     })
// };
// Controller.prototype.update = function(req,res){
//     var uni = req.params.id;
//     for(var key in subjects) {
//         if (subjects[key].name == uni || subjects[key].id == uni || subjects[key].code == uni) {
//             subjects[key].name = req.body.name;
//             subjects[key].code = req.body.code;
//         }
//     }return res.json({
//         message:'success',
//         error : 'false'
//     })
// };
// Controller.prototype.delete = function(req,res){
//     var uni = req.params.id;
//     for(var key in subjects) {
//         if (subjects[key].name == uni || subjects[key].id == uni || subjects[key].code == uni) {
//             delete subjects[key];
//         }
//     }
// };

module.exports = Controller;


