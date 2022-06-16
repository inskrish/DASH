const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
// require("dotenv").config();
var app = express();
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

//  mondodb connect
mongoose
.connect(
    "mongodb+srv://krish0003:9033702483@cluster0.6tisuai.mongodb.net/ISMS_DATABASE?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const ISMS_schema = new mongoose.Schema({
    id: Number,
    name: String,
    rank: String,
    number: String,
    adharno: String,
    snumber: String,
    cat: String,
    blacklist: String,
    place: String,
    supervisor: String,
    token: String,
    timein: Date,
    datein: Date,
    timeout: Date,
    dateout: Date
});

// const ISMS_schema = new mongoose.Schema({
//     id: Number,
//     category: String,
//     date: Date,
//     time: Date
// });

const entry = mongoose.model('isms', ISMS_schema);


app.get('/users/',async (req, res) => {
    const users = await entry.find({});
    try{
        res.send(users);
    }
    catch (error) {
        res.status(500).send(error);
    }
});

app.listen(2500, () => console.log("Server listening to port 2500"));
