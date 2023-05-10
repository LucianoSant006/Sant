var mysql = require('mysql')//  requrindo o armazenamento 
export var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "words"
})
/*export */ function query(){con.connect(function(err){
    if(err) throw err;
    con.query("SELECT count(*) from words",function(err,result,fields){
        if(err) throw err;
        return result;
        //console.log(result)  
        //var count = result;
        
        //console.log(count);
    })
    
})
}