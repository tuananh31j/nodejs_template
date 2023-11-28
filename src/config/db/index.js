const mongoose = require('mongoose');
require('dotenv').config()
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_LINK_LOCAL)
        console.log("Connected!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };
