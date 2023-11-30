const mongoose=require('mongoose');

const movie=new mongoose.Schema({
    tittle:{type:String,required:true},
    description:{type:String,required:true},
    genre:{type:String,required:true},
    releaseYear:{type:Number,reuired:true},
    
})
module.exports =mongoose.model('movie',movie)
