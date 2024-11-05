import { MongoClient } from "mongodb";
import 'dotenv/config'

let _db = null 

async function connectToDatabase() {
    if (!_db) {
        const connectionString = process.env.MONGO_URI
        const databaseName = process.env.DB_NAME
        const client = await MongoClient.connect(connectionString)
        _db = client.db(databaseName)
    }
    return _db
}


export {connectToDatabase}