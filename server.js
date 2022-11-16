require("dotenv").config()
const port = process.env.PORT
const express = require("express")
const app = express()

//enable server.js to access the drinks data
let drinks = require("./models/drinks")
let food = require("./models/food")

app.get("/", (req, res) => {

    res.send("Welcome to the Gitpub App!")

})

app.get("/menu", (req, res) => {

    res.render("menu_index.ejs", {drinks, food})

})

//drinks
app.get("/menu/drinks/:id", (req, res) =>{

    const indexOfDrink = req.params.id


    for(drink of drinks) {
        let imageArr = drink.image.split("")
        imageArr.splice(imageArr.length-3, 3, "p","n","g")
        drink.image = imageArr.join("")
    }

    res.render("drinks_show.ejs", {drinks, index: indexOfDrink})

})

//food
app.get("/menu/food/:id", (req, res) =>{


    const indexOfFood = req.params.id

    for(foo of food) {
        let imageArr = foo.image.split("")
        imageArr.splice(imageArr.length-3, 3, "p","n","g")
        foo.image = imageArr.join("")
    }

    res.render("food_show.ejs", {food, index: indexOfFood})

})

app.listen(port, () => {

    console.log(`Listening on port: ${port}`)

})