
const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url = "mongodb://localhost:27017/myproject";
// Database Name
const dbName = "test";
var client;
var customerDB;

const retrieve = async (id) => {
  console.log("IN customer get" + id);
  try {
    // Use connect method to connect to the Server
    await client.connect();

    const db = client.db(dbName);
    var customersColl = await db.collection("customers", { strict: true }, function callback (error, collection) {
      console.log(error);
    });
    customersColl.findOne(x => (x.customerId === id));
  } catch (err) {
    console.log(err.stack);
  }

  client.close();
};

const getCustomerDB = async () => {
  if (!customerDB) {
    try {
      var client = await MongoClient.connect(url);
      customerDB = client.db(dbName);
      return customerDB;
    } catch (err) {
      console.log(err.stack);
    }
  }
  else{
    return customerDB;
  }
}

const createNew = async(customerBody) =>
{
  customerDB = await getCustomerDB();
  customerDB.collection("customers").insertOne(customerBody, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });
}

module.exports = { retrieve, createNew }
;
