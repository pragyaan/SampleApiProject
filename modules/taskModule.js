/**
 * Created by Dinesh Reddy Maddula on 4/21/2017.
 */

//declarations
var Connection = require('../utils/dbConnection'),
    db;

//module constructor
function Module(){
this.db =  Connection;
}

//get
Module.prototype.findAll = function(req,callback){
    console.log("hello im in Module");
    this.db.query('select * from subject',function(err,data){
        if(err){
            console.log(err);
            callback(err,null);
        }else{
            callback(err,data);
        }
    });
};

//get by id
Module.prototype.findId = function(id,callback){
    this.db.query('select * from subject  WHERE subject.id  = '+id +' or subject.categoryid ='+id,function(err,data){
        if(err){
            callback(err,null);
        }else{
            callback(err,data);
        }
    })
};

//post
Module.prototype.new = function(body,callback){
    // console.log("new");
    console.log(body);
    //var post = {"id":94,"categoryid":5,"name":"python","icon_class":"ts-python","description":"python","lastmoddatetime":"2017-04-14T06:03:48.000Z","lastmoduserid":99999};
    this.db.query('INSERT INTO subject SET ?',body,function(err,data){
        // console.log("query");
        // console.log(body);
        if (err) {
            callback(err,null);
        }else{
            callback(err,body);
        }
    })
};

//put
Module.prototype.change = function(id,body,callback){
    this.db.query('UPDATE subject SET ? WHERE subject.id='+id +' or subject.categoryid ='+id,body,function(err,data){
        if(err){
            callback(err,null);
        }else{
            callback(err,body);
        }
    })
};

//delete
Module.prototype.remove = function(id,callback){
    this.db.query('DELETE from subject WHERE subject.id ='+id +' or subject.categoryid ='+id,function(err,data){
        if(err){
            callback(err,null);
        }else{
            callback(err,data);
        }
    })
};

module.exports = Module ;