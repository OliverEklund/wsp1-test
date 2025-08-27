import express from "express"
// let, var, 

const app = express()

app.get("/", (req, res) => {
    res.send("<h1>Hello World!<h1>")
} )

app.get("/about", (req, res) => {
   res.json({
    "message": "Evil"
   })
} )

app.listen(3000, () => {
    console.log("server is running on http://localhost:3000")
})