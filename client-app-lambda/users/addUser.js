var AWS = require('aws-sdk'), uuid = require('uuid'), 
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var ID = uuid.v1();
    var params = {
        Item : {
        "Id" : ID,
        "ma_fname" : event.firstName,
        "ma_lname" : event.firstName,
        "ma_username" : event.username,
        "ma_password" : event.password,
        "ma_token" : ID,
        },
    TableName : 'member_authentication' 

  };
    documentClient.put(params, function(err, data){
    callback(err, {
     "message":"[member authentication] information saved successfully."
    });
  });
};