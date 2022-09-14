const mongoose = require("mongoose");

function connectDB() {

    mongoose.connect('mongodb+srv://shubham:Shubham900;@cluster0.p7ax7wh.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })

    const connection = mongoose.connection

    connection.on('connected', () => {
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error', () => {
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

