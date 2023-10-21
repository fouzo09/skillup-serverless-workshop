const AWS = require('aws-sdk');

// AWS.config.update({
//   region: 'us-east-1', 
//   accessKeyId: 'AKIA34NWZN6YQEDOEO74',
//   secretAccessKey: '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',
// });

AWS.config.update({ region: 'us-east-1' });

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = 'category';


const createCategory = async(category) => {
    const params = {
      TableName: tableName,
      Item: category
    };
    
    const createdCategory = await dynamodb.put(params).promise();
    console.log(createdCategory);
    return createdCategory;
};


const getAllCategories = async() => {
    const params = {
        TableName: tableName
    };

    const listCategories = await dynamodb.scan(params).promise();
    return listCategories;
};  


module.exports = {
    createCategory,
    getAllCategories
}
  
