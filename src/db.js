import { MongoClient } from "mongodb";

let db;

async function connectToDb(cb) {
  const client = new MongoClient(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.zrdhxtc.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`
  );
  await client.connect();
  db = client.db("react-blog-db");
  cb();
}

export { db, connectToDb };
