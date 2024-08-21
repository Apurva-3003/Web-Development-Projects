//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";

//Get the file path dynamically in __dirname
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var check = false;

//home page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

//Use the bodyparser package to allow access to req.body
app.use(bodyParser.urlencoded({extended: true}));

//function to check if the password is correct - (middleware type: authentication)
function passwordCheck(req, res, next){
    if(req.body["password"] == "ILoveProgramming"){
        check = true;
    }else{
        check = false;
    }
    next();
}
app.use(passwordCheck);


//secrets page
app.post("/check", (req, res) => {
    //first, need to check if the password is correct
    if(check){
        res.sendFile(__dirname + "/public/secret.html");
    }else{
        res.sendFile(__dirname + "/public/index.html");
    }
});

//secret page
app.listen(port, (req, res) =>{
    console.log(`Listening on port ${port}`)
});
