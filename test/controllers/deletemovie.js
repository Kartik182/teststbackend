const movieData=require('../models/movie');


exports.deletemovie=async(req,res)=>{
    try {
        const {id}=req.params;
        const movie=await movieData.findByIdAndDelete(id);
        if(!movie){
            return res.status(404).json({message:`cannot find book by ${id}`})
        }
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}