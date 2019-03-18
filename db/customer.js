
const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url = "mongodb://localhost:27017/myproject";
// Database Name
const dbName = "test";
var client;
var customerDB;

const findCustomerByName = async (nameToMatch) =>
{
  try{
    var customer = await customerDB.collection("customers").findOne({
      name: {$eq: nameToMatch}
    });
    return customer;
  }
  catch(err)
  {
    console.log("Error occured trying to find customer"+ err);
    return null;
  }
}

const retrieve = async (nameToMatch) => {
  customerDB = await getCustomerDB();
  customer = await findCustomerByName(nameToMatch);
  return customer;
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
  customer = await findCustomerByName(customerBody.name);
  if (customer !== null) 
  {
    console.log("customer with that name exists");
    //TODO: return http status code for exists
    return null;
  }
  //TODO: return customer body with 200 if this is successful
  //TODO: return proper http status code on error
  customer = await customerDB.collection("customers").insertOne(customerBody);
  return customer;
}

module.exports = { retrieve, createNew }
;
