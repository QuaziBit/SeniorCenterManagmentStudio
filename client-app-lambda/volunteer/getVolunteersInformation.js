var AWS = require('aws-sdk'),
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
  var params = {
    TableName : 'volunteer_information'
  };
  documentClient.scan(params, function(err, data){
    if(err){
     callback(err, null);
    }else{
      callback(null, data.Items);
    }
  });
};
