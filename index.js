var express = require('express')

const SERVER_PORT = 8089
var app = express()

//Static middleware
app.use("/test", express.static("./public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//http://localhost:8089/hello
app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>")
});

//Query parameter
//http://localhost:8089/user?fnm=ali&lnm=aloreabi
app.get("/user", (req, res) => {
    const data = req.query
    if(data.id == undefined){
        res.send("Required id as a query param")
    }else{
        res.send(data)
    }
})


//PATH Parameter
//http://localhost:8089/user/ali/aloreabi
app.post("/user/:fname/:lname", (req,res) =>{
    const data = req.params
    let fnm = req.params.fname
    let lnm = req.params.lname
    res.send(data)
})


app.listen(SERVER_PORT, ()=> {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})
