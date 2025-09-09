import express from "express"
import nunjucks from "nunjucks"
import morgan from "morgan"
// let, var, 

const app = express()
app.use(morgan("dev"))
app.use(express.static("public"))

nunjucks.configure("views", {
    autoescape: true,
    express: app
})

app.get("/", (req, res) => {
    res.render("index.njk", {
        title:"Vår första dynamiska sida",
        message:"tack vare nunjucks"
    })

} )

app.get("/about", (req, res) => {
    res.render("about.njk", {
        title: "ABOUT PAGE: IF IF IF IF IF IF IF IF IF",
        message: "denna webbsida är skolarbete"
    })
})

app.listen(3000, () => {
    console.log("server is running on http://localhost:3000")
})

app.get("/greeting", (req, res) => {
    console.log(req.query)
    res.send(`hejsan ${req.query.name}, ${req.query.message}`)
})