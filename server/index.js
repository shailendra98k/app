const express = require('express');
const app = express();
const PORT = 8000;
app.get('/api/',(req,res)=>{
    res.send("Hello Neetu.. Soory for delay...");
})

app.listen(PORT, (err)=>{
    if(err){
        console.log("Error in connection")
    }else{
        console.log("Server up and running at PORT ",PORT)
    }
})