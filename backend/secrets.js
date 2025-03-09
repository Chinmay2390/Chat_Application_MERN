const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const MONGO_URI = 'mongodb://localhost:27017/chatApp';
const GENERATIVE_API_KEY = process.env.GENERATIVE_API_KEY;
const EMAIL = 'chinmaykamlaskar@gmail.com';
const PASSWORD = 'password';
const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
const AWS_SECRET = process.env.AWS_SECRET;

module.exports = {
  MONGO_URI,
  AWS_ACCESS_KEY,
  AWS_SECRET,
  GENERATIVE_API_KEY,
  EMAIL,
  PASSWORD,
  AWS_BUCKET_NAME,
};
