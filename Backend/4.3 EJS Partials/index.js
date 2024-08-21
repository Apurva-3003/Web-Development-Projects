import express from "express";

const app = express();
const port = 3000;

/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */


//home page
app.get("/", (req, res) =>{
  res.render("index.ejs");
});

//about page
app.get("/about", (req, res) => {
  res.render("about.ejs");
});

//contact page
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

//Have to use express middleware to let the program know where the static files are located
app.use(express.static("public"));
//IMP NOTE: when linking to the pages, (eg.index.ejs) they're all with reference to the views folder
//and when linking to the stylesheets, they are with reference to the public folder, thanks to this line of code


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
