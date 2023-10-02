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

    const items = [
      {
          "_id":1,
          "name":"Nintendo Switch Lite",
          "description":"Handheld console from Nintendo",
          "color":"red",
          "price":9999,
          "condition":"New",
          "promotion":true
      },
      {
          "_id":2,
          "name":"Play Station 5",
          "description":"Console from Sony 5th generation",
          "color":"black",
          "price":20000,
          "condition":"broken",
          "promotion":false
      },
      {
          "_id":3,
          "name":"Play Station 5 Pro",
          "description":"Like PS5 but it's Pro",
          "color":"black",
          "price":25000,
          "condition":"broken",
          "promotion":false
      },
      {
          "_id":4,
          "name":"Play Station 5 Ultimate",
          "description":"Like PS5 but it's Ultimate",
          "color":"black",
          "price":25000,
          "condition":"New",
          "promotion":true
      },
      {
          "_id":5,
          "name":"Game Boy",
          "description":"Game console for boy",
          "color":"dark grey",
          "price":2700,
          "condition":"New",
          "promotion":false
      },
      {
          "_id":6,
          "name":"Wii",
          "description":"Motion control game console",
          "color":"white",
          "price":6000,
          "condition":"New",
          "promotion":false
      },
      {
          "_id":7,
          "name":"Wii U",
          "description":"Like Wii but U",
          "color":"white",
          "price":8000,
          "condition":"broken",
          "promotion":false
      },
      {
          "_id":8,
          "name":"Wii UwU",
          "description":"Like Wii but UwU",
          "color":"pink",
          "price":8080,
          "condition":"New",
          "promotion":false
      },
      {
          "_id":9,
          "name":"Game Girl",
          "description":"Game console for Girl",
          "color":"light grey",
          "price":2700,
          "condition":"New",
          "promotion":false
      },
      {
          "_id":10,
          "name":"X-Box 360",
          "description":"Console from Microsoft",
          "color":"black",
          "price":22000,
          "condition":"New",
          "promotion":true
      }
    ];
    const result = await products.insertMany(items);

    //console.log(result);
    console.log("complete")
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);