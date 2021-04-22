const express = require('express');

const app = express();

const path = require("path");

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 3000;

// Normalizes the path to the views folder
app.set("views", path.join(__dirname, "views"));
// Sets the view engine to handlebars
app.set("view engine", "hbs");

// Handles access to the public folder
app.use(express.static(path.join(__dirname,"public")));


// SAMPLE ROUTE 
app.get("/", (req, res, next) => {
    let loc = [51.505, -0.09]
    // Sending some data to the hbs page
    
    //Always stringify data that the scripts might use in your hbs file
    res.render("index.hbs", {loc: JSON.stringify(loc)});
  });
  
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
