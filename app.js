require('dotenv').config();
const express = require ("express");
require("./db/connection");
const newsRouter=require("./routers/newsRouters");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(newsRouter);
app.listen(PORT, ()=>{
    console.log(`connection establish on ${PORT}`);
    
});
