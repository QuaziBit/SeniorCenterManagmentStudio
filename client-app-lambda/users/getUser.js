var AWS = require('aws-sdk'),
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
   
    var params = {
        TableName: 'member_authentication',
        Key: {
                'ma_username': event.username
        }
    };

    // Call DynamoDB to read the item from the table
    documentClient.get(params, function(err, data)
    {
        if (err) 
        {
            var response = {
                "statusCode": 400
            };

            callback(null, response);
        } 
        else 
        {
            if (event.username === data.Item['ma_username'] && event.password === data.Item['ma_password'] )
            {
                callback(null, data.Item);
            }
            else
            {
                var response = {
                    "statusCode": 300
                };
                callback(null, response);
            }
        }
    });
};