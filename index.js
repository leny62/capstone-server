const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./src/routes/users');
const app = express();

mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("App connected to DB...");
})
.catch((error)=>{
    console.log("App failed to connect to DB.. error "+error);
})

app.use(bodyParser.json());
app.use(usersRouter)

app.get('',(req,res)=>{
    res.send("Welcome to my app").status(200)
})
app.use('/api/user',usersRouter)
const port = 2000;
app.listen(port,()=>{
    console.log("App connected "+port);
})