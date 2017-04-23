/**
 * Created by Dinesh Reddy Maddula on 4/21/2017.
 */
 var Module = require('../modules/taskModule.js'),
     tm = new Module();
 function Controller(){

 }
 Controller.prototype.getAll = function(req,res,next){
     tm.findAll(req,function(err,data){
         if(err){
             console.log(err);
             return res.json({
                 error : true
             })
         }else{
             res.status(200).send(data);
         }
     });
 };
 Controller.prototype.getById = function(req,res,next){
    tm.findId(req,function(err,data){
        if(err){
            return res.json({
                error : true
            })
        }else{
            res.status(200).send(data);
        }
    });
  };
 Controller.prototype.create = function(req,res,next){
  tm.new(req.body, function (err, result) {
      console.log(result);
      if (err) {
          console.log(err);
          return next({status: 500, error: err});
      }
      if (result.type === 'update') {
          res.status(200).json(result.data);
      } else {
          if (result.data) {
              result = result.data;
          }
          res.status(201).json(result);
      }
  });
 };
 Controller.prototype.update = function(req,res,next){
  tm.change(req,function(err,data){
      console.log(data);
      if(err){
          // return res.json({
          //     error : true
          // })
          console.log(err);
      }else{
          res.status(200).send(data);
      }
  });
 };
 Controller.prototype.delete = function(req,res,next){
  tm.remove(req,function(err,data){
      if(err){
          return res.json({
              error : true
          })
          return next({status: 500, error: err});
      }else if (data === null || data.affectedRows <= 0) {
          res.status(404).json({status: 404, message: 'Record Not Found To Delete'});
      }else {
          res.status(204).send(JSON.stringify({
              message: 'resource(s) deleted.'
          }));
      }
  });
 };


module.exports = Controller;


