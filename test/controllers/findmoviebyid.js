const movieData=require('../models/movie');



exports.findmoviebyid=async(req,res)=>{
    try{
        const{id}=req.params;
        const movie=await movieData.findById(id);
        res.status(200).json(movie);
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}