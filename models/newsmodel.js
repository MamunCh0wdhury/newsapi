const mongoose = require("mongoose");


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
    uploadTime:{
        type:Date,
        required:true
    }
},
{ timestamps:true,}
);


const News= new mongoose.model('News',newsSchema);
module.exports=News;