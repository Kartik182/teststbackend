const reviewData=require('../models/review');



exports.findreviewbyid=async(req,res)=>{
    try{
        const{id}=req.params;
        const  review=await reviewData.findById(id);
        res.status(200).json( review);
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}