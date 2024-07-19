const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://gopalkhandelwalstar:aVz0Lonep4bXHuYl@cluster0.hdvxcmj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

async function getEmpData() {
    let client = await MongoClient.connect(url);
    let connection = client.db('issueTracker'); // Establish connection
    return connection.collection('IssueTracker2023'); // creating a collection and naming it also
}

module.exports = getEmpData;