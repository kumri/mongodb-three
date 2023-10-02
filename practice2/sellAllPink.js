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
    const query = {
      //shop:1,
      //color:{$in:["pink","red"]}
      _id:{$in:[1,2]}
    };
    const product = await products.find(query).toArray();
    const updatePromise = []
    const insertPromise = []
    product.forEach(pd => {
      if (pd.stock > 0){
        //console.log(pd.name,pd.color,pd.stock);
        for (let i = 0; i < pd.stock; i++) {
          console.log(pd.name,pd.color,pd.stock);
          updatePromise.push(pd._id)
          //await products.updateOne({ _id: pd._id }, { $inc: { stock: -1 } });
          const saleData = {
            name: pd.name,
            price: pd.price,
            shop: pd.shop,
            color: pd.color,
            sale_date: new Date()
          }
          //await sale.insertOne(saleData);
          insertPromise.push(saleData);
        }
      }
    });
    for (let i = 0; i < updatePromise.length; i++) {
      await products.updateOne({ _id: updatePromise[i] }, { $set: { stock: 0 } });
    }
    await sale.insertMany(insertPromise);
    console.log("complete");
    //console.log(product)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);