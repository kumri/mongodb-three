const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://admin:mongo2023@cluster0.70hdoms.mongodb.net/";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();

    const database = client.db('mongodb');
    const products = database.collection('products2');
    const query = {
      "size":{ $all:['s','m'] },
      "color":"pink",
      "stock":{$lt:3},
      "published":0
    };
    const product = await products.find(query).toArray();

    console.log(product);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);