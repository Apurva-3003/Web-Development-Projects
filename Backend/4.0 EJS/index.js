import express from "express";

const app = express();
const port = 3000;

//home page
app.get("/", (req, res) => {
    //logic for whats passed into the html file is done here
    const today = new Date();
    const day = today.getDay();
    
    let type = "a weekday";
    let adv = "Its time to work hard";

    if(day == 0 || day == 6){
        type = "the weekend";
        adv = "Its time to have fun";
    }

    //use render function to pass values into an html (ejs) file
    res.render("index.ejs", {
        daytype: type,
        advice: adv
    });
});

app.listen(port, (req, res) => {
    console.log(`Listening to port ${port}`);
});