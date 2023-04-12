// import modules
import  express  from "express"
import ejs from "ejs"

// import data
import { language } from "./data/language-data.js"

// create Express app
const app = express()

// middleware
app.use(express.static("public"))
app.set("view engine", "ejs")

// mount routes
app.get("/", (req, res)=> {
    res.render("index.ejs")
})

app.get("/language", (req, res)=> {
    res.render("language/index", { language })
})

// listen on port 3000
app.listen(3000, ()=> {
    console.log("Server is running on port 3000")
})