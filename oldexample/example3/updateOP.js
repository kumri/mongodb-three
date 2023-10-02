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

    const query = { 
      "name":"Nintendo Switch Lite",
      "color": 'red' 
    };
    // _id:ObjectId('your_document_id')
    await products.updateOne({ _id: 1 }, { $unset: { price: '' } });
    //await products.updateOne({ _id: 1 }, { $set: { price: 1000 } });
    //await products.updateOne({ _id: 1 }, { $inc: { price: 100 } });
    //await products.updateOne({ _id: 1 }, { $inc: { price: -100 } });
    //await products.updateOne({ _id: 1 }, { $set: { bonus: [100,200,300] } });
    //await products.updateOne({ _id: 1 }, { $push: { bonus: 400 } });
    //await products.updateOne({ _id: 1 }, { $pull: { bonus: 2 } });// array start with index 0
    //await products.updateOne({ _id: 1 }, { $addToSet: { bonus: 1 } });
    //await products.updateOne({ _id: 1 }, { $pop: { bonus: 1 } });//remove last
    //await products.updateOne({ _id: 1 }, { $rename: { bonus: "newbonus" } });
    //await products.updateOne({ _id: 1 }, { $rename: { bonus: "newbonus" } });
    //await products.updateOne({ _id: 555 }, { $set: { price: 1000 } });
    //await products.updateOne({ _id: 555 }, { $set: { price: 1000 } }, { upsert: true });

    
    console.log("complete");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);