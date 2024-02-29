const mongoose = require("mongoose");
var moment = require('moment'); 

const newsSchema = new mongoose.Schema({

    title:{
        type:String,
        required :true,
        minLength :7
    },

    urlLink:{
        type : String,
        required : true,
    },
    thumbNailUrl:{
        type : String,
        required : true,
    },
},
{ timestamps:moment().format()}
);


const News= new mongoose.model('News',newsSchema);
module.exports=News;