//We are only able to use the protocols (GET, POST, etc...) thanks to express
import express from "express";
import bodyParser from "body-parser";

//with the help of the next 3 lines of code, you can get the file path dynamically (needed when you put the server up into the cloud)
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//Mounting the middleware to create a body for url-encoded requests
app.use(bodyParser.urlencoded({extended: true}));

//when user clicks the submit button, a post request is sent to the "/submit" route 
app.post("/submit", (req, res)=>{
  //req.body contains the data the user typed in
  console.log(req.body);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
