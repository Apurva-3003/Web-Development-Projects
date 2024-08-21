import express from "express";
import bodyParser from "body-parser";

//Get the file path dynamically in __dirname
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

//express function allows us to use the different protocols
const app = express();
const port = 3000;

//home page
app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/public/index.html");
});

//submit page
app.use(bodyParser.urlencoded({extended: true}));
app.post("/submit", (req, res) => {
  res.send(`<h1>Your Band name is: </h1><h2>${req.body["street"] + req.body["pet"]}</h2>`);
});
//NOTE: We could have used a custom middleware function to concatenate the 2 body elements from the request (pre-processing middleware)


//Testing for port input
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


