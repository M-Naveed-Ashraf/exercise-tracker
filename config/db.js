const mongoose = require('mongoose');

const connectDB = async () => { 
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true
        });

        console.log(`connected to tha MONGO_DB: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error Message: ${error}`);
    }
}

module.exports = connectDB;