const mongoose = require("mongoose");
const url = process.env.DATA_URL;
mongoose.connect(url).then(()=>{console.log("Connection Established");}).catch((e)=>{console.log("No Connection");})
