const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

const port = 3005;

app.listen(port,(() => {
    console.log(`Server Running at:http://localhost:${port}/`)
}))


//Get Helloworld


app.get("/",async(req,res) => {
    res.send({message:"Hello world!!!"})
})