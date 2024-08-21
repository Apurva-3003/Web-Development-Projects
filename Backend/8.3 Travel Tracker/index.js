import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "babaibunny",
  port: 5432
});
db.connect();

const app = express();
const port = 3000;

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//GET home page
app.get("/", async (req, res) => {
  //response will store many data retrieved from the db query
  const response = await db.query("SELECT country_code FROM visited_countries");

  //response.rows is the key: value pairs which look like this- country_code: US, ...
  let data = response.rows;

  //populate the countries_array with the country_codes from the visited_countries table
  let countries_array = [];
  for (let i = 0; i < data.length; i++) {
    countries_array.push(data[i].country_code);
  }
  res.render("index.ejs", {total: countries_array.length, countries: countries_array});
});


//This route is accessed when user clicks the add button on the UI
app.post("/add", async (req, res) => {
  //First, find the 2 letter country code corresponding to the country entered by the user
  //$1 acts like a placeholder for first index in the array after the comma
  const input = req.body.country;
  const response = await db.query("SELECT country_code FROM countries WHERE country_name LIKE '%' || $1 || '%'", [input]);  

  //Insert the new country into the visited_countries table
  if(response.rows.length !== 0){
    const new_country_code = response.rows[0].country_code;
    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [new_country_code]);
    res.redirect("/");
  }
});



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});