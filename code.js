const express = require("express");

const app = express();
app.set("view-engine", "ejs");

app.get("/", function(req, res){
    res.render("index.ejs");
})

app.post("/submit", function(req, res){
    res.send(req.body)
})

app.listen(3000);






























