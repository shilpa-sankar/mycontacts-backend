// require() will try to access the downloaded packages in use for project,
// ie;load and import external modules or files into a Node.js application
const express = require("express");
// import { errorHandler } from "./middleware/errorHandler";
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT|| 3000;

app.use(express.json());
app.use("/api/contacts",require("./routes/routeControls"));
app.use(errorHandler);
// app.get('/api/contacts', (req, res) => {
//     res.status(300).json({message:'Get all Contacts'});
//     // res.send("get messages");
// })

// app.listen will is using the listen method ofexpress application to start the web server 
// and make it 'listen' for incoming HHTTP requests on a specific 'port'
// listen() method takes 2 args 
// 1.port- where the server will listen incoming requests
// 2.callback fun - which will get executed when the server has successfully started & listening on the specified port
app.listen(port, () => {
    console.log(`ggwp ${port}`);
});