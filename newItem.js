var AWS = require('aws-sdk');
var DynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async (event) => {

    var params = {
        TableName: 'OpenSourceryTodoTable',
        Item: {
            userId: "1233",
            noteId: "name"
        }
    };

    await DynamoDB.put(params).promise()
    return { statusCode: 200, body: "" };
};
