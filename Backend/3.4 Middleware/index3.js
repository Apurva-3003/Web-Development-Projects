import express from "express";

const app = express();
const port = 3000;

//This is a custom middleware which simply prints the type and the url of the request sent by the server
function logger(req, res, next){
  console.log(req.method);
  console.log(req.url);
  //need this function to move on to the next line of code:
  next();               
}


app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
