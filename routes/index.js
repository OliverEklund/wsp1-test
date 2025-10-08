import express from "express"
import fs from "fs"

const router = express.Router()


router.get("/", (req, res) => {
    res.render("index.njk", {
        title: "Vår första dynamiska sida",
        message: "Med Nunjucks skapar vi någonting!"
    })
})

router.get("/about", (req, res) => {
    res.render("about.njk", {
        title: "Om oss",
        message: "Detta är ett skolarbete av Oliver."
    })
})

router.get("/greeting", (req, res) => {
    console.log(req.query)
    res.render("greeting.njk", {
        title: "Hälsningssida",
        name: req.query.name,
        message: req.query.message
    })
})

const {movies} = JSON.parse(fs.readFileSync("./data/movies.json"))
router.get("/movies", (req, res) => {
    // res.json(movies)
    res.render("movies.njk", {
        title: "Movie-showcase",
        name:"Movie showcase",
        message: "Dessa är bra filmer",
        movies
    })
})

export default router