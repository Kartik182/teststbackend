const reviewData=require('../models/review');


exports.deletereview=async(req,res)=>{
    try {
        const {id}=req.params;
        const review=await reviewData.findByIdAndDelete(id);
        if(!review){
            return res.status(404).json({message:`cannot find book by ${id}`})
        }
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}