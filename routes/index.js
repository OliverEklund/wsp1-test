import express from "express"

const router = express.Router()

router.get("/", (req, res) => {home})

router.get("/about", (req, res) => {about})

router.get("/greeting", (req, res) => {greeting})

export default router