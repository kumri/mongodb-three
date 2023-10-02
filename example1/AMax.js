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

    const product = await products.aggregate([
      {
        $match:{
          price: 500,
          color:"pink"
        }
      },
      {
        $group:{
          _id:null,
          maxStock:{
            $max: "$stock"
          }
        }
      }
    ]);

    await product.forEach((doc) => {
      console.log(doc);
    });
    //console.log(product);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);