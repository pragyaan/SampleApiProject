/**
 * Created by Dinesh Reddy Maddula on 4/21/2017.
 */

//declarations
 var Module = require('../modules/taskModule.js'),
     tm = new Module();

 //controller constructor
 function Controller(){

 }

 //get
 Controller.prototype.getAll = function(req,res,next){
     tm.findAll(req,function(err,data){
         if(err){
             return next({status: 500, error: err});
         }else if(data==null||data==undefined||data=={}) {
             res.status(404).json({
                 status:404,
                 message : "File Not Found"
             })
         }else{
             res.status(200).send(data);
         }
     });
 };

 // get by id
 Controller.prototype.getById = function(req,res,next){
    tm.findId(req.params.id,function(err,data){
        if(err){
            return next({status: 500, error: err});
        }else if(data==null||data==undefined||data=={}) {
            res.status(404).json({
                status:404,
                message : "File Not Found"
            })
        }else {
            res.status(200).send(data);
        }
    });
  };

 // post
 Controller.prototype.create = function(req,res,next){
  tm.new(req.body, function (err, data) {
      if (err) {
          return next({status: 500, error: err});
      }else if(data==null||data==undefined||data=={}){
          return next({status:404,message:'Not Created'})
      }else {
          res.status(201).json(data);
      }
  });
 };

 // put
 Controller.prototype.update = function(req,res,next){
  tm.change(req.params.id,req.body,function(err,data){
      //console.log(data);
      if(err){
          return next({status:500,error:err})
      }else if(data==null||data==undefined||data=={}){
          return next({status:404,message:'Not Updated'})
      }else{
          res.status(201).json(data);
      }
  });
 };

 // delete
 Controller.prototype.delete = function(req,res,next){
  tm.remove(req.params.id,function(err,data){
      if(err){
          return next({status: 500, error: err});
      }else if (data === null || data.affectedRows <= 0) {
          res.status(404).json({status: 404, message: 'Record Not Found To Delete'});
      }else {
          res.status(204).json({
              message: 'resource(s) deleted.'
          });
      }
  });
 };


module.exports = Controller;


