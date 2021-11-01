const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log('Database Connected'))
    .catch(e => console.log(e));

module.exports = { mongoose };