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
    const products = database.collection('sandbox');

    const product1 = {
      "name":"NintendoSwitch",
      "color":"red"
    }
    const product2 = {
      "name":"NintendoSwitch",
      "color":"blue"
    }
    const items = [product1,product2]
    const result = await products.insertMany(items);

    //console.log(result);
    console.log("complete")
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);