const express = require("express");
const app = express();
const Car = require('./models/carModel');
const port = process.env.PORT || 5000;
const dbConnection = require('./db');
var cors = require('cors')
app.use(express.json());
const path = require("path");
const usersRoute = require('./routes/usersRoute')
const carsRoute = require('./routes/carsRoute')
const bookingsRoute = require('./routes/bookingsRoute')



app.use("/api/cars/", require("./routes/carsRoute"));
app.use("/api/users/", require("./routes/usersRoute"));
app.use("/api/bookings/", require("./routes/bookingsRoute"));
app.use(
  cors({
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: ['Content-Type', 'Authorization'],
    origin: ['http://localhost:3000', 'https://strong-zabaione-96e33f.netlify.app'], // whatever ports you used in frontend
  })
);

//----------deployment-----------------

// __dirname = path.resolve();

// if(process.env.NODE_ENV==="production") {
//  app.use(express.static(path.join(__dirname,"/frontend/build")));

//  app.get('*',(req,res)=>{
//    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
//  });
// }else{
app.get("/", (req, res) => {
  res.json({ message: "API is running.." })
});

// }


//----------deployment-----------



// app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`));
