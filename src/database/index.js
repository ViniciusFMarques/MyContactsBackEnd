const {Client} = require('pg');

require('dotenv').config();
const DATABASEPORT = process.env.DATABASEPORT;


const client = new Client({
  host: 'localhost',
  port: DATABASEPORT,
  user: 'root',
  password: 'root',
  database: 'mycontacts'
});

client.connect();

module.exports.query = async (query, values) => {
  const {rows} = await client.query(query, values);
  return rows;
};

