import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "apurva";
const yourPassword = "babaibunny";
const yourAPIKey = "59e0f158-cd52-4301-971f-b38ea816a356";
const yourBearerToken = "a7006e91-ed74-4b87-ae4e-7b905ba32607";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});




app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try {
    //this get request from the api generates a random task to do
    const response = await axios.get("https://secrets-api.appbrewery.com/random");

    //axios returns a JS object
    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result });//send the unparsed JSON to index.ejs

  } catch (error) {
    res.status(404).send("Error: ", error.message);
  }
});







app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  
  const config = {
    auth: {
      username: "apurva",
      password: "babaibunny",
    }
  };

  try {
    //this is how a get request for an api with basic authorisation works
    const response = await axios.get("https://secrets-api.appbrewery.com/all?page=2", config);
    //axios returns a JS object
    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result });

  } catch (error) {
    res.status(404).send("Error: ", error.message);
  }
});






app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  
  const config = {
    //this is how you pass query parameters to api get requests
    params: {
      score: 5,
      apiKey: yourAPIKey,
    }
  };

  try {
    //this is how a get request for an api with apiKey authorisation works
    const response = await axios.get("https://secrets-api.appbrewery.com/filter", config);
    //axios returns a JS object
    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result });

  } catch (error) {
    res.status(404).send("Error: ", error.message);
  }
});






app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  
  const config = {
    //unlike the apiKey which is passed as query parameter, the bearer token is passed in the header
    headers: { 
      Authorization: `Bearer ${yourBearerToken}` 
    },
  }
  try {
    //this is how a get request for an api with bearer token authorisation works
    const response = await axios.get("https://secrets-api.appbrewery.com/secrets/42", config);
    //axios returns a JS object
    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result });

  } catch (error) {
    res.status(404).send("Error: ", error.message);
  }
});





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
