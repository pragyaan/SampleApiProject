/**
 * Created by Dinesh Reddy Maddula on 4/21/2017.
 */

var Connection = require('../utils/dbConnection'),
    db;

function Module(){
this.db =  Connection;
}
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
Module.prototype.findId = function(req,callback){
    var uni = req.params.id;
    console.log(uni);
    this.db.query('select * from subject  WHERE subject.id  = '+uni,function(err,data){
        if(err){
            callback(err,null);
        }else{
            callback(err,data);
        }
    })
};
Module.prototype.new = function(body,callback){
    console.log(body);
    // var post = {"id":48,
    //     "categoryid":1,
    //     "name":"Java Programming",
    //     "icon_class":"ts-javaprogramming",
    //     "description":"Java is a programing language expressly designed for use in the distributed environment of the Internet",
    //     "lastmoddatetime":"2017-02-02T03:16:33.000Z",
    //     "lastmoduserid":99999};
    this.db.query('INSERT INTO subject SET ?',body,function(err,data){
        console.log(data);
        if (data) {
            body.id = data.insertId;
        }else{
            callback(err,body);
        }
    })
};
Module.prototype.change = function(req,callback){
    var uni = req.params.id,
        post = req.body;
    this.db.query('UPDATE subject SET ? WHERE subject.id='+uni,post,function(err,data){
        if(err){
            callback(err,null);
        }else{
            callback(err,post);
        }
    })
};
Module.prototype.remove = function(req,callback){
    var uni = req.params.id;
    this.db.query('DELETE from subject WHERE subject.id ='+uni,function(err,data){
        if(err){
            callback(err,null);
        }else{
            callback(err,data);
        }
    })
};

module.exports = Module ;