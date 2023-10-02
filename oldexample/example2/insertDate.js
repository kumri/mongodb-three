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

    //Date format YYYY-MM-DDTHH:MM:SS
    const today = new Date();
    //const today = new Date("2023-10-02");
    //const today = new Date("2023-10-02T13:20:20");
    const product1 = {
      "name":"NintendoSwitch",
      "color":"red",
      "release_date":today
    }
  
    const result = await products.insertOne(product1);

    //console.log(result);
    console.log("complete")
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);