// const bp = require("body-parser");
const express = require("express");
const validator = require("express-validator");
const session = require("express-session");
const mysql = require("mysql");
const app = express();
const conn = mysql.createConnection({host:"localhost", user:"root", password:"", database:"vcf"});

app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: "somekey",
    resave: false,
    saveUninitialized:false
}))
app.set("view-engine", "ejs");
app.get("/account", (req, res) => {
    res.render("index.ejs");
})

app.get("/", (req, res) => {
    res.render("login.ejs");
});

app.post("/login", (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    console.log(username, password);
    res.render("index.ejs");
    session.username = username;
});

app.get("/home", (req, res) => {
    res.render("homepage/index.ejs");
})

app.post("/submit", (req, res) => {
    var sql = "SELECT * FROM users";
    conn.query(sql, (err, result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render("data.ejs", {'users':result})
            // for(var i = 0; i<result.length; i++){
            //     console.log(result[i].id,result[i].fullname, result[i].username, result[i].password, "");
            // }
        }
    })
})



app.get("/a", (req, res)=>{
    res.send(session.username);
})

app.get("/b", (req, res)=>{
    res.send(session.username);
})


app.get("/c", (req, res)=>{
    res.send(session.username);
})


app.get("/logout", (req, res)=>{
    session.username = null;
    res.send(session.username);
})









app.listen('3000', (err)=>{
    if(!err){
        console.log("Server Started");
    }
    if(conn.connect((err) => {
        if(err){
            console.log("error");
            console.log(err);
        }
        else{
            console.log("connected")
        }
    }));
})

