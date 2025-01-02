const client = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const HOST = process.env.DB_HOST;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const DATABASE = process.env.DB_DATABASE;

const con = client.createConnection({
  user: USER,
  host: HOST,
  password: PASSWORD,
  database: DATABASE,
});

if (con) {
  console.log("DB is connected");
} else {
  console.log("Some error while connecting to DB!");
}
module.exports = con;
