'use strict';

let dbConfig = require("../Utilities/dbConfig");


let createUser = (dataToSet, callback) => {
    dbConfig.getDB().query("insert into user_master set ? ", dataToSet, callback);
    
}

let updateUser = (criteria,dataToSet,option=null, callback) => {
    let conditions = "";
    let setData = "";
    criteria.email ? conditions += ` and email = '${criteria.email}'` : true;
    dataToSet.profile_status ? setData += `  profile_status = '${dataToSet.profile_status}'` : true;
    dataToSet.forgotToken ? setData += ` forgotToken = '${dataToSet.forgotToken}'` : true;
    dataToSet.activationToken ? setData += ` activationToken = ''` : "";
    dataToSet.password ? setData += ` password = '${dataToSet.password}'` : true;
    dataToSet.status ? setData += ` ,status = '${dataToSet.status}'` : true;
    dataToSet.emptyToken ? setData += `,forgotToken = '',` : true;
    dataToSet.token ? setData += ` token = '${dataToSet.token}'` : true;
    dbConfig.getDB().query(`UPDATE user_master SET ${setData} where 1 ${conditions}`);
    console.log(`UPDATE user_master SET ${setData} where 1 ${conditions}`);

    dbConfig.getDB().query('UPDATE user_master SET profile_status=? where email= ?',[dataToSet.profileStatus,criteria.email], callback);
}
 

let getUserById = (id,callback) =>{
    dbConfig.findById(id,callback)
}


let getUsers = (criteria, callback) => {
    let conditions = "";
    criteria.email ? conditions += ` and email = '${criteria.email}'` : true;
    criteria.status ? conditions += ` and status = '${criteria.status}'` : true;
    criteria.user_type ? conditions += ` and user_type = '${criteria.user_type}'` : true;    
    criteria.user_id ? conditions += ` and user_id = '${criteria.user_id}'` : true;
    criteria.password ? conditions += ` and password = '${criteria.password}'` : true;
    criteria.forgotToken ? conditions += ` and forgotToken = '${criteria.forgotToken}'` : true;
    criteria.token ? conditions += ` and forgotToken = '${criteria.token}'` : true;
    criteria.activationToken ? conditions += ` and activationToken = '${criteria.activationToken}'` : true;

    dbConfig.getDB().query(`select user_id,first_name,last_name,email,token,status from user_master where 1 ${conditions}`, callback);
	console.log(`select user_id,first_name,last_name,email,token,status from user_master where 1 ${conditions}`);    
}

let getUserPackage = (criteria,callback) =>{
    let conditions = "";
    criteria.userId ? conditions += ` and user_id = ${criteria.userId}` : true;
    conditions += ` and state = 'approved'`;
    dbConfig.getDB().query(`SELECT package_id FROM transactions WHERE 1 ${conditions}`, callback);
    console.log(`SELECT package_id from transactions where 1 ${conditions}`);    
}

let getContent = (criteria,callback) =>{
    let conditions = "";
    criteria.type ? conditions += ` and type = '${criteria.type}'` : true;
    dbConfig.getDB().query(`SELECT * FROM content_master WHERE 1 ${conditions}`, callback);
    console.log(`SELECT content FROM content_master WHERE 1 ${conditions}`);    
}



module.exports = {
    createUser: createUser,
    getUsers: getUsers,
    updateUser:updateUser,
    getUserPackage:getUserPackage,
    getContent : getContent
}
