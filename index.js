const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const cors = require('cors');

dotenv.config({ path: './config/config.env'});

// bring the routes mmodule here
const exercises = require('./routes/exercises');


connectDB();
const app = express();

app.use(cors());

app.use(express.json());
app.use('/main', exercises);

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`serve is running in ${process.env.NODE_ENV} mode on port ${PORT}`))

