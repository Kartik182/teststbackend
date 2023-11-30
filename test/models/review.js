const mongoose=require('mongoose');
const review=new mongoose.Schema({
    content:{type:String},
    rating:{type:Number,required:true},
    author:{type:String,},
    createdAt:{type:Number}
})


module.exports =mongoose.model('review',review)