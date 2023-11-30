const movieData=require('../models/movie');

exports.updatemovie=async(req,res)=>{
    try {
        const{id}=req.params;
        const movie=await movieData.findByIdAndUpdate(id,req.body);
        if(!movie){
            return res.status(404).json({message:`cannot find book by ${id}`})
        }
        const updatedmovie=await movieData.findById(id);
        res.status(200).json(updatedmovie);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}