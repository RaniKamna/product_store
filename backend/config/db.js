const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env' });

const mongoURI = process.env.DB_URI;

const mongoDB = () => {
    mongoose.connect(mongoURI).then((data) => {
        console.log(`Mongodb connected with server`)
    })
}

module.exports = mongoDB;