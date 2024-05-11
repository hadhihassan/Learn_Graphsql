import express from 'express';


const app = express();
app.get("/", (req, res) => {
    res.send("sdfsdfsdfs")
})
app.listen(3003, ()=>{
    console.log("Runinng app 3000")
})