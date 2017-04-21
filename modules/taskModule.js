/**
 * Created by Dinesh Reddy Maddula on 4/21/2017.
 */

var Connection = require('../utils/dbConnection');

function Module(){

}
Module.prototype.findAll = function(req,res){
    console.log("hello im in Module");
    // Connection.fndALL({},function(err,data){
    //     console.log("hello im in Connection");
    //     if(err) cb({message:"error occured while tring to fetch records from database"});
    //     else cb(data);
    // });

    return Connection.query('select * from subject');

    //res.send("Hello World");
    // return res.json({
    //     message : "success",
    //     error : "false"
    // })
};
// Module.prototype.findAll = function(){
//
// };
// Module.prototype.findAll = function(){
//
// };
// Module.prototype.findAll = function(){
//
// };
// Module.prototype.findAll = function(){
//
// };

module.exports = Module ;