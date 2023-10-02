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
    const sale = database.collection('sale');
    const products = database.collection('sandbox');
    //const products = database.collection('products2');
    // Retrieve product information based on the product ID
    const productInfo = await products.findOne({ _id: 1 });
    const numberOfSales = 5; // Number of times you want to sell the product
    for (let i = 0; i < numberOfSales; i++) {
      // Check if there's enough stock to sell
      await products.updateOne({ _id: 1 }, { $inc: { stock: -1 } });
      const saleData = {
        name: productInfo.name,
        price: productInfo.price,
        shop: productInfo.shop,
        color: productInfo.color,
        sale_date: new Date()
      }
      await sale.insertOne(saleData);
    }
    //console.log(result);
    console.log(productInfo)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);