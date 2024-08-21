import express from "express";

const app = express();
const port = 3000;

//port is the address which we listen on and the anonymous function is what happens when accessing the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}.`);
})

//Function to get the request from the server and respond to it.
//In this function Im getting the request for the home page, denoted by: "/"
app.get("/", (req, res) => {
    res.send("<h2>Home Page</h2>");
})

app.get("/about", (req, res) => {
    res.send("<h2>Apurva Agrawal</h2>");
})

app.get("/contact", (req, res) => {
    res.send("<h2>My number</h2>");
})