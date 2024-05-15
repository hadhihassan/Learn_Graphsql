import express from 'express';


const app = express();
app.get("/", (req, res) => {
    res.send("sdfsdfsdfs")
})
app.listen(9000, ()=>{
    console.log("Runinng app 3000")
})