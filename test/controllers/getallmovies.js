const movieData=require('../models/movie');

exports.getallmovies=async(req,res)=>{
    try{
        const movies=await movieData.find({});
        res.status(200).json(movies);
    }catch(error){
        res.status(500).json({message:error.message});

}
}