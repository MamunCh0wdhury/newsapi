const mongoose = require("mongoose");
var timeAgo = require('node-time-ago');

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
{timestamps:timeAgo(Date().now())}
);


const News= new mongoose.model('News',newsSchema);
module.exports=News;