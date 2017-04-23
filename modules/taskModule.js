/**
 * Created by Dinesh Reddy Maddula on 4/21/2017.
 */

//declarations
var Connection = require('../utils/dbConnection'),
    db;

//module constructor
function Module(){
this.db =  Connection;
this.id = ' WHERE subject.id=';
this.category = ' OR subject.categoryid =';
this.name = ' OR subject.name=';
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
    this.db.query('SELECT * FROM subject'+this.id+ id +this.category+ id +this.name+ id ,function(err,data){
        if(err){
            callback(err,null);
        }else{
            callback(err,data);
        }
    })
};

//post
Module.prototype.new = function(body,callback){
    console.log(body);
    this.db.query('INSERT INTO subject SET ?',body,function(err,data){
        if (err) {
            callback(err,null);
        }else{
            callback(err,body);
        }
    })
};

//put
Module.prototype.change = function(id,body,callback){
    this.db.query('UPDATE subject SET ? '+this.id+ id +this.category+ id +this.name+ id,body,function(err,data){
        if(err){
            callback(err,null);
        }else{
            callback(err,body);
        }
    })
};

//delete
Module.prototype.remove = function(id,callback){
    this.db.query('DELETE FROM subject'+this.id+ id +this.category+ id +this.name+ id,function(err,data){
        if(err){
            callback(err,null);
        }else{
            callback(err,data);
        }
    })
};

module.exports = Module ;