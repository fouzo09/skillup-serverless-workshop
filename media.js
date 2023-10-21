const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1', 
  accessKeyId: 'AKIA34NWZN6YQEDOEO74',
  secretAccessKey: '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',
});


const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = 'media';


const createMedia = async(media) => {
    const params = {
      TableName: tableName,
      Item: media
    };
    
    const createdMedia = await dynamodb.put(params).promise();
    return createdMedia;
};


const getAllMedias = async() => {
    const params = {
        TableName: tableName
    };

    const listMedias = await dynamodb.scan(params).promise();
    return listMedias;
};  


module.exports = {
    createMedia,
    getAllMedias
}