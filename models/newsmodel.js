const mongoose = require("mongoose");
const moment = require('moment');


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
    timestamps: {
        type: Date,
        default: Date.now
    }

},
{ timestamps:true,}
);

newsSchema.virtual('timeAgo').get(function () {
    return moment(this.timestamps).fromNow();
});


const News= new mongoose.model('News',newsSchema);
module.exports=News;
